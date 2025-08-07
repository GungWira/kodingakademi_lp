export default function CardTestimonialLarge() {
  return (
    <div className="card min-w-full lg:px-8 bg-white flex justify-between items-center gap-5 md:gap-10 flex-col lg:flex-row">
      <div className="flex justify-center items-center bg-[#006EFF] rounded-xl overflow-hidden">
        <img
          src="/homepage-student-main-1.webp"
          alt="student success koding akademi"
          className="w-full"
        />
      </div>
      <div className="flex w-full flex-col gap-2 md:gap-4">
        <p className="font-bold text-lg sm:text-xl md:text-2xl">
          Gilberto Hermanto
        </p>
        <span className="bg-[#006EFF] inner-shadow-combined w-fit px-5 sm:px-8 py-2 rounded-full text-white font-bold text-sm sm:text-base md:text-lg">
          1st Scratch International Competition
        </span>
        <p className="text-sm md:text-base opacity-80 leading-7">
          Transformasi digital bukanlah sekadar wacana masa depan, ia telah
          menjadi kenyataan yang dimulai hari ini bersama Mediatech.
        </p>
      </div>
    </div>
  );
}
