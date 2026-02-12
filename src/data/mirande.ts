export const hotel = {
  name: "La Mirande",
  tagline: "Hôtel particulier au pied du Palais des Papes",
  stars: 5,
  since: "XIVe siècle",
  address: {
    street: "4, Place de l'Amirande",
    city: "Avignon",
    zip: "84000",
    country: "France",
  },
  phone: "+33 4 90 14 20 20",
  email: "contact@la-mirande.fr",
  social: {
    instagram: "#",
    facebook: "#",
    tripadvisor: "#",
  },
  navigation: [
    { label: "La Maison", href: "/#maison" },
    { label: "Histoire", href: "/histoire" },
    { label: "Chambres", href: "/chambres" },
    { label: "Tables", href: "/tables" },
    { label: "Expériences", href: "/experiences" },
    { label: "Réserver", href: "/contact" },
  ],
} as const;

export const chambres = [
  {
    slug: "la-roseraie",
    name: "La Roseraie",
    category: "Chambre Supérieure",
    patternName: "Toile à la Roseraie — Manufacture d'Oberkampf, circa 1780",
    shortDescription:
      "Toile florale du XVIIIe aux teintes poudre et céladon, vue sur le jardin intérieur.",
    longDescription:
      "La chambre La Roseraie tire son nom de la toile imprimée d'époque qui habille ses murs — un motif floral aux teintes poudre et céladon, typique du XVIIIe siècle provençal. Les fenêtres s'ouvrent sur le jardin intérieur, où le parfum des roses anciennes monte jusque dans la chambre au crépuscule. Le mobilier, chiné par la famille Stein au fil des décennies, mêle pièces d'époque et confort contemporain. La salle de bain en marbre de Carrare invite à la contemplation.",
    surface: "35 m²",
    vue: "Jardin",
    bedType: "Lit king-size (180×200)",
    price: 420,
    image:
      "https://www.la-mirande.fr/_novaimg/4663951-1433163_0_0_3200_4800_600_900.webp",
    heroImage:
      "https://www.la-mirande.fr/_novaimg/4661485-1432531_0_0_4800_3200_2000_1333.webp",
    gallery: [
      "https://www.la-mirande.fr/_novaimg/4772203-1434004_0_0_3448_4592_675_900.webp",
      "https://www.la-mirande.fr/_novaimg/4661295-1432472_0_0_4032_3024_2000_1500.webp",
      "https://www.la-mirande.fr/_novaimg/4655014-1432341_0_0_2551_3825_600_900.webp",
    ],
    amenities: [
      "Climatisation silencieuse",
      "Wifi haut débit",
      "Linge de maison Frette",
      "Produits d'accueil L'Occitane",
      "Minibar",
      "Coffre-fort",
      "Room service 24h",
      "Peignoirs et chaussons",
    ],
  },
  {
    slug: "le-grand-corail",
    name: "Le Grand Corail",
    category: "Chambre Prestige",
    patternName: "Toile aux Coraux — Impression sur lin, XVIIIe siècle",
    shortDescription:
      "Motifs marins d'inspiration exotique, lit à baldaquin en noyer massif.",
    longDescription:
      "Le Grand Corail évoque les grandes expéditions maritimes du XVIIIe siècle. Sa toile imprimée, aux motifs de coraux et de coquillages d'un rouge profond, habille les murs jusqu'au plafond. Le lit à baldaquin en noyer massif — pièce maîtresse de la chambre — fut acquis lors d'une vente aux enchères à Drouot. Depuis les fenêtres, la Place de l'Amirande s'offre dans sa lumière dorée. Le salon privé, avec sa méridienne et sa bibliothèque, invite à la lecture et à la paresse éclairée.",
    surface: "42 m²",
    vue: "Place de l'Amirande",
    bedType: "Lit à baldaquin king-size (200×200)",
    price: 560,
    image:
      "https://www.la-mirande.fr/_novaimg/4663950-1433162_0_0_3200_4800_600_900.webp",
    heroImage:
      "https://www.la-mirande.fr/_novaimg/4667802-1432577_0_0_4800_3200_2000_1333.webp",
    gallery: [
      "https://www.la-mirande.fr/_novaimg/4666301-1434006_0_0_3204_4770_604_900.webp",
      "https://www.la-mirande.fr/_novaimg/4661024-1432395_0_0_2011_3017_599_900.webp",
      "https://www.la-mirande.fr/_novaimg/4655013-1432400_190_0_4264_3200_2000_1500.webp",
    ],
    amenities: [
      "Salon privé avec méridienne",
      "Climatisation silencieuse",
      "Wifi haut débit",
      "Linge de maison Frette",
      "Produits d'accueil L'Occitane",
      "Minibar garni",
      "Coffre-fort",
      "Room service 24h",
      "Peignoirs et chaussons",
    ],
  },
  {
    slug: "le-perroquet",
    name: "Le Perroquet",
    category: "Chambre Prestige",
    patternName: "Toile aux Perroquets — Indienne peinte, Provence, circa 1760",
    shortDescription:
      "Oiseaux de paradis sur fond d'indigo, vue sur le Palais des Papes.",
    longDescription:
      "Le Perroquet doit son nom à la toile imprimée qui orne ses murs : des oiseaux de paradis aux plumages éclatants, posés sur des branches de glycine, sur un fond d'indigo profond. Le mobilier Louis XV d'époque — commode galbée, fauteuils bergère, secrétaire en marqueterie — compose un écrin où chaque objet a une histoire. Depuis le balcon, la façade orientale du Palais des Papes se dessine comme un décor de théâtre, dorée par le soleil couchant.",
    surface: "38 m²",
    vue: "Palais des Papes",
    bedType: "Lit king-size (180×200)",
    price: 620,
    image:
      "https://www.la-mirande.fr/_novaimg/4663965-1433171_0_0_3200_4800_600_900.webp",
    heroImage:
      "https://www.la-mirande.fr/_novaimg/4667804-1434417_0_0_4800_3200_2000_1333.webp",
    gallery: [
      "https://www.la-mirande.fr/_novaimg/4660957-1432342_0_0_2550_3825_600_900.webp",
      "https://www.la-mirande.fr/_novaimg/4662393-1432782_0_0_1365_2047_600_900.webp",
      "https://www.la-mirande.fr/_novaimg/4666299-1434005_0_0_4592_3448_1198_900.webp",
    ],
    amenities: [
      "Balcon privé vue Palais des Papes",
      "Climatisation silencieuse",
      "Wifi haut débit",
      "Linge de maison Frette",
      "Produits d'accueil L'Occitane",
      "Minibar garni",
      "Coffre-fort",
      "Room service 24h",
      "Peignoirs et chaussons",
    ],
  },
  {
    slug: "la-corne-dabondance",
    name: "La Corne d'Abondance",
    category: "Suite Prestige",
    patternName: "Toile à la Corne d'Abondance — Manufacture de Jouy, circa 1785",
    shortDescription:
      "Notre plus grande suite : toile mythologique aux ors chauds, salon privé avec cheminée.",
    longDescription:
      "La Corne d'Abondance est la plus somptueuse de nos suites. Sa toile imprimée mythologique — cornes d'abondance débordant de fruits, de fleurs et de rubans dorés — enveloppe la pièce d'une chaleur généreuse. Le salon privé, avec sa cheminée en pierre et ses fauteuils Voltaire, invite aux conversations du soir. La salle de bain en pierre de Bourgogne, avec sa baignoire îlot et sa douche à l'italienne, est un sanctuaire de sérénité. Pour ceux qui aiment habiter la beauté.",
    surface: "55 m²",
    vue: "Palais des Papes",
    bedType: "Lit super king-size (200×200)",
    price: 890,
    image:
      "https://www.la-mirande.fr/_novaimg/4660832-1432556_0_0_3448_4437_700_900.webp",
    heroImage:
      "https://www.la-mirande.fr/_novaimg/4661493-1432539_0_0_4800_3200_2000_1333.webp",
    gallery: [
      "https://www.la-mirande.fr/_novaimg/4661026-1432396_0_0_3200_4800_600_900.webp",
      "https://www.la-mirande.fr/_novaimg/4661027-1432397_0_0_2016_3024_600_900.webp",
      "https://www.la-mirande.fr/_novaimg/4656320-1432779_26_0_1806_1354_2000_1500.webp",
    ],
    amenities: [
      "Salon privé avec cheminée",
      "Baignoire îlot en pierre de Bourgogne",
      "Balcon vue Palais des Papes",
      "Climatisation silencieuse",
      "Wifi haut débit",
      "Linge de maison Frette",
      "Produits d'accueil L'Occitane",
      "Minibar premium",
      "Coffre-fort",
      "Room service 24h",
      "Peignoirs et chaussons",
      "Machine Nespresso",
    ],
  },
] as const;

