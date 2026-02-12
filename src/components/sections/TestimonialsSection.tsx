"use client";

import { useState, useEffect, useCallback } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/mirande";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="section-padding bg-noir-encre relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-or-ancien/10">
        <Quote size={120} strokeWidth={0.5} />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative z-10">
        <ScrollReveal>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-or-ancien/70 mb-10">
            Ils ont vécu La Mirande
          </p>
        </ScrollReveal>

        <LazyMotion features={domAnimation}>
          <div className="min-h-[240px] md:min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <m.div
                key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center"
              >
                <blockquote className="font-accent italic text-xl md:text-2xl lg:text-3xl text-blanc-lin/90 leading-relaxed max-w-3xl">
                  &laquo; {t.quote} &raquo;
                </blockquote>

                <div className="mt-8 flex flex-col items-center gap-1">
                  <p className="font-sans text-sm tracking-wider text-blanc-lin/80">
                    {t.author}
                  </p>
                  <p className="font-sans text-xs text-blanc-lin/40">
                    {t.origin} — {t.context}
                  </p>
                </div>
              </m.div>
            </AnimatePresence>
          </div>
        </LazyMotion>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Témoignage ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === current
                  ? "bg-or-ancien w-6"
                  : "bg-blanc-lin/20 hover:bg-blanc-lin/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
