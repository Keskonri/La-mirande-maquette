import { test, expect } from "@playwright/test";

const BASE = "http://localhost:3000";

test.describe("La Mirande — Tests E2E", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE, { waitUntil: "networkidle" });
  });

  // ─── Page load ───
  test("la page se charge sans erreur", async ({ page }) => {
    await expect(page).toHaveTitle(/La Mirande/);
    // No console errors
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    await page.waitForTimeout(1000);
    expect(errors).toHaveLength(0);
  });

  // ─── Hero Section ───
  test("le hero affiche le titre et le sous-titre", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("La Mirande");
    await expect(
      page.locator("section[aria-label='Accueil']")
    ).toBeVisible();
    // Surtitre
    await expect(page.getByText("Depuis le XIV")).toBeVisible();
    // Sous-titre
    await expect(
      page.getByText("Hôtel particulier au pied du Palais des Papes")
    ).toBeVisible();
  });

  // ─── Navigation ───
  test("la navbar est transparente puis opaque au scroll", async ({
    page,
  }) => {
    const header = page.locator("header");
    // Initially transparent
    await expect(header).toBeVisible();
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 200));
    await page.waitForTimeout(600);
    // Should have backdrop blur class
    const classes = await header.getAttribute("class");
    expect(classes).toContain("backdrop-blur");
  });

  test("les liens de navigation existent", async ({ page }) => {
    const navLinks = ["La Maison", "Chambres", "Tables", "Expériences", "Réserver"];
    for (const label of navLinks) {
      await expect(
        page.locator(`nav a:has-text("${label}")`).first()
      ).toBeVisible();
    }
  });

  // ─── Intro / L'âme de la maison ───
  test("la section Intro affiche la citation et les compteurs", async ({
    page,
  }) => {
    const section = page.locator("#maison");
    await expect(section).toBeVisible();
    await expect(
      page.getByText("Il y a des lieux où le temps ne passe pas")
    ).toBeVisible();
  });

  // ─── Chambres ───
  test("la section Chambres affiche 4 chambres", async ({ page }) => {
    const section = page.locator("#chambres");
    await section.scrollIntoViewIfNeeded();
    const rooms = ["La Roseraie", "Le Grand Corail", "Le Perroquet", "La Corne d'Abondance"];
    for (const name of rooms) {
      await expect(page.getByText(name).first()).toBeVisible();
    }
  });

  test("les prix des chambres sont affichés", async ({ page }) => {
    await expect(page.getByText("420").first()).toBeVisible();
    await expect(page.getByText("890").first()).toBeVisible();
  });

  // ─── Gastronomie ───
  test("la section Gastronomie affiche les onglets et le contenu", async ({
    page,
  }) => {
    const section = page.locator("#tables");
    await section.scrollIntoViewIfNeeded();
    // All 4 tabs visible
    const tabs = [
      "Restaurant Gastronomique",
      "La Table Haute",
      "Le Bistrot de Florent",
      "Le Mirage",
    ];
    for (const tab of tabs) {
      await expect(page.getByRole("button", { name: tab })).toBeVisible();
    }
    // Default tab shows Michelin
    await expect(page.getByText("1 étoile Michelin")).toBeVisible();
  });

  test("le changement d'onglet Gastronomie fonctionne", async ({ page }) => {
    const section = page.locator("#tables");
    await section.scrollIntoViewIfNeeded();
    // Click on La Table Haute
    await page.getByRole("button", { name: "La Table Haute" }).click();
    await page.waitForTimeout(600);
    await expect(page.getByText("Expérience immersive")).toBeVisible();
    await expect(page.getByText("grande table de sycomore")).toBeVisible();
  });

  // ─── Expériences ───
  test("la section Expériences affiche 4 expériences", async ({ page }) => {
    const section = page.locator("#experiences");
    await section.scrollIntoViewIfNeeded();
    await expect(page.getByText("École de cuisine Le Marmiton").first()).toBeVisible();
    await expect(page.getByText("Concerts de musique de chambre").first()).toBeVisible();
    await expect(page.getByText("Le Jardin secret").first()).toBeVisible();
    await expect(page.getByText("Art & Culture").first()).toBeVisible();
  });

  // ─── Témoignages ───
  test("la section Témoignages affiche un témoignage", async ({ page }) => {
    await expect(page.getByText("Ils ont vécu La Mirande")).toBeVisible();
    // At least one testimonial author visible
    const authors = ["Claire & Mathieu", "James Whitfield", "Sophie Bertrand"];
    let found = false;
    for (const author of authors) {
      const el = page.getByText(author);
      if (await el.isVisible().catch(() => false)) {
        found = true;
        break;
      }
    }
    expect(found).toBe(true);
  });

  // ─── Réservation ───
  test("la section Réservation affiche le formulaire", async ({ page }) => {
    const section = page.locator("#reserver");
    await section.scrollIntoViewIfNeeded();
    await expect(
      page.getByText("Votre séjour à La Mirande")
    ).toBeVisible();
    // Form fields exist (labels are separate elements, use text locator)
    await expect(page.getByText("Arrivée")).toBeVisible();
    await expect(page.getByText("Départ")).toBeVisible();
    await expect(page.getByText("Personnes")).toBeVisible();
    await expect(page.locator("#reserver form")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Vérifier les disponibilités" })
    ).toBeVisible();
  });

  test("les avantages réservation directe sont listés", async ({ page }) => {
    const avantages = [
      "Late check-out offert",
      "Surclassement sous réserve",
      "Petit-déjeuner inclus",
      "Annulation flexible",
    ];
    for (const a of avantages) {
      await expect(page.getByText(a)).toBeVisible();
    }
  });

  // ─── Footer ───
  test("le footer affiche les infos de contact et le credit Filix", async ({
    page,
  }) => {
    await expect(
      page.getByText("4, Place de l'Amirande")
    ).toBeVisible();
    await expect(page.getByText("+33 4 90 14 20 20")).toBeVisible();
    await expect(page.getByText("Filix Agency").first()).toBeVisible();
  });

  // ─── Responsive ───
  test("le menu hamburger apparaît sur mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE, { waitUntil: "networkidle" });
    const hamburger = page.getByLabel(/menu/i);
    await expect(hamburger).toBeVisible();
    // Desktop nav should be hidden on mobile
    await expect(page.locator("nav")).toBeHidden();
  });

  test("le menu mobile s'ouvre et se ferme", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE, { waitUntil: "networkidle" });
    // Open menu
    await page.getByLabel(/ouvrir le menu/i).click();
    await page.waitForTimeout(700);
    // Menu overlay links should be visible
    const menuOverlay = page.locator(".fixed.inset-0.z-40");
    await expect(menuOverlay).toBeVisible();
    // Close by clicking a link inside the overlay
    await menuOverlay.getByText("Chambres").click();
    await page.waitForTimeout(700);
  });

  // ─── Accessibility ───
  test("toutes les images ont un attribut alt", async ({ page }) => {
    const images = page.locator("img");
    const count = await images.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).toBeTruthy();
    }
  });

  test("la structure sémantique est correcte", async ({ page }) => {
    await expect(page.locator("header")).toHaveCount(1);
    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.locator("footer")).toHaveCount(1);
    // At least 7 sections in main
    const sections = page.locator("main section");
    const count = await sections.count();
    expect(count).toBeGreaterThanOrEqual(7);
  });
});