export type Room = (typeof chambres)[number];

export const gastronomie = [
  {
    id: "gastronomique",
    name: "Restaurant Gastronomique",
    badge: "1* Guide Michelin · Étoile Verte",
    chef: "Chef Florent Pietravalle",
    shortDescription:
      "Cuisine de Provence d'une précision rare. Menus dégustation en 4, 6 ou 8 séquences.",
    longDescription:
      "Formé chez les plus grands (Pic, Ducasse), Florent Pietravalle compose une cuisine de Provence d'une précision rare. Chaque assiette est un paysage comestible, nourri par nos producteurs partenaires du Luberon et du Ventoux. Les menus dégustation en 4, 6 ou 8 séquences racontent l'histoire d'un terroir sublimé par la créativité — tomates anciennes en mille-feuille, agneau des Alpilles en croûte d'herbes du jardin, fraises de Carpentras au basilic et huile d'olive nouvelle.",
    horaires: "Mercredi au dimanche, 19h30 – 21h30",
    cta: "Réserver une table",
    image:
      "https://www.la-mirande.fr/_novaimg/4663152-1500660_0_0_4800_3201_1200_800.webp",
  },
  {
    id: "table-haute",
    name: "La Table Haute",
    badge: "Expérience immersive",
    chef: "Chef Florent Pietravalle",
    shortDescription:
      "Huit convives maximum autour de la grande table de sycomore, dans notre cuisine du XIXe.",
    longDescription:
      "Huit convives maximum, autour de la grande table de sycomore. Dans notre cuisine historique du XIXe siècle — four à bois d'origine, cuivres centenaires et tomettes patinées — le Chef compose devant vous un menu éphémère au gré du marché et de son inspiration. Ici, le repas est un spectacle intime. On voit naître chaque plat, on sent les arômes se construire, on échange avec l'artisan. Une expérience que l'on ne trouve nulle part ailleurs.",
    horaires: "Sur réservation uniquement, 8 convives maximum",
    cta: "Privatiser La Table Haute",
    image:
      "https://www.la-mirande.fr/_novaimg/4654088-1500717_0_0_4800_3200_1200_800.webp",
  },
  {
    id: "bistrot",
    name: "Le Bistrot de Florent",
    badge: "1 toque Gault & Millau",
    chef: null,
    shortDescription:
      "La décontraction d'une table de famille provençale, 7 jours sur 7.",
    longDescription:
      "La décontraction d'une table de famille provençale, ouverte 7 jours sur 7. La carte change au rythme du marché d'Avignon — les tomates arrivent le matin, elles sont en salade le midi. En terrasse au pied du Palais des Papes, c'est l'une des plus belles tables en plein air de la ville. L'été, on dîne sous les étoiles avec vue sur la pierre dorée du palais.",
    horaires: "7j/7, 12h – 14h30 & 19h – 22h",
    cta: "Découvrir la carte",
    image:
      "https://www.la-mirande.fr/_novaimg/5015945-1500711_0_0_4800_3201_1200_800.webp",
  },
  {
    id: "mirage",
    name: "Le Mirage",
    badge: "Taverne & four à bois",
    chef: null,
    shortDescription:
      "Pizzas au feu de bois, focaccias, légumes grillés — l'authenticité sans artifice.",
    longDescription:
      "Pizzas au feu de bois, focaccias, légumes grillés du potager — l'authenticité provençale sans artifice. Le Mirage, c'est le repas qu'on improvise à la dernière minute et dont on se souvient longtemps. La pâte lève 48 heures, les tomates viennent du jardin, la mozzarella arrive fraîche chaque matin de la fromagerie voisine.",
    horaires: "Vendredi et samedi, 12h – 15h",
    cta: "En savoir plus",
    image:
      "https://www.la-mirande.fr/_novaimg/4660168-1432710_0_0_4800_3200_1200_800.webp",
  },
  {
    id: "bar",
    name: "Bar & Salon de Thé",
    badge: "Cocktails & pâtisseries",
    chef: null,
    shortDescription:
      "Cocktails d'auteur, spiritueux rares, Champagne et pâtisseries maison.",
    longDescription:
      "Le bar de La Mirande est un salon à l'ancienne, où les fauteuils profonds et la lumière tamisée invitent à s'attarder. Cocktails d'auteur inspirés de la Provence (lavande, thym, agrumes), sélection de spiritueux rares, Champagnes de vignerons et pâtisseries maison servies à l'heure du thé. L'été, la terrasse du jardin devient le plus beau bar d'Avignon.",
    horaires: "7j/7, 10h – 23h",
    cta: "Découvrir la carte",
    image:
      "https://www.la-mirande.fr/_novaimg/5015951-1500721_0_0_4800_3201_1200_800.webp",
  },
] as const;

