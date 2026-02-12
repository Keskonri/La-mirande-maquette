"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-1">
        {prefix && (
          <span className="font-accent text-2xl text-or-ancien">{prefix}</span>
        )}
        <span
          className="font-display text-4xl md:text-5xl text-or-ancien"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {isInView ? <AnimatedNumber spring={springValue} /> : "0"}
        </span>
        {suffix && (
          <span className="font-accent text-2xl text-or-ancien">{suffix}</span>
        )}
      </div>
      <p className="mt-2 font-sans text-sm tracking-widest uppercase text-terre">
        {label}
      </p>
    </div>
  );
}

function AnimatedNumber({
  spring,
}: {
  spring: ReturnType<typeof useSpring>;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
    return unsubscribe;
  }, [spring]);

  return <span ref={ref}>0</span>;
}
