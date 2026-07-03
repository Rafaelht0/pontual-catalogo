"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Traço fino dourado que "varre" a tela como o ponteiro de segundos de um
 * relógio quando entra na viewport. É a assinatura visual da Pontual —
 * usar com moderação, um por seção de destaque.
 */
export default function SweepDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sweep-divider" ref={ref}>
      <div className={`sweep-divider__line ${visible ? "is-visible" : ""}`} />
    </div>
  );
}
