import React from "react";
import { PageHero } from "../components/Shared";
import { SectionTitle, Lotus, KolamDivider } from "../components/decorative/Ornaments";
import { PERFORMANCES } from "../data/mock";
import { useReveal } from "../hooks/useAnim";
import { MapPin } from "lucide-react";

// Classic Square Frame for Performances
const ClassicFrame = ({ children, className = "" }) => (
  <div className={`relative overflow-hidden rounded-2xl ${className}`}
    style={{
      boxShadow: "0 10px 40px -10px rgba(110,20,35,0.3), 0 4px 12px -4px rgba(182,138,62,0.2)",
      border: "3px solid var(--gold)",
      background: "linear-gradient(135deg, rgba(251,246,237,0.05) 0%, rgba(182,138,62,0.05) 100%)"
    }}>
    {children}
  </div>
);

const Performances = () => {
  const hiRef = useReveal();
  const grpRef = useReveal();
  return (
    <div>
      <PageHero title="Performances" breadcrumb={[{ label: "Home", path: "/" }, { label: "Performances" }]} />

      <section className="py-20" style={{ background: "var(--ivory)" }}>
        <p className="mx-auto max-w-2xl px-6 text-center text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>{PERFORMANCES.intro}</p>
        <SectionTitle eyebrow="International Recognition" title="Major Milestones" />
        <div ref={hiRef} className="mx-auto mt-14 grid max-w-[1280px] gap-8 px-6 md:grid-cols-3 lg:px-10">
          {PERFORMANCES.highlights.map((h) => (
            <div key={h.title} data-reveal className="flex flex-col items-center">
              <ClassicFrame className="w-full max-w-[340px]">
                <img src={h.image} alt={h.title} className="h-[420px] w-full object-cover" loading="lazy" />
              </ClassicFrame>
              <h3 className="mt-6 font-serif-display text-2xl font-semibold text-center" style={{ color: "var(--maroon)" }}>{h.title}</h3>
              <ul className="mt-4 space-y-2 w-full">
                {h.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                    <Lotus className="h-3 w-6 flex-shrink-0 mt-1" color="var(--gold)" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24" style={{ background: "var(--cream)" }}>
        <SectionTitle eyebrow="Across Sacred & Cultural Stages" title="Performance Journey" />
        <div ref={grpRef} className="mx-auto mt-14 grid max-w-[1280px] gap-6 px-6 md:grid-cols-2 lg:px-10">
          {PERFORMANCES.groups.map((g) => (
            <div key={g.title} data-reveal className="luxe-card rounded-xl p-8">
              <div className="flex items-center gap-3">
                <Lotus className="h-6 w-11" color="var(--maroon)" />
                <h3 className="font-serif-display text-2xl font-semibold" style={{ color: "var(--maroon)" }}>{g.title}</h3>
              </div>
              <KolamDivider className="my-5" center={false} />
              <ul className="space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                    <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Performances;
