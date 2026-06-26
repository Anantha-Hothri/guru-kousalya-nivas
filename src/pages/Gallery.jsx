import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PageHero } from "../components/Shared";
import { GALLERY, GALLERY_FILTERS } from "../data/mock";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const ROW_HEIGHT = 260; // px — all rows share this height; image widths vary by aspect ratio
const BASE_SPEED  = 0.6; // px per frame (normal auto-scroll)
const FAST_SPEED  = 4.0; // px per frame (arrow held down)
const ROW_COUNT   = 2;

// Distribute items into rows by interleaving so rows show different images
function distributeRows(items, count) {
  const rows = Array.from({ length: count }, () => []);
  items.forEach((item, i) => rows[i % count].push({ ...item, globalIndex: i }));
  return rows;
}

// ─── Single image card in the strip ─────────────────────────────────────────
const StripCard = ({ g, onOpen }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      onClick={onOpen}
      className="relative flex-none group overflow-hidden rounded-xl focus:outline-none"
      style={{
        height: ROW_HEIGHT,
        // Zero width until loaded so unloaded images take no space in the strip
        width: loaded ? "auto" : 0,
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.45s ease",
        border: loaded ? "1px solid rgba(182,138,62,0.35)" : "none",
        flexShrink: 0,
        cursor: "pointer",
      }}
    >
      <img
        src={g.src}
        alt={g.cat}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={{ height: ROW_HEIGHT, width: "auto", display: "block" }}
      />

      {/* Hover overlay */}
      {loaded && (
        <span
          className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "rgba(87,16,25,0.42)" }}
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ background: "var(--maroon)", border: "1px solid var(--gold-light)" }}
          >
            <ZoomIn size={17} style={{ color: "var(--gold-light)" }} />
          </span>
        </span>
      )}
    </button>
  );
};

