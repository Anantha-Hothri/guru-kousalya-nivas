import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Music, BookOpen, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTIONS } from "../data/mock";
import { Mandala, KolamDivider, SectionTitle, Lotus, RangoliBg } from "../components/decorative/Ornaments";
import { YouTubeModal, VideoTile } from "../components/Shared";
import { useReveal } from "../hooks/useAnim";

const ProductionDetail = () => {
  const { slug } = useParams();
  const [video, setVideo] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const prod = PRODUCTIONS.find((p) => p.slug === slug);
  const galRef = useReveal();
  const scrollRef = useRef(null);

  if (!prod) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 px-6 pt-24 text-center">
        <h1 className="font-serif-display text-4xl" style={{ color: "var(--maroon)" }}>Production not found</h1>
        <Link to="/productions" className="text-sm tracking-[0.16em] uppercase" style={{ color: "var(--bronze)" }}>← Back to Productions</Link>
      </div>
    );
  }

  const credits = [
    { Icon: Lotus, label: "Concept & Choreography", value: prod.credits.concept, isLotus: true },
    { Icon: Music, label: "Music Composer", value: prod.credits.music },
    { Icon: Clock, label: "Duration", value: prod.credits.duration },
    { Icon: Users, label: "Artists", value: prod.credits.artists },
  ];

  // Get gallery images, fallback to main image
  const galleryImages = prod.gallery && prod.gallery.length > 1 ? prod.gallery : [prod.image];

  // Auto-scroll animation
  useEffect(() => {
    if (!scrollRef.current || galleryImages.length <= 1) return;

    const scrollContainer = scrollRef.current;
    let animationFrameId;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5; // Adjust speed here (lower = slower, higher = faster)

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
  }, [galleryImages.length]);

  // Lightbox navigation functions
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxImage(galleryImages[index]);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxIndex(0);
  };

  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next'
      ? (lightboxIndex + 1) % galleryImages.length
      : (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    setLightboxIndex(newIndex);
    setLightboxImage(galleryImages[newIndex]);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxImage) return;

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
  }, [lightboxImage, lightboxIndex]);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-14" style={{ background: "var(--cream)" }}>
        <RangoliBg className="absolute right-0 top-10 h-[420px] w-[420px]" opacity={0.1} />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <Link to="/productions" className="mb-6 inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase" style={{ color: "var(--bronze)" }}>
            <ArrowLeft size={15} /> Back to Productions
          </Link>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="max-w-full overflow-hidden">
              <div className="flex items-center gap-3">
                <span className="font-num text-xs tracking-[0.18em] uppercase" style={{ color: "var(--bronze)" }}>{prod.year}</span>
                <span className="h-1 w-1 rounded-full" style={{ background: "var(--gold)" }} />
                <span className="text-xs tracking-[0.18em] uppercase" style={{ color: "var(--bronze)" }}>{prod.type}</span>
              </div>
              <h1 className="mt-3 font-serif-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl break-words" style={{ color: "var(--maroon)" }}>{prod.title}</h1>
              <p className="mt-2 text-xs sm:text-sm tracking-[0.12em] sm:tracking-[0.14em] uppercase" style={{ color: "var(--maroon-soft)" }}>{prod.subtitle}</p>
              <KolamDivider className="mt-6 scale-75 sm:scale-100 origin-left" />
            </div>
            <div className="relative mx-auto w-full max-w-[600px]">
              <RangoliBg className="absolute -inset-8 -z-10 h-auto w-auto" opacity={0.18} />

              {/* Cinematic scrolling gallery */}
              <div className="relative h-[280px] md:h-[420px] overflow-hidden">
                {/* Fading edges - narrower on mobile */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 md:w-24"
                  style={{ background: "linear-gradient(to right, var(--cream), transparent)" }}
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 md:w-24"
                  style={{ background: "linear-gradient(to left, var(--cream), transparent)" }}
                />

                {/* Scrolling container */}
                <div
                  ref={scrollRef}
                  className="flex h-full gap-3 md:gap-4 overflow-x-hidden"
                  style={{ scrollBehavior: 'auto' }}
                >
                  {/* Duplicate images for infinite scroll effect */}
                  {[...galleryImages, ...galleryImages].map((img, idx) => {
                    const actualIndex = idx % galleryImages.length;
                    return (
                      <button
                        key={idx}
                        onClick={() => openLightbox(actualIndex)}
                        className="relative h-full flex-shrink-0 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
                        style={{
                          width: window.innerWidth < 768 ? '200px' : '280px',
                          border: "2px solid var(--gold)",
                          boxShadow: "0 20px 40px -20px rgba(110,20,35,0.4)"
                        }}
                      >
                        <img
                          src={img}
                          alt={`${prod.title} ${(idx % galleryImages.length) + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="py-16" style={{ background: "var(--ivory)" }}>
        <div className="mx-auto grid max-w-[1100px] gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {credits.map((c) => (
            <div key={c.label} className="luxe-card rounded-xl p-6 text-center">
              <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full" style={{ background: "var(--cream)", border: "1px solid var(--gold)" }}>
                {c.isLotus ? <Lotus className="h-4 w-8" color="var(--maroon)" /> : <c.Icon size={20} style={{ color: "var(--maroon)" }} />}
              </span>
              <p className="text-[10px] tracking-[0.16em] uppercase" style={{ color: "var(--bronze)" }}>{c.label}</p>
              <p className="mt-1 font-num text-lg font-semibold" style={{ color: "var(--maroon)" }}>{c.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Storyline + Music */}
      <section className="py-12" style={{ background: "var(--ivory)" }}>
        <div className="mx-auto grid max-w-[1100px] gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <h2 className="font-serif-display text-3xl font-semibold" style={{ color: "var(--maroon)" }}>Storyline</h2>
            <Lotus className="my-4 h-5 w-10" color="var(--gold)" />
            <p className="text-base leading-relaxed text-justify" style={{ color: "var(--ink-soft)" }}>{prod.storyline}</p>
          </div>
          <div>
            <h2 className="font-serif-display text-3xl font-semibold" style={{ color: "var(--maroon)" }}>Music & Choreography</h2>
            <Lotus className="my-4 h-5 w-10" color="var(--gold)" />
            <p className="text-base leading-relaxed text-justify" style={{ color: "var(--ink-soft)" }}>{prod.music}</p>
            <div className="mt-6 flex items-start gap-3 rounded-lg p-4" style={{ background: "var(--cream)", border: "1px solid rgba(182,138,62,0.3)" }}>
              <BookOpen size={18} className="mt-0.5" style={{ color: "var(--maroon)" }} />
              <div>
                <p className="text-[10px] tracking-[0.16em] uppercase" style={{ color: "var(--bronze)" }}>Reference</p>
                <p className="text-sm" style={{ color: "var(--ink)" }}>{prod.reference}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-12" style={{ background: "var(--ivory)" }}>
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <h2 className="font-serif-display text-3xl font-semibold" style={{ color: "var(--maroon)" }}>Stages Performed</h2>
          <KolamDivider className="my-5" center={false} />
          <div className="grid gap-3 sm:grid-cols-2">
            {prod.stages.map((s) => (
              <div key={s} className="flex items-start gap-3 rounded-lg p-4 luxe-card">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                <span className="text-sm" style={{ color: "var(--ink-soft)" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {prod.gallery?.length > 1 && (
        <section className="py-16" style={{ background: "var(--cream)" }}>
          <SectionTitle eyebrow="Glimpses" title="Production Gallery" />
          <div ref={galRef} className="mx-auto mt-12 grid max-w-[1280px] grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:px-10">
            {prod.gallery.map((g, i) => (
              <button
                key={i}
                data-reveal
                onClick={() => openLightbox(i)}
                className="zoom-parent overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105"
                style={{ border: "1px solid rgba(182,138,62,0.4)" }}
              >
                <img src={g} alt={`${prod.title} ${i + 1}`} className="zoom-img h-64 w-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Videos */}
      {prod.videos?.length > 0 && (
        <section className="py-16" style={{ background: "var(--ivory)" }}>
          <SectionTitle eyebrow="Watch" title="Video Highlights" />
          <div className="mx-auto mt-12 grid max-w-[1100px] gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
            {prod.videos.map((v) => (
              <VideoTile key={v} videoId={v} onPlay={setVideo} />
            ))}
          </div>
        </section>
      )}

      {/* Review Videos */}
      {prod.reviews?.length > 0 && (
        <section className="py-16" style={{ background: "var(--cream)" }}>
          <SectionTitle eyebrow="Feedback" title="Audience Reviews" />
          <div className="mx-auto mt-12 grid max-w-[1100px] gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
            {prod.reviews.map((v) => (
              <VideoTile key={v} videoId={v} onPlay={setVideo} />
            ))}
          </div>
        </section>
      )}

      <YouTubeModal videoId={video} onClose={() => setVideo(null)} />

      {/* Image Lightbox */}
      {lightboxImage && (
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
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-lg"
            style={{ border: "3px solid var(--gold)", boxShadow: "0 30px 80px -20px rgba(182,138,62,0.6)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt={prod.title}
              className="h-auto w-full object-contain"
              style={{ maxHeight: '90vh' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductionDetail;
