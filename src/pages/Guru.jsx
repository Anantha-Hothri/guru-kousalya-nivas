import React, { useState } from "react";
import { PageHero, YouTubeModal, VideoTile } from "../components/Shared";
import { SectionTitle, Mandala, Lotus, KolamDivider, TempleArchFrame, RangoliBg } from "../components/decorative/Ornaments";
import { GURU } from "../data/mock";
import { useReveal, useCounter } from "../hooks/useAnim";
import { Footprints, Heart, Theater, Users, Quote } from "lucide-react";

const ICONS = { Footprints, Heart, Theater, Users };

const LegacyStat = ({ value, label }) => {
  const ref = useCounter(value);
  return (
    <div data-reveal className="text-center">
      <span ref={ref} className="font-num text-5xl font-semibold" style={{ color: "var(--gold-light)" }}>{value}</span>
      <p className="mt-2 text-[11px] tracking-[0.16em] uppercase" style={{ color: "rgba(251,246,236,0.78)" }}>{label}</p>
    </div>
  );
};

const Guru = () => {
  const [video, setVideo] = useState(null);
  const linRef = useReveal();
  const pilRef = useReveal();
  const legRef = useReveal();
  const tesRef = useReveal();

  return (
    <div>
      <PageHero title="Guru" breadcrumb={[{ label: "Home", path: "/" }, { label: "Guru" }]} />

      {/* Intro - Art of Nurturing */}
      <section className="relative overflow-hidden py-16 sm:py-20" style={{ background: "var(--ivory)" }}>
        <RangoliBg className="absolute right-0 top-0 h-[460px] w-[460px]" opacity={0.1} />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:px-10">
          {/* Left - Content */}
          <div className="text-center lg:text-left">
            <p className="eyebrow mb-3 text-[0.65rem] sm:text-xs" style={{ color: "var(--bronze)" }}>{GURU.badge}</p>
            <h2 className="font-serif-display text-3xl font-semibold sm:text-4xl md:text-5xl" style={{ color: "var(--maroon)" }}>{GURU.title}</h2>
            <Lotus className="my-5 h-5 w-11 sm:my-6 sm:h-6 sm:w-12 mx-auto lg:mx-0" color="var(--gold)" />
            <p className="mx-auto max-w-2xl font-serif-display text-xl italic leading-snug sm:text-2xl lg:mx-0" style={{ color: "var(--maroon-soft)" }}>“{GURU.quote}”</p>
          </div>

          {/* Right - Group Photo */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <RangoliBg className="absolute -inset-8 -z-10 h-auto w-auto sm:-inset-12" opacity={0.15} />
            <div className="overflow-hidden rounded-2xl" style={{ border: "3px solid var(--gold)" }}>
              <img
                src={GURU.groupImage}
                alt="M.S. Naatyakshetra Group"
                className="h-auto w-full object-cover"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lineage */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <SectionTitle eyebrow="Guru-Shishya Parampara" title="Artistic Lineage" />
        <div ref={linRef} className="mx-auto mt-14 grid max-w-[1100px] gap-6 px-6 md:grid-cols-3 lg:px-10">
          {GURU.lineage.map((l) => (
            <div key={l.name} data-reveal className="luxe-card rounded-xl p-7 text-center">
              <Lotus className="mx-auto mb-4 h-7 w-14" color="var(--maroon)" />
              <h3 className="font-serif-display text-xl font-semibold leading-tight" style={{ color: "var(--maroon)" }}>{l.name}</h3>
              <p className="mt-2 text-[11px] tracking-[0.14em] uppercase" style={{ color: "var(--bronze)" }}>{l.role}</p>
              <p className="mt-1 text-sm italic" style={{ color: "var(--maroon-soft)" }}>{l.org}</p>
              <KolamDivider className="my-4" />
              <p className="text-sm leading-relaxed text-center" style={{ color: "var(--ink-soft)" }}>{l.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20" style={{ background: "var(--ivory)" }}>
        <div className="mx-auto max-w-[900px] px-6 text-center lg:px-10">
          <p className="eyebrow mb-3" style={{ color: "var(--bronze)" }}>Our Purpose</p>
          <h2 className="font-serif-display text-4xl font-semibold md:text-5xl" style={{ color: "var(--maroon)" }}>Mission</h2>
          <Lotus className="mx-auto my-6 h-6 w-12" color="var(--gold)" />
          <p className="text-base leading-relaxed text-justify" style={{ color: "var(--ink-soft)" }}>{GURU.mission}</p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <SectionTitle eyebrow="Training Philosophy" title="Pillars of Training" />
        <div ref={pilRef} className="mx-auto mt-14 grid max-w-[1180px] gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {GURU.pillars.map((p) => {
            const Icon = ICONS[p.icon] || Footprints;
            return (
              <div key={p.title} data-reveal className="luxe-card rounded-xl p-7 text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full" style={{ background: "var(--cream)", border: "1px solid var(--gold)" }}>
                  <Icon size={24} style={{ color: "var(--maroon)" }} />
                </span>
                <h3 className="font-serif-display text-xl font-semibold" style={{ color: "var(--maroon)" }}>{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-center" style={{ color: "var(--ink-soft)" }}>{p.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Legacy stats */}
      <section className="relative overflow-hidden py-20" style={{ background: "var(--maroon)" }}>
        <Mandala className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 opacity-[0.08]" color="var(--gold-light)" />
        <Mandala className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 opacity-[0.08]" color="var(--gold-light)" />
        <div className="relative mx-auto max-w-[1100px] px-6">
          <h2 className="text-center font-serif-display text-4xl font-semibold" style={{ color: "var(--ivory)" }}>M.S. Naatyakshetra Legacy</h2>
          <div ref={legRef} className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {GURU.legacy.map((s) => <LegacyStat key={s.label} value={s.value} label={s.label} />)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <SectionTitle eyebrow="Voices of the Shishyas" title="The Impact of a True Mentor" />
        <div ref={tesRef} className="mx-auto mt-14 grid max-w-[1280px] gap-8 px-6 md:grid-cols-3 lg:px-10">
          {GURU.testimonials.map((t) => {
            // Custom image positioning for each student
            const getImageStyles = () => {
              if (t.name === 'Pavan Singh') {
                return 'w-full h-full object-cover scale-[2.3] object-[55%_5%]';
              } else if (t.name === 'Manasa K R') {
                return 'w-full h-full object-cover scale-150 object-[center_30%]';
              } else {
                return 'w-full h-full object-cover scale-150 object-top';
              }
            };

            return (
              <div 
                key={t.name} 
                data-reveal 
                className="luxe-card flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(182,138,62,0.2)" }}>
                  <div className="w-20 h-20 overflow-hidden rounded-full flex-shrink-0" style={{ border: "2px solid var(--gold)" }}>
                    <img
                      src={t.image}
                      alt={t.name}
                      className={getImageStyles()}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif-display text-lg font-semibold leading-tight mb-1" style={{ color: "var(--maroon)" }}>
                      {t.name}
                    </p>
                    <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "var(--bronze)" }}>
                      {t.role}
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <Quote size={20} className="mb-3 opacity-40" style={{ color: "var(--gold)" }} />
                  <p className="text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                    "{t.text}"
                  </p>
                </div>

                <div className="mt-6 pt-4" style={{ borderTop: "1px solid rgba(182,138,62,0.2)" }}>
                  <p className="text-[11px] tracking-widest uppercase font-medium text-center" style={{ color: "var(--gold-dark)" }}>
                    {t.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Videos */}
      <section className="py-20" style={{ background: "var(--ivory)" }}>
        <SectionTitle eyebrow="Watch" title="Student Performance Highlights" />
        <div className="mx-auto mt-12 grid max-w-[1100px] gap-5 px-6 sm:grid-cols-3 lg:px-10">
          {GURU.videos.map((v) => <VideoTile key={v} videoId={v} onPlay={setVideo} />)}
        </div>
      </section>

      <YouTubeModal videoId={video} onClose={() => setVideo(null)} />
    </div>
  );
};

export default Guru;
