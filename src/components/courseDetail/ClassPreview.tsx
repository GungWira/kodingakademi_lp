import TitleLayout from "../core/TitleLayout";

export default function ClassPreview() {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full gap-10 max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 text-center max-w-xl">
          <TitleLayout
            title="Let’s Start Learning Today"
            subtitle="Why Coding?"
            align="Center"
            position="Center"
            type="Normal"
          />
        </div>
        <div className="w-full relative flex justify-center items-center">
          <img
            src="/star-blue.webp"
            alt="star icon 3d blue"
            className="w-16 sm:w-24 md:w-32 z-10 absolute -top-4 sm:-top-8 md:-top-12 -right-4 sm:-right-6 md:-right-8"
          />
          <div className="w-full aspect-video bg-slate-50 rounded-2xl overflow-hidden relative flex justify-center items-center"></div>
          <img
            src="/star-blue.webp"
            alt="star icon 3d blue"
            className="w-16 sm:w-24 md:w-32 rotate-12 z-10 absolute -bottom-4 sm:-bottom-8 md:-bottom-12 -left-4 sm:-left-6 md:-left-8"
          />
        </div>
      </div>
    </section>
  );
}
