import React from "react";
import { PageHero } from "../components/Shared";
import { SectionTitle, Mandala, TempleLamp, KolamDivider, Lotus, RangoliBg, DiyaRow } from "../components/decorative/Ornaments";
import { INITIATIVES } from "../data/mock";
import { useReveal } from "../hooks/useAnim";
import { Check } from "lucide-react";

const Initiatives = () => {
  const ref = useReveal();
  return (
    <div>
      <PageHero title="Initiatives" breadcrumb={[{ label: "Home", path: "/" }, { label: "Initiatives" }]} />

      <section className="py-16" style={{ background: "var(--ivory)" }}>
        <p className="mx-auto max-w-2xl px-6 text-center text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>{INITIATIVES.intro}</p>
      </section>

      <section className="pb-20" style={{ background: "var(--ivory)" }}>
        <div ref={ref} className="mx-auto flex max-w-[1180px] flex-col gap-12 px-6 lg:px-10">
          {INITIATIVES.cards.map((c, i) => (
            <div key={c.title} data-reveal className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
              <div className="zoom-parent overflow-hidden rounded-2xl [direction:ltr]" style={{ border: "1px solid rgba(182,138,62,0.4)" }}>
                <img src={c.image} alt={c.title} className="zoom-img h-[360px] w-full object-cover" loading="lazy" />
              </div>
              <div className="[direction:ltr]">
                <Lotus className="mb-3 h-6 w-12" color="var(--maroon)" />
                <h3 className="font-serif-display text-3xl font-semibold md:text-4xl" style={{ color: "var(--maroon)" }}>{c.title}</h3>
                <KolamDivider className="my-5" center={false} />
                <p className="text-base leading-relaxed text-justify" style={{ color: "var(--ink-soft)" }}>{c.desc}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {c.points.map((p) => (
                    <span key={p} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-medium tracking-[0.1em] uppercase" style={{ background: "var(--cream)", color: "var(--maroon)", border: "1px solid var(--gold)" }}>
                      <Check size={13} style={{ color: "var(--gold)" }} /> {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-24" style={{ background: "var(--parchment)" }}>
        <RangoliBg className="absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2" opacity={0.12} />
        <RangoliBg className="absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2" opacity={0.12} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <TempleLamp className="mx-auto mb-6 h-24" />
          <p className="font-serif-display text-3xl italic leading-snug md:text-4xl" style={{ color: "var(--maroon)" }}>“{INITIATIVES.quote}”</p>
          <DiyaRow className="mx-auto mt-8 h-8 w-56" />
        </div>
      </section>
    </div>
  );
};

export default Initiatives;
