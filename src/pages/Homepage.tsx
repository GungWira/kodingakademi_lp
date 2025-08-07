// import ScrollingBanner from "../components/homepage/Slider";
import Button from "../components/core/Button";
import SchoolLogoSlider from "../components/core/SchoolLogoSlider";
import BoxCardProgram from "../components/homepage/BoxCardProgram";
import TitleLayout from "../components/core/TitleLayout";
import BoxLearningTools from "../components/homepage/BoxLearningTools";
import CardTestimonialLarge from "../components/homepage/CardTestimonialLarge";
import BoxCardTestimonialSmall from "../components/homepage/BoxCardTestimonialSmall";
import BoxCardProject from "../components/homepage/BoxCardProject";
import CallToAction from "../components/core/CallToAction";
import Footer from "../components/core/Footer";
import Navbar from "../components/core/Navbar";
import Sliderv2 from "../components/homepage/Slider-v2";

export default function Homepage() {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <Navbar />
      {/* START HERO */}
      {/* SLIDER */}
      <Sliderv2 />
      {/* SLIDER */}
      <section className="w-full flex justify-center items-center mt-8">
        <div className="w-full max-w-6xl px-6 sm:px-8 flex justify-between items-start gap-3 sm:gap-12 flex-col sm:flex-row">
          <h1 className="font-bold flex-1 text-2xl sm:text-4xl leading-9 sm:leading-14">
            Pusat Belajar{" "}
            <span className="relative px-2 py-1 text-white inline-block">
              {" "}
              <span className="absolute top-0 left-0 w-full h-full bg-[#006EFF] -z-1 rotate-1 rounded-md"></span>
              Coding
            </span>
            , AI dan Robotika
          </h1>
          <div className="flex flex-col gap-4 flex-1 sm:max-w-96">
            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
              Transformasi digital bukanlah sekadar wacana masa depan, ia telah
              menjadi kenyataan yang dimulai hari ini bersama Mediatech.
            </p>
            <Button content="Book Trial Now" />
          </div>
        </div>
      </section>
      {/* END HERO */}
      {/* START SPONSOR SCHOOL */}
      <SchoolLogoSlider />
      {/* END SPONSOR SCHOOL */}
      {/* START PROGRAM */}
      <section className="w-full flex justify-center items-center">
        <div className="w-full max-w-6xl px-6 sm:px-8 flex justify-start items-start flex-col gap-3 sm:gap-4">
          <TitleLayout
            title="Let’s Start Learning Today"
            subtitle="Our Program"
            align="Left"
            position="Left"
            type="Normal"
          />
          <BoxCardProgram />
        </div>
      </section>
      {/* END PROGRAM */}
      {/* START BOOTCAMP */}
      <section className="w-full flex justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row justify-between items-stretch gap-10 px-6 sm:px-8">
          <div className="relative object-cover flex justify-center items-center flex-1 rounded-xl">
            <img
              src="/homepage-bootcamp.webp"
              alt="bootcamp image koding akademi"
              className="h-full object-cover relative z-0 rounded-lg sm:rounded-2xl"
            />
            <img
              src="/homepage-bootcamp-vec.webp"
              alt="bootcamp vector koding akademi"
              className="absolute h-20 sm:h-32 -top-12 -right-4"
            />
            <div className="bg-white p-3 sm:p-5 rounded-md flex items-center gap-3 sm:gap-4 absolute sm:bottom-6 sm:left-6 bottom-3 left-3 max-w-[90%]">
              <img
                src="/homepage-bootcamp-icon.webp"
                alt="bootcamp icon"
                className="h-8 sm:h-10"
              />
              <div className="flex flex-col justify-start items-start">
                <p className="text-sm sm:text-base md:text-lg font-semibold">
                  Certified Mentor
                </p>
                <p className="text-xs sm:text-sm opacity-70">
                  Belajar dengan mentor bersertifikasi
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-start items-start gap-3">
            <span className="subtitle text-[#006EFF] font-medium text-base uppercase tracking-widest"></span>
            <h2 className="text-4xl font-bold leading-14"></h2>
            <TitleLayout
              title="Accelerated Learning for Future Innovators"
              subtitle="Bootcamp"
              align="Left"
              position="Left"
              type="Normal"
            />
            <p className="text-sm sm:text-base opacity-80 leading-7">
              Transformasi digital bukanlah sekadar wacana masa depan, ia telah
              menjadi kenyataan yang dimulai hari ini bersama Mediatech.
            </p>
            <div className="flex flex-col gap-2 w-full mt-4">
              <div className="flex flex-row justify-start items-center sm:gap-4 gap-2">
                <img
                  className="h-4"
                  src="/homepage-bootcamp-point.webp"
                  alt="bootcamp point koding akademi"
                />
                <p className="text-base font-semibold opacity-90">
                  Web Design 1.0 & 2.0
                </p>
              </div>
              <div className="flex flex-row justify-start items-center sm:gap-4 gap-2">
                <img
                  className="h-4"
                  src="/homepage-bootcamp-point.webp"
                  alt="bootcamp point koding akademi"
                />
                <p className="text-base font-semibold opacity-90">
                  Web Programming (Laravel / Next Js)
                </p>
              </div>
              <div className="flex flex-row justify-start items-center sm:gap-4 gap-2">
                <img
                  className="h-4"
                  src="/homepage-bootcamp-point.webp"
                  alt="bootcamp point koding akademi"
                />
                <p className="text-base font-semibold opacity-90">
                  Data Analist Python
                </p>
              </div>
            </div>
            <Button content="More Information" style="mt-4" />
          </div>
        </div>
      </section>
      {/* END BOOTCAMP */}
      {/* START SENIOR PROGRAM */}
      <section className="w-full flex justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start sm:gap-10 gap-6 px-6 sm:px-8">
          <div className="flex flex-1 flex-col justify-start items-start gap-4">
            <TitleLayout
              title="Let’s Start Learning Today"
              subtitle="Senior Program"
              align="Left"
              position="Left"
              type="Normal"
            />
            <p className="text-sm sm:text-base opacity-80 leading-7">
              Transformasi digital bukanlah sekadar wacana masa depan, ia telah
              menjadi kenyataan yang dimulai hari ini bersama Mediatech.
            </p>
            <div className="flex relative justify-center items-center w-full aspect-3/4 overflow-hidden rounded-2xl">
              <img
                src="/homepage-senior-program-1.webp"
                alt="senior program image koding akademi"
                className="w-full h-full object-cover"
              />
              <div className="bg-white p-3 sm:p-5 rounded-md flex items-center gap-3 sm:gap-4 absolute sm:bottom-6 sm:left-6 bottom-3 left-3 max-w-[90%]">
                <img
                  src="homepage-senior-program-icon-1.webp"
                  alt="senior program icon"
                  className="h-8 sm:h-10"
                />
                <div className="flex flex-col justify-start items-start">
                  <p className="text-sm sm:text-base md:text-lg font-semibold">
                    Competitive Student
                  </p>
                  <p className="text-xs sm:text-sm opacity-70">
                    Belajar dengan siswa kompetitif
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-start items-start sm:gap-10 gap-6">
            <div className="flex relative justify-center items-center w-full aspect-3/4 overflow-hidden rounded-2xl">
              <img
                src="/homepage-senior-program-2.webp"
                alt="senior program image koding akademi"
                className="w-full h-full object-cover"
              />
              <div className="bg-white p-3 sm:p-5 rounded-md flex items-center gap-3 sm:gap-4 absolute sm:bottom-6 sm:left-6 bottom-3 left-3 max-w-[90%]">
                <img
                  src="homepage-senior-program-icon-2.webp"
                  alt="senior program icon"
                  className="h-8 sm:h-10"
                />
                <div className="flex flex-col justify-start items-start">
                  <p className="text-sm sm:text-base md:text-lg font-semibold">
                    World Curriculum
                  </p>
                  <p className="text-xs sm:text-sm opacity-70">
                    Kurikulum berstandar internasional
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start gap-8 w-full">
              <div className="flex flex-col gap-3 flex-1">
                <p className="text-3xl sm:text-5xl font-bold">92%</p>
                <p className="text-sm sm:text-base opacity-80">
                  Ratensi Pengguna
                </p>
                <div className="w-full h-1 rounded-2xl bg-[#E8E8E8] overflow-hidden">
                  <div className="w-[92%] h-full bg-[#006EFF] rounded-2xl"></div>
                </div>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <p className="text-3xl sm:text-5xl font-bold">97%</p>
                <p className="text-sm sm:text-base opacity-80">Pengguna Puas</p>
                <div className="w-full h-1 rounded-2xl bg-[#E8E8E8] overflow-hidden">
                  <div className="w-[97%] h-full bg-[#006EFF] rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SENIOR PROGRAM */}
      {/* START JUNIOR PROGRAM */}
      <section className="w-full flex justify-center items-center relative">
        <div className="flex relative overflow-hidden flex-col justify-center items-center w-full">
          <div className="flex justify-center relative -bottom-1 items-center w-full overflow-hidden">
            <img
              src="/junior-program-overlay.webp"
              alt="junior program overlay"
              className="min-w-7xl"
            />
          </div>
          <div className="bg-[#006EFF] flex flex-col justify-center py-8 pb-6 items-center gap-4 w-full relative overflow-hidden">
            <div className="flex w-full max-w-6xl text-center relative justify-center items-center gap-8 mt-8 sm:my-0">
              <img
                src="/junior-program-cloud-1.webp"
                alt="clound img koding akademi"
                className="sm:min-w-52 sm:w-52 w-40 min-w-40 absolute md:relative -top-14 sm:top-0 -left-1/6 md:left-0"
              />
              <div className="flex flex-col justify-center items-center gap-4">
                <TitleLayout
                  title="Let’s Start Learning Today"
                  subtitle="Junior Program"
                  align="Center"
                  position="Center"
                  type="White"
                />
              </div>
              <img
                src="/junior-program-cloud-2.webp"
                alt="clound img koding akademi"
                className="sm:min-w-52 sm:w-52 w-40 min-w-40 absolute md:relative -top-16 sm:top-0 -right-1/6 md:right-0"
              />
            </div>
          </div>
          <div className="bg-[#006EFF] flex flex-col justify-center items-center w-full relative">
            <div className="w-full flex flex-col pt-3 sm:pt-12 justify-center items-center relative max-w-6xl z-50 px-6 sm:px-8">
              <div className="w-full max-w-4xl aspect-21/11 bg-white rounded-2xl relative">
                <img
                  src="/junior-program-character-1.webp"
                  alt="character koding akademi"
                  className="absolute -top-8 sm:-top-16 -left-12 md:-left-28 md:h-40 sm:h-32 h-20"
                />
                <img
                  src="/junior-program-character-2.webp"
                  alt="character koding akademi"
                  className="absolute -top-8 sm:-top-16 -right-10 sm:-right-12 md:-right-20 md:h-36 sm:h-28 h-18"
                />
              </div>
              <div className="w-full  sm:max-w-fit md:max-w-2xl bg-white relative z-[60] top-0 mt-8 sm:mt-0 sm:-top-12 rounded-3xl p-4 sm:p-6 shadow-xl flex flex-col justify-center items-center sm:gap-8 gap-5 inner-shadow-combined-2">
                <div className="bg-[#006EFF] absolute sm:relative -top-3 sm:top-0 text-xs sm:text-sm md:text-base px-9 sm:px-12 tracking-widest inner-shadow-combined py-2 sm:py-3 text-white font-medium rounded-full">
                  PLATFORM
                </div>
                <div className="flex mt-6 sm:mt-0 flex-row w-full justify-center items-center sm:gap-8 gap-4 flex-wrap">
                  <img
                    src="/scartch-logo.webp"
                    alt="scratch logo"
                    className="h-7 sm:h-9"
                  />
                  <img
                    src="/code-org-logo.webp"
                    alt="scratch logo"
                    className="h-7 sm:h-9"
                  />
                  <img
                    src="/construct-3-logo.webp"
                    alt="scratch logo"
                    className="h-7 sm:h-9"
                  />
                  <img
                    src="/roblox-studio-logo.webp"
                    alt="scratch logo"
                    className="h-7 sm:h-9"
                  />
                </div>
              </div>
            </div>
            <div className="w-full relative max-w-7xl z-40 py-4">
              <img
                src="/dino-1.webp"
                alt="dinosaurus image koding akademi"
                className="absolute bottom-0 h-36 sm:h-52 md:h-64 -left-8"
              />
              <img
                src="/dino-2.webp"
                alt="dinosaurus image koding akademi"
                className="absolute bottom-0 h-40 sm:h-52 md:h-64 -right-8"
              />
            </div>
            <img
              src="/junior-program-bottom-1.webp"
              alt="background custom koding akademi"
              className="absolute bottom-0 right-0 max-h-[60%] sm:max-h-full min-w-7xl w-7xl z-10"
            />
            <img
              src="/junior-program-bottom-2.webp"
              alt="background custom koding akademi"
              className="absolute bottom-0 left-0 max-h-[60%] sm:max-h-full min-w-7xl w-7xl z-0"
            />
          </div>
        </div>
      </section>
      {/* END JUNIOR PROGRAM */}
      {/* START WHY CODING */}
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
            <p className="text-sm sm:text-base opacity-80 leading-7">
              Belajar coding bukan cuma tentang jadi programmer — ini tentang
              belajar berpikir logis, kreatif, dan siap menghadapi masa depan
              digital.
            </p>
          </div>
          <div className="grid flex-row justify-start items-stretch gap-4 sm:gap-6 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex bg-white p-6 sm:p-8 rounded-lg border border-[#006EFF] flex-col gap-10">
              <img
                src="/homepage-why-1.webp"
                alt="icon why coding koding akademi"
                className="w-14 sm:w-16"
              />
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-xl">Future Language</p>
                <p className="opacity-70 leading-7 text-base">
                  Coding adalah bahasa masa depan yang digunakan di hampir semua
                  bidang teknologi.
                </p>
              </div>
            </div>
            <div className="hidden sm:flex md:hidden bg-white overflow-hidden rounded-lg border border-[#006EFF] flex-col gap-10">
              <img
                src="/homepage-why-image-1.webp"
                alt="image why coding koding akademi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex bg-white p-6 sm:p-8 rounded-lg border border-[#006EFF] flex-col gap-10">
              <img
                src="/homepage-why-1.webp"
                alt="icon why coding koding akademi"
                className="w-14 sm:w-16"
              />
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-xl">Future Language</p>
                <p className="opacity-70 leading-7 text-base">
                  Coding adalah bahasa masa depan yang digunakan di hampir semua
                  bidang teknologi.
                </p>
              </div>
            </div>
            <div className="hidden md:flex bg-white overflow-hidden rounded-lg border border-[#006EFF] flex-col gap-10">
              <img
                src="/homepage-why-image-1.webp"
                alt="image why coding koding akademi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:flex bg-white overflow-hidden rounded-lg border border-[#006EFF] flex-col gap-10">
              <img
                src="/homepage-why-image-2.webp"
                alt="image why coding koding akademi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex bg-white p-6 sm:p-8 rounded-lg border border-[#006EFF] flex-col gap-10">
              <img
                src="/homepage-why-1.webp"
                alt="icon why coding koding akademi"
                className="w-14 sm:w-16"
              />
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-xl">Future Language</p>
                <p className="opacity-70 leading-7 text-base">
                  Coding adalah bahasa masa depan yang digunakan di hampir semua
                  bidang teknologi.
                </p>
              </div>
            </div>
            <div className="hidden sm:flex md:hidden bg-white overflow-hidden rounded-lg border border-[#006EFF] flex-col gap-10">
              <img
                src="/homepage-why-image-2.webp"
                alt="image why coding koding akademi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex bg-white p-6 sm:p-8 rounded-lg border border-[#006EFF] flex-col gap-10">
              <img
                src="/homepage-why-1.webp"
                alt="icon why coding koding akademi"
                className="w-14 sm:w-16"
              />
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-xl">Future Language</p>
                <p className="opacity-70 leading-7 text-base">
                  Coding adalah bahasa masa depan yang digunakan di hampir semua
                  bidang teknologi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END WHY CODING */}
      {/* START CURRICULLUM */}
      <section className="flex relative overflow-hidden w-full justify-center items-center bg-gradient-to-b from-[#ffffff] to-[#F1F2FF]">
        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 relative py-16 overflow-hidden px-6 sm:px-8">
          <div className="flex flex-1 justify-center items-center relative z-20">
            <img
              src="/homepage-curriculum-main.webp"
              alt="curriculum illustration image"
              className="w-full relative z-0"
            />
            <img
              src="/homepage-curriculum-icon.webp"
              alt="curriculum icon"
              className="absolute -top-12 left-8 rotate-12 z-10 w-24 sm:w-32 md:w-40"
            />
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 flex-1 relative z-20">
            <TitleLayout
              title="Let’s Start Learning Today"
              subtitle="International Curriculum"
              align="Left"
              position="Left"
              type="Normal"
            />
            <p className="text-sm sm:text-base opacity-80 leading-7">
              Transformasi digital bukanlah sekadar wacana masa depan, ia telah
              menjadi kenyataan yang dimulai hari ini bersama Mediatech.
            </p>
          </div>
        </div>
        <img
          src="/homepage-curriculum-bg-icon-1.webp"
          alt="bg icon"
          className="absolute bottom-0 -right-12 w-32 sm:w-40 md:w-52 rotate-12 z-10 opacity-35"
        />
        <img
          src="/homepage-curriculum-bg-icon-2.webp"
          alt="bg icon"
          className="absolute -bottom-4 md:bottom-4 -left-4 md:left-8 -rotate-6 w-32 sm:w-40 md:w-52 opacity-35"
        />
      </section>
      {/* END CURRICULLUM */}
      {/* START TOOLS */}
      <section className="flex justify-center items-center w-full overflow-hidden">
        <div className="flex flex-col w-full max-w-7xl gap-2 md:gap-10 justify-center items-start">
          <div className="flex justify-start md:justify-between md:flex-row flex-col items-start md:items-center gap-3 md:gap-10 max-w-7xl w-full px-6 sm:px-8">
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
                Transformasi digital bukanlah sekadar wacana masa depan, ia
                telah menjadi kenyataan yang dimulai hari ini bersama Mediatech.
              </p>
            </div>
          </div>
          <BoxLearningTools />
        </div>
      </section>
      {/* END TOOLS */}
      {/* START TESTIMONIAL */}
      <section className="flex justify-center items-center w-full">
        <div className="w-full max-w-6xl flex flex-col justify-center items-center gap-6 md:gap-10 px-6 md:px-8">
          <div className="flex text-center flex-col max-w-xl justify-center items-center gap-4">
            <TitleLayout
              title="Let’s Start Learning Today"
              subtitle="Student Success"
              align="Center"
              position="Center"
              type="Normal"
            />
          </div>
          <div className="w-full flex justify-center items-center overflow-hidden">
            <div className="w-full overflow-hidden flex justify-start items-start">
              <CardTestimonialLarge />
              <CardTestimonialLarge />
              <CardTestimonialLarge />
            </div>
            <div className="w-full max-w-6xl absolute flex justify-between items-center">
              <button className="bg-transparent cursor-pointer w-12 relative">
                <img
                  src="/arrow-w-bg.webp"
                  alt="next button"
                  className="relative z-10 hover:brightness-95"
                />
                <div className="absolute w-full h-full aspect-square rounded-full  z-0 top-0 left-1"></div>
              </button>
              <button className="bg-transparent cursor-pointer w-12 rotate-180 relative">
                <img
                  src="/arrow-w-bg.webp"
                  alt="next button"
                  className="relative z-10 hover:brightness-95"
                />
                <div className="absolute w-full h-full aspect-square rounded-full  z-0 top-0 left-1"></div>
              </button>
            </div>
          </div>
          <BoxCardTestimonialSmall />
        </div>
      </section>
      {/* END TESTIMONIAL */}
      {/* START PROJECTS */}
      <section className="flex justify-center items-center w-full">
        <div className="w-full gap-10 flex max-w-6xl justify-center items-center flex-col overflow-hidden px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10 w-full">
            <div className="flex flex-col flex-1 gap-4 max-w-md">
              <TitleLayout
                title="Let’s Start Learning Today"
                subtitle="Student Project"
                align="Left"
                position="Left"
                type="Normal"
              />
            </div>
            <div className="flex flex-1 max-w-md">
              <p className="text-base opacity-80 leading-7">
                Transformasi digital bukanlah sekadar wacana masa depan, ia
                telah menjadi kenyataan yang dimulai hari ini bersama Mediatech.
              </p>
            </div>
          </div>
          <BoxCardProject />
        </div>
      </section>
      {/* END PROJECTS */}
      {/* START INDUSTRY PARTENR */}
      <section className="flex justify-center items-center w-full">
        <div className="flex max-w-6xl flex-col w-full justify-center items-center gap-6 md:gap-10">
          <div className="flex text-center flex-col max-w-xl justify-center items-center gap-4">
            <TitleLayout
              title="Let’s Start Learning Today"
              subtitle="Industrial Partner"
              align="Center"
              position="Center"
              type="Normal"
            />
          </div>
          <div className="w-full">
            <img
              src="/homepage-brand.webp"
              alt="logo brand"
              className="w-full"
            />
          </div>
        </div>
      </section>
      {/* END INDUSTRY PARTENR */}
      {/* START CTA */}
      <CallToAction />
      {/* END CTA */}
      {/* START FOOTER */}
      <Footer />
      {/* END FOOTER */}
    </div>
  );
}
