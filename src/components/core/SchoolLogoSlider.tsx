const logos = [
  "/logo/bootcamp_partner/BHC_Logo.png",
  "/logo/bootcamp_partner/BREWMELOGO.png",
  "/logo/bootcamp_partner/BUKAPO-BALI.jpg",
  "/logo/bootcamp_partner/BVRGROUPASIA.png",
  "/logo/bootcamp_partner/DANACITALOGO.png",
];

export default function SchoolLogoSlider() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full max-w-7xl flex flex-col justify-center items-center gap-10 sm:gap-16 overflow-hidden">
        <div className="w-full max-w-xl flex flex-col justify-center items-center gap-3 sm:gap-4">
          <span className="subtitle text-[#006EFF] font-medium uppercase tracking-widest text-xs sm:text-base">
            School Partner
          </span>
          <h2 className="text-xl sm:text-4xl leading-7 sm:leading-14 font-bold text-center">
            Trusted by Partnered Schools
          </h2>
        </div>

        {/* Logo slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max gap-8 logo-slider-animate">
            {[...logos, ...logos].map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt="school logo"
                className="h-7 sm:h-11 w-auto flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
