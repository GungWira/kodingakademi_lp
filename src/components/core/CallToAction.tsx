import React from "react";
import Button from "./Button";

export default function CallToAction() {
  return (
    <div className="w-full relative flex flex-col justify-center items-center">
      <div className="w-full relative overflow-hidden flex justify-center items-center">
        <img
          src="/junior-program-overlay.webp"
          alt="overlay blue"
          className="w-full min-w-7xl relative -bottom-[1px]"
        />
      </div>
      <div className="w-full flex justify-center items-center bg-[#006EFF] py-12">
        <div className="w-full flex max-w-6xl justify-between items-center gap-10">
          <div className="flex flex-col justify-start items-start gap-4 flex-2">
            <span className="subtitle text-white font-medium text-base uppercase tracking-widest">
              It’s Your Time!
            </span>
            <h2 className="text-5xl text-white font-bold leading-16">
              Coba Kelas Trial Gratis Sekarang Juga!
            </h2>
          </div>
          <div className="flex flex-1 justify-end items-center">
            <Button content="Trial Gratis Sekarang" type="White" />
          </div>
        </div>
      </div>
    </div>
  );
}