// ─── One auto-scrolling row ──────────────────────────────────────────────────
// pausedRef and speedRef are shared refs from the parent so all rows
// pause/speed-up in sync without re-renders.
const ScrollRow = ({ images, pausedRef, speedRef, onOpen }) => {
  const stripRef = useRef(null);
  const posRef   = useRef(0);

  // Duplicate images for seamless infinite loop
  const doubled = useMemo(() => [...images, ...images], [images]);

  // Reset position when filter changes
  useEffect(() => {
    posRef.current = 0;
    if (stripRef.current) stripRef.current.style.transform = "translateX(0px)";
  }, [images]);

  useEffect(() => {
    let raf;
    const tick = () => {
      const el = stripRef.current;
      if (el && !pausedRef.current) {
        posRef.current -= speedRef.current;

        const half = el.scrollWidth / 2;
        if (half > 0) {
          // Wrap when scrolled too far left (forward)
          if (posRef.current <= -half) posRef.current += half;
          // Wrap when scrolled too far right (backward via arrow)
          if (posRef.current > 0) posRef.current -= half;
        }

        el.style.transform = `translateX(${posRef.current}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pausedRef, speedRef]);

  return (
    <div className="overflow-hidden py-1.5" style={{ height: ROW_HEIGHT + 12 }}>
      <div
        ref={stripRef}
        className="flex gap-3 will-change-transform"
        style={{ height: ROW_HEIGHT }}
      >
        {doubled.map((g, i) => (
          <StripCard
            key={`${g.src}-${i}`}
            g={g}
            onOpen={() => onOpen(g.globalIndex)}
          />
        ))}
      </div>
    </div>
  );
};

// ─── Lightbox modal ──────────────────────────────────────────────────────────
const GalleryModalImage = ({ src, onClose, onPrev, onNext }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(false); }, [src]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
      style={{ background: "rgba(40,16,20,0.92)" }}
      onClick={onClose}
    >
      <button
        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-110 sm:right-5 sm:top-5 sm:h-11 sm:w-11"
        style={{ border: "1px solid var(--gold)", color: "var(--gold-light)" }}
        onClick={onClose}
        aria-label="Close"
      >
        <X size={18} />
      </button>

      <button
        className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 md:h-14 md:w-14"
        style={{ background: "var(--maroon)", color: "var(--ivory)", boxShadow: "0 4px 16px rgba(110,20,35,0.6)" }}
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 md:h-14 md:w-14"
        style={{ background: "var(--maroon)", color: "var(--ivory)", boxShadow: "0 4px 16px rgba(110,20,35,0.6)" }}
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        <ChevronRight size={28} />
      </button>

      <div
        className="relative flex min-h-[200px] min-w-[200px] items-center justify-center sm:min-h-[300px] sm:min-w-[300px]"
        onClick={(e) => e.stopPropagation()}
      >
        {!loaded && (
          <div className="absolute inset-0 rounded-lg" style={{ background: "rgba(182,138,62,0.08)" }} />
        )}
        <img
          src={src}
          alt="Gallery"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain sm:max-h-[88vh] sm:max-w-[92vw]"
          style={{ border: "2px solid var(--gold)", opacity: loaded ? 1 : 0, transition: "opacity 0.3s ease" }}
        />
      </div>
    </div>
  );
};

// ─── Page ────────────────────────────────────────────────────────────────────
const Gallery = () => {
  const [filter, setFilter]           = useState("All");
  const [active, setActive]           = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Shared refs — changing these does NOT trigger re-renders,
  // which is what we want for smooth 60fps animation control.
  const pausedRef      = useRef(false);
  const speedRef       = useRef(BASE_SPEED);
  const lightboxRef    = useRef(false); // true while lightbox is open

  const items = useMemo(
    () => GALLERY.filter((g) => filter === "All" || g.cat === filter),
    [filter]
  );

  const rows = useMemo(() => distributeRows(items, ROW_COUNT), [items]);

  // ── Lightbox ──────────────────────────────────────────────────────────────
  const openLightbox = (index) => {
    lightboxRef.current = true;   // lock out resume() while lightbox is open
    pausedRef.current   = true;   // stop the strip immediately
    setActiveIndex(index);
    setActive(items[index].src);
  };

  const closeLightbox = useCallback(() => {
    lightboxRef.current = false;
    setActive(null);
  }, []);

  const navigateLightbox = useCallback((dir) => {
    setActiveIndex((prev) => {
      const next = dir === "next"
        ? (prev + 1) % items.length
        : (prev - 1 + items.length) % items.length;
      setActive(items[next].src);
      return next;
    });
  }, [items]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft")  navigateLightbox("prev");
      if (e.key === "ArrowRight") navigateLightbox("next");
      if (e.key === "Escape")     closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, navigateLightbox, closeLightbox]);

  // ── Strip controls ────────────────────────────────────────────────────────
  const pause  = () => { pausedRef.current = true; };
  // resume must not fire while the lightbox is open —
  // onMouseLeave triggers when the modal overlay appears, which would restart scrolling
  const resume = () => { if (!lightboxRef.current) pausedRef.current = false; };

  // Arrow buttons: holding an arrow unpauses the strip and sets fast speed.
  // On release we restore base speed and re-pause (cursor is still over the container).
  const arrowDown = (dir) => {
    pausedRef.current = false;
    speedRef.current  = dir === "prev" ? -FAST_SPEED : FAST_SPEED;
  };
  const arrowUp = () => {
    speedRef.current  = BASE_SPEED;
    pausedRef.current = true; // re-pause — cursor still inside container
  };

  return (
    <div>
      <PageHero
        title="Gallery"
        breadcrumb={[{ label: "Home", path: "/" }, { label: "Gallery" }]}
      />

      <section className="py-12 sm:py-16" style={{ background: "var(--ivory)" }}>

        {/* Filter buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 px-4 sm:gap-3 sm:px-6">
          {GALLERY_FILTERS.map((f) => {
            const isActive = filter === f;
            return (
              <button
                key={f}
                onClick={() => { setFilter(f); speedRef.current = BASE_SPEED; }}
                className="px-3 py-1.5 text-[9px] font-semibold tracking-[0.14em] uppercase transition-all duration-300 sm:px-5 sm:py-2 sm:text-[11px]"
                style={{
                  background: isActive ? "var(--maroon)" : "transparent",
                  color: isActive ? "var(--ivory)" : "var(--maroon)",
                  border: `1px solid ${isActive ? "var(--maroon)" : "var(--gold)"}`,
                  borderRadius: "999px",
                }}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Scrolling gallery — hover anywhere to pause, hold arrows to fast-scroll */}
        <div
          className="relative"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          {/* Left arrow — hold to scroll backward */}
          <button
            onMouseDown={() => arrowDown("prev")}
            onMouseUp={arrowUp}
            onMouseLeave={arrowUp}
            onTouchStart={() => arrowDown("prev")}
            onTouchEnd={arrowUp}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
            style={{ background: "var(--maroon)", color: "var(--ivory)", boxShadow: "0 4px 16px rgba(110,20,35,0.45)" }}
            aria-label="Scroll backward"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Rows */}
          <div className="space-y-2 px-12 sm:px-16">
            {rows.map((rowImages, ri) => (
              <ScrollRow
                key={`${filter}-${ri}`}
                images={rowImages}
                pausedRef={pausedRef}
                speedRef={speedRef}
                onOpen={openLightbox}
              />
            ))}
          </div>

          {/* Right arrow — hold to scroll forward faster */}
          <button
            onMouseDown={() => arrowDown("next")}
            onMouseUp={arrowUp}
            onMouseLeave={arrowUp}
            onTouchStart={() => arrowDown("next")}
            onTouchEnd={arrowUp}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
            style={{ background: "var(--maroon)", color: "var(--ivory)", boxShadow: "0 4px 16px rgba(110,20,35,0.45)" }}
            aria-label="Scroll forward"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Hint text */}
        <p className="mt-6 text-center text-[10px] tracking-widest uppercase" style={{ color: "var(--bronze)" }}>
          Hover to pause · Hold arrows to scroll faster · Click to enlarge
        </p>
      </section>

      {active && (
        <GalleryModalImage
          src={active}
          onClose={closeLightbox}
          onPrev={() => navigateLightbox("prev")}
          onNext={() => navigateLightbox("next")}
        />
      )}
    </div>
  );
};

export default Gallery;
