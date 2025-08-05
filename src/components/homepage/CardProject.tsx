import React from "react";

export default function CardProject() {
  return (
    <div className="card-small hover:bg-stone-50 flex flex-col justify-center items-center bg-white border border-[#DEDEDE] rounded-xl px-4 py-5">
      <div className="relative flex flex-col justify-center items-center">
        <div className="aspect-square rounded-lg overflow-hidden w-32">
          <img
            src="/project-preview-1.webp"
            alt="project preview"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="inner-shadow-combined w-fit flex justify-center items-center text-center px-5 py-2 rounded-full bg-[#006EFF] text-sm text-white font-medium min-w-40 -top-5 relative">
          Pixel War
        </div>
      </div>
      <div className="flex flex-col w-full justify-start items-start gap-1">
        <p className="text-base font-semibold">Pixel Survive 4</p>
        <p className="text-sm opacity-80">Alexandro Ivo (14)</p>
      </div>
    </div>
  );
}
