import { useState, useEffect, useCallback } from "react";
import type { Route } from "./+types/gallery";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gallery | David Leggett Photo Services" },
    {
      name: "description",
      content: "Browse selected work from David Leggett Photo Services.",
    },
  ];
}

const generatedPhotos = [
  {
    src: "/images/generated/product-watch.jpg",
    alt: "Luxury Watch Product Shot",
    category: "Product",
  },
  {
    src: "/images/generated/product-mug.jpg",
    alt: "Artisan Coffee Mug",
    category: "Product",
  },
  {
    src: "/images/generated/product-perfume.jpg",
    alt: "Elegant Perfume Bottle",
    category: "Product",
  },
  {
    src: "/images/generated/landscape-mountains.jpg",
    alt: "Mountain Landscape at Golden Hour",
    category: "Landscape",
  },
  {
    src: "/images/generated/landscape-ocean.jpg",
    alt: "Ocean Beach at Sunset",
    category: "Landscape",
  },
  {
    src: "/images/generated/landscape-forest.jpg",
    alt: "Misty Forest with Sun Rays",
    category: "Landscape",
  },
  {
    src: "/images/generated/landscape-city.jpg",
    alt: "Urban Cityscape at Dusk",
    category: "Landscape",
  },
  {
    src: "/images/generated/portrait-woman.jpg",
    alt: "Professional Portrait - Woman",
    category: "Portrait",
  },
  {
    src: "/images/generated/portrait-man.jpg",
    alt: "Professional Portrait - Man",
    category: "Portrait",
  },
  {
    src: "/images/generated/portrait-elderly.jpg",
    alt: "Artistic Portrait - Elderly Woman",
    category: "Portrait",
  },
];

const photos = [
  {
    src: "/images/73_02732-2.jpg",
    alt: "Photo 1",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/73_02830-2.jpg",
    alt: "Photo 2",
    span: "",
  },
  {
    src: "/images/73_02979-2.jpg",
    alt: "Photo 3",
    span: "",
  },
  {
    src: "/images/73_05026-2.jpg",
    alt: "Photo 4",
    span: "",
  },
  {
    src: "/images/73_05076-2.jpg",
    alt: "Photo 5",
    span: "",
  },
  {
    src: "/images/73_06308-2.jpg",
    alt: "Photo 6",
    span: "",
  },
  {
    src: "/images/73_06350-2.jpg",
    alt: "Photo 7",
    span: "",
  },
  {
    src: "/images/73_06745-2.jpg",
    alt: "Photo 8",
    span: "",
  },
  {
    src: "/images/DML00001-2.jpg",
    alt: "Photo 9",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/DML05571-2.jpg",
    alt: "Photo 10",
    span: "",
  },
  {
    src: "/images/DML05884-2.jpg",
    alt: "Photo 11",
    span: "",
  },
  {
    src: "/images/DML06141-2.jpg",
    alt: "Photo 12",
    span: "",
  },
  {
    src: "/images/DML06235-2.jpg",
    alt: "Photo 13",
    span: "",
  },
  {
    src: "/images/DML06327-2.jpg",
    alt: "Photo 14",
    span: "",
  },
  {
    src: "/images/DML06698-2.jpg",
    alt: "Photo 15",
    span: "",
  },
  {
    src: "/images/DML07587-2.jpg",
    alt: "Photo 16",
    span: "",
  },
  {
    src: "/images/DSC01240-2.jpg",
    alt: "Photo 17",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/DSC01419-Edit-2.jpg",
    alt: "Photo 18",
    span: "",
  },
  {
    src: "/images/DSC01592-2.jpg",
    alt: "Photo 19",
    span: "",
  },
  {
    src: "/images/DSC01812-2.jpg",
    alt: "Photo 20",
    span: "",
  },
  {
    src: "/images/DSC02588-2.jpg",
    alt: "Photo 21",
    span: "",
  },
  {
    src: "/images/DSC02622-2.jpg",
    alt: "Photo 22",
    span: "",
  },
  {
    src: "/images/DSC02677-2.jpg",
    alt: "Photo 23",
    span: "",
  },
  {
    src: "/images/DSC02740-2.jpg",
    alt: "Photo 24",
    span: "",
  },
  {
    src: "/images/DSC02807-2.jpg",
    alt: "Photo 25",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/DSC04605-2.jpg",
    alt: "Photo 26",
    span: "",
  },
  {
    src: "/images/DSC05214-2.jpg",
    alt: "Photo 27",
    span: "",
  },
  {
    src: "/images/DSC07564-2.jpg",
    alt: "Photo 28",
    span: "",
  },
  {
    src: "/images/For%20Instagram.00_04_23_02.Still003-2.jpg",
    alt: "Photo 29",
    span: "",
  },
  {
    src: "/images/IMG_0137-2.jpg",
    alt: "Photo 30",
    span: "",
  },
  {
    src: "/images/IMG_0866-2.jpg",
    alt: "Photo 31",
    span: "",
  },
  {
    src: "/images/IMG_0867-2.jpg",
    alt: "Photo 32",
    span: "",
  },
  {
    src: "/images/T3-2.jpg",
    alt: "Photo 33",
    span: "",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Combine all photos for lightbox navigation
  const allPhotos = [
    ...photos.map((p) => ({ src: p.src, alt: p.alt })),
    ...generatedPhotos.map((p) => ({ src: p.src, alt: p.alt })),
  ];

  const close = useCallback(() => setSelectedIndex(null), []);
  const prev = useCallback(
    () =>
      setSelectedIndex((i) => (i !== null ? (i - 1 + allPhotos.length) % allPhotos.length : null)),
    [allPhotos.length]
  );
  const next = useCallback(
    () =>
      setSelectedIndex((i) => (i !== null ? (i + 1) % allPhotos.length : null)),
    [allPhotos.length]
  );

  useEffect(() => {
    if (selectedIndex === null) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedIndex, close, prev, next]);

  return (
    <>
      {/* Page Header */}
      <section className="py-20 px-6 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
          Gallery
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
          A selection of recent work across portraits, weddings, and commercial
          photography.
        </p>
      </section>

      {/* Photo Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg cursor-pointer ${photo.span}`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Generated Section */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white text-center mb-4">
            Generated
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-lg mx-auto">
            AI-generated imagery showcasing creative possibilities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {generatedPhotos.map((photo, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedIndex(photos.length + index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white dark:bg-gray-800">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {photo.category}
                  </span>
                  <p className="text-sm text-gray-900 dark:text-white mt-1">
                    {photo.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={close}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors"
            aria-label="Previous photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <img
            src={allPhotos[selectedIndex].src}
            alt={allPhotos[selectedIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors"
            aria-label="Next photo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <span className="absolute bottom-6 text-white/50 text-sm">
            {selectedIndex + 1} / {allPhotos.length}
          </span>
        </div>
      )}
    </>
  );
}
