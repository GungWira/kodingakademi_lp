import TitleLayout from "../core/TitleLayout";

export default function ClassInformation() {
  return (
    <section className="flex justify-center items-center w-full overflow-hidden">
      <div className="flex flex-col w-full max-w-6xl gap-2 md:gap-10 justify-center items-start px-6 sm:px-8">
        <div className="flex justify-start md:justify-between md:flex-row flex-col items-start md:items-center gap-3 md:gap-10 max-w-7xl w-full">
          <div className="flex flex-col flex-1 gap-4 md:max-w-md">
            <TitleLayout
              title="Let’s Start Learning Today"
              subtitle="Learning Tools"
              align="Left"
              position="Left"
              type="Normal"
            />
          </div>
          <div className="flex flex-1 md:max-w-md">
            <p className="text-sm sm:text-base opacity-80 leading-7">
              Transformasi digital bukanlah sekadar wacana masa depan, ia telah
              menjadi kenyataan yang dimulai hari ini bersama Mediatech.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full gap-5 justify-start items-stretch">
          <div className="flex flex-col justify-start items-start gap-2 p-6 rounded-xl border border-[#006EFF] w-full flex-1">
            <img
              src="/course-detail-clock.webp"
              alt="3d icon koding akademi"
              className="w-14 sm:w-16 md:w-20 mb-4"
            />
            <p className="font-semibold text-lg">90 Minutes Class</p>
            <p className="font-normal text-base leading-8 opacity-60">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quis
              ratione provident?
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2 p-6 rounded-xl border border-[#006EFF] w-full flex-1">
            <img
              src="/course-detail-chair.webp"
              alt="3d icon koding akademi"
              className="w-14 sm:w-16 md:w-20 mb-4"
            />
            <p className="font-semibold text-lg">3 - 5 Member Session</p>
            <p className="font-normal text-base leading-8 opacity-60">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quis
              ratione provident?
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2 p-6 rounded-xl border border-[#006EFF] w-full flex-1">
            <img
              src="/course-detail-board.webp"
              alt="3d icon koding akademi"
              className="w-14 sm:w-16 md:w-20 mb-4"
            />
            <p className="font-semibold text-lg">Profesional Teacher</p>
            <p className="font-normal text-base leading-8 opacity-60">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quis
              ratione provident?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
