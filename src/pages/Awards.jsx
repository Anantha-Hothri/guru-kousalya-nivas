import React, { useState, useEffect, useRef } from "react";
import { PageHero } from "../components/Shared";
import { SectionTitle, RangoliBg, Lotus, HangingLamp } from "../components/decorative/Ornaments";
import { AWARDS } from "../data/mock";
import { useReveal, useCounter } from "../hooks/useAnim";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatBox = ({ value, label }) => {
  const ref = useCounter(value);
  return (
    <div data-reveal className="luxe-card rounded-xl px-6 py-8 text-center">
      <span ref={ref} className="font-num text-5xl font-semibold" style={{ color: "var(--maroon)" }}>{value}</span>
      <p className="mt-2 text-[11px] tracking-[0.16em] uppercase" style={{ color: "var(--ink-soft)" }}>{label}</p>
    </div>
  );
};

const Awards = () => {
  const statRef = useReveal();
  const listRef = useReveal();
  const scrollRef = useRef(null);
  const galleryContainerRef = useRef(null);
  const gallerySectionRef = useRef(null);
  const [lightboxData, setLightboxData] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [visibleAwards, setVisibleAwards] = useState(5); // Initially show 5 awards

  // Auto-scroll animation for awards gallery
  useEffect(() => {
    if (!scrollRef.current || !AWARDS.gallery?.length) return;

    const scrollContainer = scrollRef.current;
    let animationFrameId;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5; // Adjust speed here

      // Reset when scrolled past first set of images
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Lightbox navigation functions
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxData(AWARDS.gallery[index]);
  };

  const closeLightbox = () => {
    setLightboxData(null);
    setLightboxIndex(0);
  };

  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next'
      ? (lightboxIndex + 1) % AWARDS.gallery.length
      : (lightboxIndex - 1 + AWARDS.gallery.length) % AWARDS.gallery.length;
    setLightboxIndex(newIndex);
    setLightboxData(AWARDS.gallery[newIndex]);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxData) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        navigateLightbox('prev');
      } else if (e.key === 'ArrowRight') {
        navigateLightbox('next');
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxData, lightboxIndex]);

  // Progressive loading of awards
  useEffect(() => {
    const timer = setTimeout(() => {
      if (visibleAwards < AWARDS.list.length) {
        setVisibleAwards(AWARDS.list.length);
      }
    }, 300); // Load remaining awards after 300ms

    return () => clearTimeout(timer);
  }, [visibleAwards]);

  // GSAP Zoom animation on scroll
  useEffect(() => {
    if (!galleryContainerRef.current || !gallerySectionRef.current || !AWARDS.gallery?.length) return;

    const container = galleryContainerRef.current;
    const section = gallerySectionRef.current;

    // Create ScrollTrigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        pin: false,
        markers: false, // Set to true for debugging
      }
    });

    // Zoom in, hold, then zoom out
    tl.fromTo(
      container,
      {
        scale: 0.9,
        borderRadius: "24px",
      },
      {
        scale: 1.05,
        borderRadius: "0px",
        duration: 0.3,
        ease: "power2.out"
      }
    )
    .to(container, {
      scale: 1.05,
      duration: 0.4, // Hold at zoomed state while scrolling through images
      ease: "none"
    })
    .to(container, {
      scale: 0.9,
      borderRadius: "24px",
      duration: 0.3,
      ease: "power2.in"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <PageHero title="Awards & Honours" breadcrumb={[{ label: "Home", path: "/" }, { label: "Awards" }]} />

      <section className="py-16" style={{ background: "var(--ivory)" }}>
        <p className="mx-auto max-w-2xl px-6 text-center text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>{AWARDS.intro}</p>
        <div ref={statRef} className="mx-auto mt-12 grid max-w-3xl gap-5 px-6 sm:grid-cols-3">
          {AWARDS.stats.map((s) => <StatBox key={s.label} value={s.value} label={s.label} />)}
        </div>
      </section>

      {/* Nataraja (left) + Awards list (right) */}
      <section className="relative overflow-hidden py-16" style={{ background: "var(--ivory)" }}>
        <RangoliBg className="absolute -left-32 top-1/4 h-[460px] w-[460px]" opacity={0.12} />
        <SectionTitle eyebrow="A Legacy of Recognition" title="Awards Timeline" />

        <div className="mx-auto mt-14 grid max-w-[1280px] gap-12 px-6 lg:grid-cols-[420px_1fr] lg:px-10">
          {/* Left — Nataraja bronze sculpture */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative mx-auto max-w-[380px]">
              <div className="relative">
                <img src={AWARDS.nataraja} alt="Bronze Nataraja sculpture" className="h-[460px] w-full object-contain" style={{ filter: "drop-shadow(0 25px 35px rgba(0,0,0,0.25))" }} loading="lazy" decoding="async" />
              </div>
              <div className="mt-5 text-center">
                <Lotus className="mx-auto mb-2 h-5 w-11" color="var(--maroon)" />
                <p className="font-serif-display text-2xl font-semibold" style={{ color: "var(--maroon)" }}>Nataraja</p>
                <p className="text-[11px] tracking-[0.16em] uppercase" style={{ color: "var(--bronze)" }}>The Cosmic Dancer</p>
              </div>
            </div>
          </div>

          {/* Right — awards list (scrollable) */}
          <div ref={listRef} className="max-h-[600px] overflow-y-auto pr-2" style={{ scrollbarWidth: "thin", scrollbarColor: "var(--gold) var(--sandal)" }}>
            {AWARDS.list.slice(0, visibleAwards).map((a, idx) => (
              <div
                key={a.title + a.year}
                data-reveal={idx < 3 ? "true" : undefined}
                className="group relative mb-5 overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-lg"
                style={{
                  border: "1px solid rgba(182,138,62,0.2)",
                  boxShadow: "0 2px 8px rgba(110,20,35,0.06)",
                  willChange: idx < 3 ? 'transform, opacity' : 'auto'
                }}
              >
                <div className="flex items-start gap-4 sm:gap-6 p-5 sm:p-7">
                  {/* Award icon and year */}
                  <div className="flex flex-shrink-0 flex-col items-center gap-2">
                    <div
                      className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full"
                      style={{
                        background: "var(--maroon)",
                        border: "3px solid var(--gold-light)",
                        boxShadow: "0 4px 12px rgba(110,20,35,0.2)"
                      }}
                    >
                      <Award size={24} style={{ color: "var(--gold-light)" }} />
                    </div>
                    {/* Year below icon */}
                    <span
                      className="font-serif-display text-xl sm:text-2xl font-bold"
                      style={{ color: "var(--maroon)" }}
                    >
                      {a.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="mb-2 flex flex-wrap items-start gap-2 sm:gap-3">
                      <h3
                        className="flex-1 font-serif-display text-lg sm:text-2xl font-semibold leading-tight"
                        style={{ color: "var(--maroon)" }}
                      >
                        {a.title}
                      </h3>
                      <span
                        className="rounded-full px-3 py-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.12em] uppercase"
                        style={{
                          background: "var(--gold)",
                          color: "var(--maroon-deep)"
                        }}
                      >
                        {a.tag}
                      </span>
                    </div>

                    <p
                      className="text-sm sm:text-base leading-relaxed mt-2"
                      style={{ color: "var(--bronze)" }}
                    >
                      {a.org}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic scrolling gallery */}
      {AWARDS.gallery?.length > 0 && (
        <section ref={gallerySectionRef} className="py-16" style={{ background: "var(--cream)", minHeight: "100vh" }}>
          <SectionTitle eyebrow="Moments of Recognition" title="Award Ceremonies" />
          <div
            ref={galleryContainerRef}
            className="relative mt-8 md:mt-12 h-[280px] md:h-[360px] overflow-hidden"
            style={{ transformOrigin: "center center" }}
          >
            {/* Fading edges - narrower on mobile */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 md:w-32"
              style={{ background: "linear-gradient(to right, var(--cream), transparent)" }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 md:w-32"
              style={{ background: "linear-gradient(to left, var(--cream), transparent)" }}
            />

            {/* Scrolling container */}
            <div
              ref={scrollRef}
              className="flex h-full gap-3 md:gap-5 overflow-x-hidden px-2 md:px-6"
              style={{ scrollBehavior: 'auto' }}
            >
              {/* Duplicate images for infinite scroll effect */}
              {[...AWARDS.gallery, ...AWARDS.gallery].map((item, idx) => {
                const actualIndex = idx % AWARDS.gallery.length;
                return (
                  <button
                    key={idx}
                    onClick={() => openLightbox(actualIndex)}
                    className="group relative h-full flex-shrink-0 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
                    style={{
                      width: window.innerWidth < 768 ? '220px' : '280px',
                      border: "2px solid var(--gold)",
                      boxShadow: "0 20px 40px -20px rgba(110,20,35,0.4)"
                    }}
                  >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading={idx < 6 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  {/* Gradient overlay - always visible, darkens on hover */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)" }}
                  />
                  {/* Award details - slides up on hover */}
                  <div
                    className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <h4
                      className="font-serif-display text-lg font-semibold leading-tight"
                      style={{ color: "white", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                    >
                      {item.org}
                    </p>
                    <p
                      className="mt-2 font-serif-display text-base font-semibold"
                      style={{ color: "white", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                    >
                      {item.year}
                    </p>
                  </div>
                </button>
              );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Image Lightbox */}
      {lightboxData && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(40,16,20,0.95)" }}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-110"
            style={{ border: "1px solid var(--gold)", color: "var(--gold-light)" }}
            onClick={closeLightbox}
            aria-label="Close"
          >
            <span className="text-2xl">×</span>
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
            style={{ background: "var(--maroon)", color: "var(--ivory)", boxShadow: "0 4px 16px rgba(110,20,35,0.6)" }}
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
            style={{ background: "var(--maroon)", color: "var(--ivory)", boxShadow: "0 4px 16px rgba(110,20,35,0.6)" }}
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
          <div
            className="relative max-h-[90vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="overflow-hidden rounded-lg"
              style={{ border: "3px solid var(--gold)", boxShadow: "0 30px 80px -20px rgba(182,138,62,0.6)" }}
            >
              <img
                src={lightboxData.image}
                alt={lightboxData.title}
                className="h-auto w-full object-contain"
                style={{ maxHeight: '70vh' }}
              />
            </div>
            {/* Award Info Caption */}
            <div
              className="mt-5 rounded-lg p-6 text-center"
              style={{ background: "rgba(40,16,20,0.8)", border: "1px solid var(--gold)" }}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Lotus className="h-5 w-10" color="var(--gold)" />
                <span
                  className="font-serif-display text-3xl font-semibold"
                  style={{ color: "var(--gold-light)" }}
                >
                  {lightboxData.year}
                </span>
                <Lotus className="h-5 w-10" color="var(--gold)" />
              </div>
              <h3
                className="font-serif-display text-2xl font-semibold leading-tight md:text-3xl"
                style={{ color: "var(--ivory)" }}
              >
                {lightboxData.title}
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed md:text-base"
                style={{ color: "var(--gold-light)" }}
              >
                {lightboxData.org}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Awards;