export const experiences = [
  {
    slug: "ecole-de-cuisine",
    name: "École de cuisine Le Marmiton",
    shortDescription:
      "Depuis 1994, les plus grands chefs de Provence enseignent dans notre cuisine du XIXe siècle.",
    longDescription:
      "Depuis 1994, Le Marmiton accueille passionnés et curieux dans notre authentique cuisine du XIXe siècle. Chaque cours de trois heures commence par une visite au marché d'Avignon, se poursuit derrière les fourneaux et s'achève autour de la grande table de sycomore, à déguster le fruit de votre travail. Les chefs résidents et invités — Meilleurs Ouvriers de France, étoilés Michelin — transmettent leur savoir avec générosité.",
    image:
      "https://www.la-mirande.fr/_novaimg/4663070-1432860_0_0_4800_3200_2000_1333.webp",
    size: "large" as const,
  },
  {
    slug: "concerts",
    name: "Concerts de musique de chambre",
    shortDescription:
      "Quatuors à cordes et solistes internationaux en résidence dans notre Salon de Musique.",
    longDescription:
      "Le Salon de Musique de La Mirande, tapissé de toiles du XVIIIe et éclairé aux bougies, accueille des musiciens internationaux en résidence. Quatuors à cordes, récitals de piano, duos voix et guitare — chaque concert est un moment de grâce, dans une acoustique intime et parfaite. Programme disponible chaque saison.",
    image:
      "https://www.la-mirande.fr/_novaimg/5281214-1542668_0_0_4000_3000_2000_1500.webp",
    size: "small" as const,
  },
  {
    slug: "jardin",
    name: "Le Jardin secret",
    shortDescription:
      "Un jardin clos au pied du Palais des Papes, entre tilleuls et figuiers.",
    longDescription:
      "Un jardin clos au pied du Palais des Papes, où l'on prend le petit-déjeuner sous les tilleuls centenaires, où les figues mûrissent en été et les roses anciennes embaument jusqu'à l'automne. Le soir, c'est ici que l'on prend l'apéritif en contemplant la façade orientale du Palais, dorée par le soleil couchant. Un secret bien gardé au cœur d'Avignon.",
    image:
      "https://www.la-mirande.fr/_novaimg/4660152-1432402_0_0_4800_3200_2000_1333.webp",
    size: "small" as const,
  },
  {
    slug: "art-culture",
    name: "Art & Culture",
    shortDescription:
      "Expositions d'art contemporain, performances et le légendaire Bal costumé annuel.",
    longDescription:
      "La Mirande est un lieu de culture vivante. Nos salons accueillent des expositions d'art contemporain tout au long de l'année, en dialogue avec le patrimoine historique de la maison. Performances, lectures, rencontres avec les artistes — et chaque année, le légendaire Bal costumé, trois siècles de fête avignonnaise en une soirée inoubliable.",
    image:
      "https://www.la-mirande.fr/_novaimg/4667803-1434418_0_0_4800_3200_2000_1333.webp",
    size: "large" as const,
  },
] as const;

