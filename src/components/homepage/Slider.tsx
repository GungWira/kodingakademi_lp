import { useEffect, useRef, useState } from "react";

const banners = [
  "/banner-2.webp",
  "/banner-1.webp",
  "/banner-2.webp",
  "/banner-1.webp",
  "/banner-2.webp",
  "/banner-1.webp",
  "/banner-2.webp",
  "/banner-1.webp",
  "/banner-2.webp",
];

export default function ScrollingBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.clientWidth * 1,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollToNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const scrollToNext = () => {
    const nextIndex =
      (currentIndex + 1) % banners.length == 0
        ? 1
        : (currentIndex + 1) % banners.length == banners.length - 1
        ? 1
        : (currentIndex + 1) % banners.length;
    const container = containerRef.current;

    if (container) {
      container.scrollTo({
        left: container.clientWidth * nextIndex,
        behavior: "smooth",
      });
    }

    setCurrentIndex(nextIndex);
  };

  return (
    <div className="relative w-full overflow-hidden mt-26 md:mt-32">
      <div
        className="flex gap-8 overflow-x-hidden scroll-smooth snap-x snap-mandatory no-scrollbar"
        ref={containerRef}
        onScroll={(e) => {
          const scrollLeft = e.currentTarget.scrollLeft;
          const width = e.currentTarget.clientWidth;
          const index = Math.round(scrollLeft / width);
          setCurrentIndex(index);
        }}
      >
        {banners.map((banner, idx) => (
          <div key={idx} className="w-full max-w-6xl snap-center shrink-0">
            <img
              src={banner}
              alt={`Banner ${idx + 1}`}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {banners.map((_, idx) => (
          <span
            key={idx}
            className={`${
              idx == 0 ? "hidden" : idx == banners.length - 1 ? "hidden" : ""
            } w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-gray-400"
            } transition-all duration-300`}
          ></span>
        ))}
      </div>
    </div>
  );
}
