import { useEffect, useRef } from "react";
import CardTool from "./CardTool";

interface Tool {
  src: string;
  title: string;
  desc: string;
}

export default function InfiniteMarqueeTools() {
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  const tools: Tool[] = [
    { src: "/tools-1.webp", title: "Scratch", desc: "Animation and Game" },
    { src: "/tools-2.webp", title: "Python", desc: "Programming Language" },
    { src: "/tools-3.webp", title: "Figma", desc: "Design Tool" },
    { src: "/tools-4.webp", title: "Blender", desc: "3D Modeling" },
    { src: "/tools-5.webp", title: "Unity", desc: "Game Engine" },
    { src: "/tools-6.webp", title: "Photoshop", desc: "Image Editor" },
    { src: "/tools-7.webp", title: "Arduino", desc: "Hardware Platform" },
  ];

  // Duplicate tools untuk seamless infinite scroll
  const duplicatedTools: Tool[] = [...tools, ...tools, ...tools];

  useEffect(() => {
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;

    if (!topRow || !bottomRow) return;
    const speed: number = 1; // pixels per frame
    const cardWidth: number = 280; // estimated width of each card including gap
    const resetPoint: number = tools.length * cardWidth;

    let topAnimationId: number;
    let bottomAnimationId: number;
    let topPosition: number = 0;
    let bottomPosition: number = -resetPoint; // Start dari posisi negatif

    const animateTopRow = (): void => {
      topPosition += speed;

      if (topPosition >= resetPoint) {
        topPosition = 0;
      }

      topRow.style.transform = `translateX(-${topPosition}px)`;
      topAnimationId = requestAnimationFrame(animateTopRow);
    };

    const animateBottomRow = (): void => {
      bottomPosition += speed;

      if (bottomPosition >= 0) {
        bottomPosition = -resetPoint;
      }

      bottomRow.style.transform = `translateX(${bottomPosition}px)`;
      bottomAnimationId = requestAnimationFrame(animateBottomRow);
    };

    // Start animations
    topAnimationId = requestAnimationFrame(animateTopRow);
    bottomAnimationId = requestAnimationFrame(animateBottomRow);

    // Cleanup
    return (): void => {
      if (topAnimationId) cancelAnimationFrame(topAnimationId);
      if (bottomAnimationId) cancelAnimationFrame(bottomAnimationId);
    };
  }, [tools.length]);

  return (
    <div className="w-full max-w-6xl mx-auto py-8 overflow-hidden">
      {/* Top Row - Moving Left */}
      <div className="w-full overflow-hidden mb-8">
        <div
          ref={topRowRef}
          className="flex gap-4 w-max"
          style={{ willChange: "transform" }}
        >
          {duplicatedTools.map((tool, index) => (
            <CardTool key={index} tool={tool} />
          ))}
        </div>
      </div>

      {/* Bottom Row - Moving Right */}
      <div className="w-full overflow-hidden">
        <div
          ref={bottomRowRef}
          className="flex gap-4 w-max"
          style={{ willChange: "transform" }}
        >
          {duplicatedTools.map((tool, index) => (
            <CardTool key={index} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