export const engagements = [
  {
    title: "Du champ à l'assiette",
    description:
      "Nos producteurs du Luberon et du Ventoux intègrent les besoins de la cuisine dans leurs plans de culture. Pas d'intermédiaire, pas de catalogue — des relations humaines de 15 ans.",
  },
  {
    title: "Un potager sur les toits",
    description:
      "Herbes aromatiques et fleurs comestibles cultivées à ciel ouvert, à portée de main du Chef. De la cueillette à l'assiette en 30 secondes.",
  },
  {
    title: "La cave vivante",
    description:
      "Culture de pleurotes et shiitakés dans nos caves voûtées du XIVe siècle. Le circuit le plus court de la gastronomie : 12 mètres.",
  },
  {
    title: "Le geste quotidien",
    description:
      "Menu végétarien, compostage, tri, zéro plastique en cuisine. Ce ne sont pas des promesses marketing — c'est notre façon de vivre depuis toujours.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "On ne séjourne pas à La Mirande. On y vit. Chaque matin, le petit-déjeuner dans le jardin avait des airs de tableau vivant.",
    author: "Claire & Mathieu",
    origin: "Paris",
    context: "Séjour anniversaire, octobre 2024",
  },
  {
    quote:
      "La Table Haute est l'expérience gastronomique la plus intime et la plus mémorable que j'aie vécue en France — et j'en ai vécu beaucoup.",
    author: "James Whitfield",
    origin: "Londres",
    context: "Food & Travel Magazine",
  },
  {
    quote:
      "Ce qui m'a touché, c'est que rien n'est mis en scène. Le luxe ici est naturel. Comme si la maison avait toujours été ainsi.",
    author: "Sophie Bertrand",
    origin: "Genève",
    context: "Séjour en famille, juillet 2024",
  },
] as const;
