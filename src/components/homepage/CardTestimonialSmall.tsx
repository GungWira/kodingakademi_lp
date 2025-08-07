export default function CardTestimonialSmall() {
  return (
    <div className="card-small flex snap-start justify-center items-center relative overflow-hidden rounded-xl">
      <img
        src="/homepage-testimonial-small-1.webp"
        alt="testimonial image small"
        className="w-full h-full object-cover relative"
      />
      <div className="absolute bottom-3 w-full left-0 px-4">
        <div className="w-full gap-1 bg-white inner-shadow-combined-3 rounded-md flex flex-col justify-center items-center px-4 py-5">
          <p className="text-sm sm:text-base font-semibold">Gilbreto Hartono</p>
          <p className="text-xs sm:text-sm opacity-70 text-center">
            Juara 1 Scratch Internasional
          </p>
        </div>
      </div>
    </div>
  );
}
