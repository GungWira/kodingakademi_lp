import TitleLayout from "../core/TitleLayout";

export default function RoadDetail() {
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
        <div className="w-full flex justify-center items-center">
          <img
            src="/roadmap-bcj.webp"
            alt="roadmap koding akademi"
            className="w-full max-w-3xl"
          />
        </div>
      </div>
    </section>
  );
}
