import { useRef, useState } from "react";
import CardProgram from "./CardProgram";

const TOTAL_CARDS = 10;
const VISIBLE_CARDS = 4;

export default function BoxCardProgram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.scrollWidth / TOTAL_CARDS;
    let newIndex = currentIndex;

    if (direction === "left") {
      newIndex =
        currentIndex === 0 ? TOTAL_CARDS - VISIBLE_CARDS : currentIndex - 1;
    } else {
      newIndex =
        currentIndex >= TOTAL_CARDS - VISIBLE_CARDS ? 0 : currentIndex + 1;
    }

    container.scrollTo({
      left: cardWidth * newIndex,
      behavior: "smooth",
    });

    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full sm:mt-8 mt-4">
      {/* Left Button */}
      <button
        onClick={() => handleScroll("left")}
        className="absolute top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full hover:bg-gray-100 left-2 hidden sm:flex"
      >
        <img
          src="/arrow-w-bg.webp"
          alt="next button"
          className="relative z-10 hover:brightness-95 w-9 :w-12 "
        />
      </button>

      {/* Right Button */}
      <button
        onClick={() => handleScroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rotate-180 bg-white shadow-md rounded-full hover:bg-gray-100 hidden sm:flex"
      >
        <img
          src="/arrow-w-bg.webp"
          alt="next button"
          className="relative z-10 hover:brightness-95 w-9 :w-12 "
        />
      </button>

      {/* Card Container */}
      <div
        ref={containerRef}
        className="w-full flex overflow-x-auto sm:overflow-hidden scroll-smooth snap-x snap-mandatory gap-4"
      >
        {[...Array(TOTAL_CARDS)].map((_, index) => (
          <CardProgram key={index} />
        ))}
      </div>
    </div>
  );
}
