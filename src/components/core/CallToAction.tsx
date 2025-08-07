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
      <div className="w-full flex justify-center items-center bg-[#006EFF] py-0 pb-9 sm:pb-12 sm:py-12 px-6 md:px-8">
        <div className="w-full flex max-w-6xl justify-between items-start md:items-center gap-6 md:gap-10 flex-col md:flex-row">
          <div className="flex flex-col justify-start items-start gap-4 flex-2">
            <span className="subtitle text-white font-medium text-base uppercase tracking-widest">
              It’s Your Time!
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-12 sm:leading-14 md:leading-16">
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
