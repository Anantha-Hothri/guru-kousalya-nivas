import React from "react";
import { PageHero } from "../components/Shared";
import { SectionTitle, KolamDivider, Lotus } from "../components/decorative/Ornaments";
import { PUBLICATIONS } from "../data/mock";
import { useReveal } from "../hooks/useAnim";
import { Check, FileText, Quote } from "lucide-react";

const Publications = () => {
  const bookRef = useReveal();
  const paperRef = useReveal();
  const { book, papers } = PUBLICATIONS;
  return (
    <div>
      <PageHero title="Publications" breadcrumb={[{ label: "Home", path: "/" }, { label: "Publications" }]} />

      {/* Book */}
      <section className="py-20" style={{ background: "var(--ivory)" }}>
        <div ref={bookRef} className="mx-auto grid max-w-[1100px] items-center gap-12 px-6 lg:grid-cols-[380px_1fr] lg:px-10">
          <div data-reveal className="relative mx-auto w-[320px]">
            <div className="overflow-hidden rounded-lg" style={{ border: "2px solid var(--gold)", boxShadow: "0 30px 60px -28px rgba(110,20,35,0.45)" }}>
              <img src={book.image} alt={book.title} className="h-[450px] w-full object-cover" />
            </div>
          </div>
          <div data-reveal>
            <span className="rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase" style={{ background: "var(--gold-pale)", color: "var(--bronze)" }}>Published {book.year}</span>
            <h2 className="mt-4 font-serif-display text-4xl font-semibold" style={{ color: "var(--maroon)" }}>{book.title}</h2>
            <p className="mt-1 text-sm italic" style={{ color: "var(--maroon-soft)" }}>{book.author}</p>
            <Lotus className="my-5 h-6 w-12" color="var(--gold)" />
            <p className="text-base leading-relaxed text-justify" style={{ color: "var(--ink-soft)" }}>{book.desc}</p>
            <p className="mt-6 text-[11px] tracking-[0.16em] uppercase" style={{ color: "var(--bronze)" }}>Key Topics Covered</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {book.topics.map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-sm" style={{ color: "var(--ink)" }}>
                  <Check size={15} style={{ color: "var(--gold)" }} /> {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-lg p-5" style={{ background: "var(--cream)", border: "1px solid rgba(182,138,62,0.3)" }}>
              <Quote size={20} style={{ color: "var(--gold)" }} />
              <p className="text-sm italic leading-relaxed text-justify" style={{ color: "var(--maroon-soft)" }}>{book.quote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Papers */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <SectionTitle eyebrow="Scholarly Contributions" title="Academic Presentations & Papers" />
        <div ref={paperRef} className="mx-auto mt-14 grid max-w-[1000px] gap-6 px-6 md:grid-cols-2 lg:px-10">
          {papers.map((p) => (
            <div key={p.title} data-reveal className="luxe-card flex flex-col rounded-xl p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: "var(--cream)", border: "1px solid var(--gold)" }}>
                  <FileText size={20} style={{ color: "var(--maroon)" }} />
                </span>
                <span className="font-serif-display text-2xl font-semibold" style={{ color: "var(--maroon)" }}>{p.year}</span>
              </div>
              <h3 className="mt-4 font-serif-display text-xl font-semibold leading-snug" style={{ color: "var(--maroon)" }}>{p.title}</h3>
              <KolamDivider className="my-4" center={false} />
              <p className="flex-1 text-sm leading-relaxed text-justify" style={{ color: "var(--ink-soft)" }}>{p.desc}</p>
              <p className="mt-5 text-[11px] tracking-[0.12em] uppercase" style={{ color: "var(--bronze)" }}>Venue: <span className="normal-case" style={{ color: "var(--ink)" }}>{p.venue}</span></p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Publications;
