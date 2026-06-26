import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Recalculate triggers once everything (images/fonts) has settled. */
let refreshScheduled = false;
const scheduleRefresh = () => {
  if (refreshScheduled) return;
  refreshScheduled = true;
  [400, 1200, 2500].forEach((t) =>
    setTimeout(() => {
      ScrollTrigger.refresh();
      refreshScheduled = false;
    }, t)
  );
};

/* Reveal children with a fade + rise + slight scale on scroll. */
export const useReveal = (deps = []) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const items = el.querySelectorAll("[data-reveal]");
      const targets = items.length ? items : [el];
      gsap.set(targets, { opacity: 0, y: 52 });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.14,
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    }, el);
    scheduleRefresh();
    return () => ctx.revert();
  }, deps);
  return ref;
};

/* Animated number counter that triggers on scroll. */
export const useCounter = (endValue) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const match = String(endValue).match(/[\d,]+/);
    if (!match) {
      el.textContent = endValue;
      return;
    }
    const numeric = parseInt(match[0].replace(/,/g, ""), 10);
    const prefix = endValue.slice(0, match.index);
    const suffix = endValue.slice(match.index + match[0].length);
    const obj = { val: 0 };
    el.textContent = prefix + "0" + suffix;
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: numeric,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
        onUpdate: () => {
          el.textContent = prefix + Math.floor(obj.val).toLocaleString() + suffix;
        },
      });
    }, el);
    return () => ctx.revert();
  }, [endValue]);
  return ref;
};

/* Subtle parallax on an element while scrolling. */
export const useParallax = (amount = 60) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: -amount / 5,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });
    }, el);
    return () => ctx.revert();
  }, [amount]);
  return ref;
};

export { gsap, ScrollTrigger };
