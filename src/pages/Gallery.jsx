import React, { useEffect, useMemo, useState } from "react";
import { PageHero } from "../components/Shared";
import { GALLERY, GALLERY_FILTERS } from "../data/mock";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

// ─── Single image card ─────────────────────────────────────────
const GalleryCard = ({ image, onOpen }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      onClick={onOpen}
      className="relative group overflow-hidden rounded-xl focus:outline-none w-full aspect-[3/4]"
      style={{
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.45s ease",
        border: "1px solid rgba(182,138,62,0.35)",
        cursor: "pointer",
      }}
    >
      <img
        src={image.src}
        alt={image.cat}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className="w-full h-full object-cover"
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

// ─── Lightbox modal ──────────────────────────────────────────────────────────
const GalleryModal = ({ image, onClose, onPrev, onNext }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(false); }, [image]);

  if (!image) return null;

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
          src={image.src}
          alt={image.cat}
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
  const [filter, setFilter] = useState("All");
  const [activeImage, setActiveImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Filter images - reorganize to show /images/gallery first
  const filteredItems = useMemo(() => {
    const filtered = GALLERY.filter((g) => filter === "All" || g.cat === filter);

    // Separate images in priority order:
    // 1. Local gallery images (/images/gallery/)
    // 2. Other local images (/images/)
    // 3. External hosted images
    const galleryImages = filtered.filter(img =>
      img.src.includes('/images/gallery/')
    );
    const otherLocalImages = filtered.filter(img =>
      img.src.startsWith('/images/') && !img.src.includes('/images/gallery/')
    );
    const externalImages = filtered.filter(img =>
      !img.src.startsWith('/images/')
    );

    return [...galleryImages, ...otherLocalImages, ...externalImages];
  }, [filter]);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setActiveImage(filteredItems[index]);
  };

  const closeLightbox = () => {
    setActiveImage(null);
  };

  const navigateLightbox = (dir) => {
    setActiveIndex((prev) => {
      const next = dir === "next"
        ? (prev + 1) % filteredItems.length
        : (prev - 1 + filteredItems.length) % filteredItems.length;
      setActiveImage(filteredItems[next]);
      return next;
    });
  };

  useEffect(() => {
    if (!activeImage) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") navigateLightbox("prev");
      if (e.key === "ArrowRight") navigateLightbox("next");
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeImage, filteredItems]);

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
                onClick={() => setFilter(f)}
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

        {/* Gallery Grid */}
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredItems.map((image, index) => (
              <GalleryCard
                key={`${image.src}-${index}`}
                image={image}
                onOpen={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <GalleryModal
        image={activeImage}
        onClose={closeLightbox}
        onPrev={() => navigateLightbox("prev")}
        onNext={() => navigateLightbox("next")}
      />
    </div>
  );
};

export default Gallery;
