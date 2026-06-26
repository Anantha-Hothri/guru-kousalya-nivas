import React, { useEffect, useMemo, useState } from "react";
import { PageHero } from "../components/Shared";
import { GALLERY, GALLERY_FILTERS } from "../data/mock";
import { useReveal } from "../hooks/useAnim";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { X, ZoomIn } from "lucide-react";

const shimmerStyle = `
@keyframes galleryShimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.gallery-skeleton {
  background: linear-gradient(
    90deg,
    rgba(182,138,62,0.12) 0%,
    rgba(182,138,62,0.22) 50%,
    rgba(182,138,62,0.12) 100%
  );
  background-size: 200% 100%;
  animation: galleryShimmer 1.2s linear infinite;
}

.gallery-img {
  width: 100%;
  height: auto;
  display: block;
}
`;

const preloadImages = (images = []) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const GalleryImageCard = ({ g, i, onOpen }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      data-reveal
      onClick={onOpen}
      className="zoom-parent group relative mb-3 block w-full overflow-hidden rounded-lg sm:mb-4 sm:rounded-xl"
      style={{
        border: "1px solid rgba(182,138,62,0.4)",
        breakInside: "avoid",
      }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{
          background: "rgba(182,138,62,0.08)",
        }}
      >
        {!loaded && (
          <div
            className="gallery-skeleton absolute inset-0 z-[1]"
            style={{
              minHeight: "150px",
            }}
            aria-hidden="true"
          />
        )}

        <img
          src={g.src}
          alt={g.cat}
          loading={i < 8 ? "eager" : "lazy"}
          fetchPriority={i < 4 ? "high" : "auto"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className="gallery-img zoom-img transition-opacity duration-300"
          style={{
            opacity: loaded ? 1 : 0,
          }}
        />

        <span
          className="absolute inset-0 z-[2] flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100"
          style={{ background: "rgba(87,16,25,0.4)" }}
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full sm:h-12 sm:w-12"
            style={{
              background: "var(--maroon)",
              border: "1px solid var(--gold-light)",
            }}
          >
            <ZoomIn size={18} className="sm:w-[20px] sm:h-[20px]" style={{ color: "var(--gold-light)" }} />
          </span>
        </span>

        <span
          className="absolute left-2 top-2 z-[2] rounded-full px-2 py-1 text-[8px] font-semibold tracking-[0.1em] opacity-0 transition-opacity duration-300 sm:left-3 sm:top-3 sm:px-3 sm:text-[9px] sm:tracking-[0.12em] uppercase group-hover:opacity-100 group-active:opacity-100"
          style={{
            background: "var(--gold-light)",
            color: "var(--maroon-deep)",
          }}
        >
          {g.cat}
        </span>
      </div>
    </button>
  );
};

const GalleryModalImage = ({ src, onClose, onPrev, onNext }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
      style={{ background: "rgba(40,16,20,0.9)" }}
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full sm:right-5 sm:top-5 sm:h-11 sm:w-11 transition-transform hover:scale-110"
        style={{
          border: "1px solid var(--gold)",
          color: "var(--gold-light)",
        }}
        onClick={onClose}
        aria-label="Close"
      >
        <X size={18} className="sm:w-[22px] sm:h-[22px]" />
      </button>

      {/* Previous Button */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
        style={{ background: "var(--maroon)", color: "var(--ivory)", boxShadow: "0 4px 16px rgba(110,20,35,0.6)" }}
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Next Button */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
        style={{ background: "var(--maroon)", color: "var(--ivory)", boxShadow: "0 4px 16px rgba(110,20,35,0.6)" }}
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </button>

      <div
        className="relative flex min-h-[200px] min-w-[200px] items-center justify-center sm:min-h-[300px] sm:min-w-[300px]"
        onClick={(e) => e.stopPropagation()}
      >
        {!loaded && (
          <div
            className="gallery-skeleton absolute inset-0 rounded-lg"
            aria-hidden="true"
          />
        )}

        <img
          src={src}
          alt="Gallery view"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain transition-opacity duration-300 sm:max-h-[88vh] sm:max-w-[92vw]"
          style={{
            border: "2px solid var(--gold)",
            opacity: loaded ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
};

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const ref = useReveal([filter]);

  const items = useMemo(() => {
    return GALLERY.filter((g) => filter === "All" || g.cat === filter);
  }, [filter]);

  useEffect(() => {
    preloadImages(items.slice(0, 8).map((item) => item.src));
  }, [items]);

  // Lightbox navigation functions
  const openLightbox = (index) => {
    setActiveIndex(index);
    setActive(items[index].src);
  };

  const closeLightbox = () => {
    setActive(null);
    setActiveIndex(0);
  };

  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next'
      ? (activeIndex + 1) % items.length
      : (activeIndex - 1 + items.length) % items.length;
    setActiveIndex(newIndex);
    setActive(items[newIndex].src);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!active) return;

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
  }, [active, activeIndex, items]);

  return (
    <div>
      <style>{shimmerStyle}</style>

      <PageHero
        title="Gallery"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Gallery" },
        ]}
      />

      <section className="py-12 sm:py-16" style={{ background: "var(--ivory)" }}>
        <div className="mb-8 flex flex-wrap justify-center gap-2 px-4 sm:mb-12 sm:gap-3 sm:px-6">
          {GALLERY_FILTERS.map((f) => {
            const a = filter === f;

            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-3 py-1.5 text-[9px] font-semibold tracking-[0.14em] uppercase transition-all duration-300 sm:px-5 sm:py-2 sm:text-[11px] sm:tracking-[0.16em]"
                style={{
                  background: a ? "var(--maroon)" : "transparent",
                  color: a ? "var(--ivory)" : "var(--maroon)",
                  border: `1px solid ${a ? "var(--maroon)" : "var(--gold)"}`,
                  borderRadius: "999px",
                }}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div
          ref={ref}
          className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10"
        >
          <div className="[column-count:2] md:[column-count:3] lg:[column-count:4] [column-gap:0.75rem] sm:[column-gap:1rem]">
            {items.map((g, i) => (
              <GalleryImageCard
                key={g.src + i}
                g={g}
                i={i}
                onOpen={() => openLightbox(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {active && (
        <GalleryModalImage
          src={active}
          onClose={closeLightbox}
          onPrev={() => navigateLightbox('prev')}
          onNext={() => navigateLightbox('next')}
        />
      )}
    </div>
  );
};

export default Gallery;
