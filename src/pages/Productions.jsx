import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PageHero, LuxeButton } from "../components/Shared";
import { SectionTitle, Lotus } from "../components/decorative/Ornaments";
import { PRODUCTIONS, ADVITIYAM } from "../data/mock";
import { useReveal } from "../hooks/useAnim";

const FILTERS = ["All", "Dance Drama", "Solo Production"];

const Productions = () => {
  const [filter, setFilter] = useState("All");
  const listRef = useReveal([filter]);
  const items = PRODUCTIONS.filter((p) => filter === "All" || p.type === filter);
  const location = useLocation();

  // Restore scroll position when coming back from production detail page
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('productionsScrollPosition');

    if (savedScrollPosition && location.state?.fromProductionDetail) {
      // Restore scroll position after a short delay to ensure page is rendered
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
      }, 100);
    }

    // Clear the flag after restoring
    if (location.state?.fromProductionDetail) {
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  // Save scroll position before navigating away
  const handleProductionClick = () => {
    sessionStorage.setItem('productionsScrollPosition', window.scrollY.toString());
  };

  return (
    <div>
      <PageHero title="Productions" breadcrumb={[{ label: "Home", path: "/" }, { label: "Productions" }]} />

      {/* Advitiyam intro */}
      <section className="py-20" style={{ background: "var(--ivory)" }}>
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-15">
          <p className="eyebrow mb-3" style={{ color: "var(--bronze)" }}>Project Advitiyam</p>
          <h2 className="font-serif-display text-3xl font-semibold md:text-4xl" style={{ color: "var(--maroon)" }}>{ADVITIYAM.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-justify" style={{ color: "var(--ink-soft)" }}>{ADVITIYAM.body}</p>
          <p className="mt-6 font-serif-display text-2xl italic" style={{ color: "var(--maroon-soft)" }}>“{ADVITIYAM.tagline}”</p>
        </div>
      </section>

      {/* Filters + list */}
      <section className="pb-24" style={{ background: "var(--ivory)" }}>
        <div className="mb-12 flex flex-wrap justify-center gap-3 px-6">
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-5 py-2 text-[11px] font-semibold tracking-[0.16em] uppercase transition-all duration-300"
                style={{
                  background: active ? "var(--maroon)" : "transparent",
                  color: active ? "var(--ivory)" : "var(--maroon)",
                  border: `1px solid ${active ? "var(--maroon)" : "var(--gold)"}`,
                  borderRadius: "999px",
                }}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div ref={listRef} className="mx-auto grid max-w-[1400px] gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
          {items.map((p) => (
            <Link
              key={p.slug}
              to={`/productions/${p.slug}`}
              onClick={handleProductionClick}
              data-reveal
              className="group flex flex-col overflow-hidden rounded-2xl luxe-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="zoom-parent relative h-[380px] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="zoom-img h-full w-full object-cover object-center"
                  loading="lazy"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-num text-xs tracking-[0.18em] uppercase" style={{ color: "var(--bronze)" }}>{p.year}</span>
                  <span className="h-1 w-1 rounded-full" style={{ background: "var(--gold)" }} />
                  <span className="text-xs tracking-[0.18em] uppercase" style={{ color: "var(--bronze)" }}>{p.type}</span>
                </div>
                <h3 className="font-serif-display text-2xl font-semibold transition-colors duration-300 group-hover:text-[var(--gold-dark)]" style={{ color: "var(--maroon)" }}>
                  {p.title}
                </h3>
                <p className="mt-1 text-[11px] tracking-[0.12em] uppercase" style={{ color: "var(--maroon-soft)" }}>{p.subtitle}</p>
                <Lotus className="my-4 h-5 w-10 mx-auto" color="var(--gold)" />
                <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "var(--ink-soft)" }}>{p.short}</p>
                <div className="mt-4 px-6 py-2 text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 group-hover:shadow-lg" style={{ background: "var(--maroon)", color: "var(--ivory)" }}>
                  View Details
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Productions;
