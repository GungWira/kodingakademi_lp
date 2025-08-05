import Navbar from "../components/core/Navbar";
import ScrollingBanner from "../components/homepage/Slider";
import CardProgram from "../components/CardProgram";
import Button from "../components/core/Button";
import CardTestimonialLarge from "../components/homepage/CardTestimonialLarge";
import SchoolLogoSlider from "../components/core/SchoolLogoSlider";
import CallToAction from "../components/core/CallToAction";
import Footer from "../components/core/Footer";
import BoxCardTestimonialSmall from "../components/homepage/BoxCardTestimonialSmall";
import BoxCardProject from "../components/homepage/BoxCardProject";

export default function Homepage() {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <Navbar />
      {/* START HERO */}
      {/* SLIDER */}
      <ScrollingBanner />
      {/* SLIDER */}
      <section className="w-full flex justify-center items-center mt-8">
        <div className="w-full max-w-6xl px-8 flex justify-between items-start gap-12">
          <h1 className="font-bold text-4xl flex-1 leading-relaxed">
            Pusat Belajar{" "}
            <span className="relative px-2 py-1 text-white">
              {" "}
              <span className="absolute top-0 left-0 w-full h-full bg-[#006EFF] -z-1 rotate-1 rounded-md"></span>
              Coding
            </span>
            , AI dan Robotika
          </h1>
          <div className="flex flex-col gap-4 flex-1 max-w-96">
            <p className="text-base opacity-80 leading-relaxed">
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
        <div className="w-full max-w-6xl px-8 flex justify-start items-start flex-col gap-4">
          <span className="subtitle text-[#006EFF] font-medium text-base uppercase tracking-widest">
            Our Program
          </span>
          <h2 className="text-4xl font-bold">Let’s Start Learning Today</h2>
          <div className="w-full flex flex-row overflow-x-scroll gap-4 justify-start items-stretch">
            <CardProgram />
            <CardProgram />
            <CardProgram />
            <CardProgram />
          </div>
        </div>
      </section>
      {/* END PROGRAM */}
      {/* START BOOTCAMP */}
      <section className="w-full flex justify-center items-center">
        <div className="w-full max-w-6xl flex justify-between items-stretch gap-10">
          <div className="relative object-cover flex justify-center items-center flex-1 rounded-xl">
            <img
              src="/homepage-bootcamp.webp"
              alt="bootcamp image koding akademi"
              className="h-full object-cover relative z-0 rounded-2xl"
            />
            <img
              src="/homepage-bootcamp-vec.webp"
              alt="bootcamp vector koding akademi"
              className="absolute h-32 -top-12 -right-8"
            />
            <div className="bg-white p-5 rounded-md flex items-center gap-4 absolute bottom-6 left-6">
              <img
                src="/homepage-bootcamp-icon.webp"
                alt="bootcamp icon"
                className="h-10"
              />
              <div className="flex flex-col justify-start items-start">
                <p className="text-lg font-semibold">Certified Mentor</p>
                <p className="text-sm opacity-70">
                  Belajar dengan mentor bersertifikasi
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-start items-start gap-3">
            <span className="subtitle text-[#006EFF] font-medium text-base uppercase tracking-widest">
              Bootcamp
            </span>
            <h2 className="text-4xl font-bold leading-14">
              Accelerated Learning for Future Innovators
            </h2>
            <p className="text-base opacity-80 leading-7">
              Transformasi digital bukanlah sekadar wacana masa depan, ia telah
              menjadi kenyataan yang dimulai hari ini bersama Mediatech.
            </p>
            <div className="flex flex-col gap-2 w-full mt-4">
              <div className="flex flex-row justify-start items-center gap-4">
                <img
                  className="h-4"
                  src="/homepage-bootcamp-point.webp"
                  alt="bootcamp point koding akademi"
                />
                <p className="text-base font-semibold opacity-90">
                  Web Design 1.0 & 2.0
                </p>
              </div>
              <div className="flex flex-row justify-start items-center gap-4">
                <img
                  className="h-4"
                  src="/homepage-bootcamp-point.webp"
                  alt="bootcamp point koding akademi"
                />
                <p className="text-base font-semibold opacity-90">
                  Web Programming (Laravel / Next Js)
                </p>
              </div>
              <div className="flex flex-row justify-start items-center gap-4">
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
        <div className="w-full max-w-6xl flex justify-between items-start gap-10">
          <div className="flex flex-1 flex-col justify-start items-start gap-4">
            <span className="subtitle text-[#006EFF] font-medium text-base uppercase tracking-widest">
              Senior Program
            </span>
            <h2 className="text-4xl font-bold leading-14">
              Accelerated Learning for Future Innovators
            </h2>
            <p className="text-base opacity-80 leading-7">
              Transformasi digital bukanlah sekadar wacana masa depan, ia telah
              menjadi kenyataan yang dimulai hari ini bersama Mediatech.
            </p>
            <div className="flex relative justify-center items-center w-full aspect-3/4 overflow-hidden rounded-2xl">
              <img
                src="/homepage-senior-program-1.webp"
                alt="senior program image koding akademi"
                className="w-full h-full object-cover"
              />
              <div className="bg-white p-5 rounded-md flex items-center gap-4 absolute bottom-6 left-6">
                <img
                  src="/homepage-senior-program-icon-1.webp"
                  alt="bootcamp icon"
                  className="h-10"
                />
                <div className="flex flex-col justify-start items-start">
                  <p className="text-lg font-semibold">Competitive Student</p>
                  <p className="text-sm opacity-70">
                    Belajar dengan siswa kompetitif
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-start items-start gap-10">
            <div className="flex relative justify-center items-center w-full aspect-3/4 overflow-hidden rounded-2xl">
              <img
                src="/homepage-senior-program-2.webp"
                alt="senior program image koding akademi"
                className="w-full h-full object-cover"
              />
              <div className="bg-white p-5 rounded-md flex items-center gap-4 absolute bottom-6 left-6">
                <img
                  src="/homepage-senior-program-icon-2.webp"
                  alt="bootcamp icon"
                  className="h-10"
                />
                <div className="flex flex-col justify-start items-start">
                  <p className="text-lg font-semibold">World Curriculum</p>
                  <p className="text-sm opacity-70">
                    Kurikulum berstandar internasional
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start gap-8 w-full">
              <div className="flex flex-col gap-3 flex-1">
                <p className="text-5xl font-bold">92%</p>
                <p className="text-base opacity-80">Ratensi Pengguna</p>
                <div className="w-full h-1 rounded-2xl bg-[#E8E8E8] overflow-hidden">
                  <div className="w-[92%] h-full bg-[#006EFF] rounded-2xl"></div>
                </div>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <p className="text-5xl font-bold">97%</p>
                <p className="text-base opacity-80">Pengguna Puas</p>
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
          <div className="bg-[#006EFF] flex flex-col justify-center py-8 items-center gap-4 w-full relative overflow-hidden">
            <div className="flex w-full max-w-6xl text-center relative justify-center items-center gap-8">
              <img
                src="/junior-program-cloud-1.webp"
                alt="clound img koding akademi"
                className="min-w-52 w-52"
              />
              <div className="flex flex-col justify-center items-center gap-4">
                <span className="subtitle text-[#FFFFFF] font-medium text-base uppercase tracking-widest">
                  Junior Program
                </span>
                <h2 className="text-4xl font-bold leading-12 text-[#FFFFFF]">
                  Accelerated Learning for Future Innovators
                </h2>
              </div>
              <img
                src="/junior-program-cloud-2.webp"
                alt="clound img koding akademi"
                className="min-w-52 w-52"
              />
            </div>
          </div>
          <div className="bg-[#006EFF] flex flex-col justify-center items-center w-full relative">
            <div className="w-full flex flex-col pt-12 justify-center items-center relative max-w-6xl z-40">
              <div className="w-full max-w-4xl aspect-21/11 bg-white rounded-2xl relative">
                <img
                  src="/junior-program-character-1.webp"
                  alt="character koding akademi"
                  className="absolute -top-16 -left-28 h-40"
                />
                <img
                  src="/junior-program-character-2.webp"
                  alt="character koding akademi"
                  className="absolute -top-16 -right-20 h-36"
                />
              </div>
              <div className="w-full max-w-2xl bg-white relative -top-12 rounded-3xl p-6 shadow-xl flex flex-col justify-center items-center gap-8 inner-shadow-combined-2">
                <div className="bg-[#006EFF] px-12 tracking-widest inner-shadow-combined py-3 text-white font-medium rounded-full">
                  PLATFORM
                </div>
                <div className="flex flex-row w-full justify-center items-center gap-8">
                  <img
                    src="/scartch-logo.webp"
                    alt="scratch logo"
                    className="h-9"
                  />
                  <img
                    src="/code-org-logo.webp"
                    alt="scratch logo"
                    className="h-9"
                  />
                  <img
                    src="/construct-3-logo.webp"
                    alt="scratch logo"
                    className="h-9"
                  />
                  <img
                    src="/roblox-studio-logo.webp"
                    alt="scratch logo"
                    className="h-9"
                  />
                </div>
              </div>
            </div>
            <div className="w-full relative max-w-7xl z-40 py-4">
              <img
                src="/dino-1.webp"
                alt="dinosaurus image koding akademi"
                className="absolute bottom-0 h-64 -left-8"
              />
              <img
                src="/dino-2.webp"
                alt="dinosaurus image koding akademi"
                className="absolute bottom-0 h-64 -right-8"
              />
            </div>
            <img
              src="/junior-program-bottom-1.webp"
              alt="background custom koding akademi"
              className="absolute bottom-0 right-0 min-w-7xl w-7xl z-10"
            />
            <img
              src="/junior-program-bottom-2.webp"
              alt="background custom koding akademi"
              className="absolute bottom-0 left-0 min-w-7xl w-7xl z-0"
            />
          </div>
        </div>
      </section>
      {/* END JUNIOR PROGRAM */}
      {/* START WHY CODING */}
      <section className="flex justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center w-full gap-10 max-w-6xl">
          <div className="flex flex-col justify-center items-center gap-4 text-center max-w-xl">
            <span className="subtitle text-[#006EFF] font-medium text-base uppercase tracking-widest">
              Why Coding?
            </span>
            <h2 className="text-4xl font-bold leading-14">
              Start Early, Think Bigger
            </h2>
            <p className="text-base opacity-80 leading-7">
              Belajar coding bukan cuma tentang jadi programmer — ini tentang
              belajar berpikir logis, kreatif, dan siap menghadapi masa depan
              digital.
            </p>
          </div>
          <div className="grid flex-row justify-start items-stretch gap-6 w-full grid-cols-3">
            <div className="flex bg-white p-8 rounded-lg border border-[#006EFF] flex-col gap-10">
              <img
                src="/homepage-why-1.webp"
                alt="icon why coding koding akademi"
                className="w-16"
              />
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-xl">Future Language</p>
                <p className="opacity-70 leading-7 text-base">
                  Coding adalah bahasa masa depan yang digunakan di hampir semua
                  bidang teknologi.
                </p>
              </div>
            </div>
            <div className="flex bg-white p-8 rounded-lg border border-[#006EFF] flex-col gap-10">
              <img
                src="/homepage-why-1.webp"
                alt="icon why coding koding akademi"
                className="w-16"
              />
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-xl">Future Language</p>
                <p className="opacity-70 leading-7 text-base">
                  Coding adalah bahasa masa depan yang digunakan di hampir semua
                  bidang teknologi.
                </p>
              </div>
            </div>
            <div className="flex bg-white overflow-hidden rounded-lg border border-[#006EFF] flex-col gap-10">
              <img
                src="/homepage-why-image-1.webp"
                alt="image why coding koding akademi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex bg-white overflow-hidden rounded-lg border border-[#006EFF] flex-col gap-10">
              <img
                src="/homepage-why-image-2.webp"
                alt="image why coding koding akademi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex bg-white p-8 rounded-lg border border-[#006EFF] flex-col gap-10">
              <img
                src="/homepage-why-1.webp"
                alt="icon why coding koding akademi"
                className="w-16"
              />
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-xl">Future Language</p>
                <p className="opacity-70 leading-7 text-base">
                  Coding adalah bahasa masa depan yang digunakan di hampir semua
                  bidang teknologi.
                </p>
              </div>
            </div>
            <div className="flex bg-white p-8 rounded-lg border border-[#006EFF] flex-col gap-10">
              <img
                src="/homepage-why-1.webp"
                alt="icon why coding koding akademi"
                className="w-16"
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
        <div className="w-full max-w-6xl flex justify-between items-center gap-10 relative py-16 overflow-hidden">
          <div className="flex flex-1 justify-center items-center relative z-20">
            <img
              src="/homepage-curriculum-main.webp"
              alt="curriculum illustration image"
              className="w-full relative z-0"
            />
            <img
              src="/homepage-curriculum-icon.webp"
              alt="curriculum icon"
              className="absolute -top-12 left-8 rotate-12 z-10 w-40"
            />
          </div>
          <div className="flex flex-col gap-4 flex-1 relative z-20">
            <span className="subtitle text-[#006EFF] font-medium text-base uppercase tracking-widest">
              INTERNATIONAL CURRICULUM
            </span>
            <h2 className="text-4xl font-bold leading-14">
              Accelerated Learning for Future Innovators
            </h2>
            <p className="text-base opacity-80 leading-7">
              Transformasi digital bukanlah sekadar wacana masa depan, ia telah
              menjadi kenyataan yang dimulai hari ini bersama Mediatech.
            </p>
          </div>
        </div>
        <img
          src="/homepage-curriculum-bg-icon-1.webp"
          alt="bg icon"
          className="absolute bottom-0 -right-12 w-52 rotate-12 z-10 opacity-35"
        />
        <img
          src="/homepage-curriculum-bg-icon-2.webp"
          alt="bg icon"
          className="absolute bottom-4 left-8 -rotate-6 w-52 opacity-35"
        />
      </section>
      {/* END CURRICULLUM */}
      {/* START TOOLS */}
      <section className="flex justify-center items-center w-full">
        <div className="flex flex-col w-full max-w-7xl gap-10 justify-center items-center">
          <div className="flex flex-row justify-between items-center gap-10 max-w-6xl w-full">
            <div className="flex flex-col flex-1 gap-4 max-w-md">
              <span className="subtitle text-[#006EFF] font-medium text-base uppercase tracking-widest">
                INTERNATIONAL CURRICULUM
              </span>
              <h2 className="text-4xl font-bold leading-14">
                Accelerated Learning for Future Innovators
              </h2>
            </div>
            <div className="flex flex-1 max-w-md">
              <p className="text-base opacity-80 leading-7">
                Transformasi digital bukanlah sekadar wacana masa depan, ia
                telah menjadi kenyataan yang dimulai hari ini bersama Mediatech.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-6 max-w-8xl overflow-hidden">
            <div className="flex flex-row justify-start items-stretch gap-4 relative -left-40">
              <div className="flex justify-start items-center gap-6 p-5 rounded-xl min-w-fit border border-[#E8E8E8]">
                <img
                  src="/tools-1.webp"
                  alt="tools logo"
                  className="w-16 rounded-lg"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">Scratch</p>
                  <p className="text-base opacity-70">Animation and Game</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-6 p-5 rounded-xl min-w-fit border border-[#E8E8E8]">
                <img
                  src="/tools-2.webp"
                  alt="tools logo"
                  className="w-16 rounded-lg"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">Scratch</p>
                  <p className="text-base opacity-70">Animation and Game</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-6 p-5 rounded-xl min-w-fit border border-[#E8E8E8]">
                <img
                  src="/tools-3.webp"
                  alt="tools logo"
                  className="w-16 rounded-lg"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">Scratch</p>
                  <p className="text-base opacity-70">Animation and Game</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-6 p-5 rounded-xl min-w-fit border border-[#E8E8E8]">
                <img
                  src="/tools-4.webp"
                  alt="tools logo"
                  className="w-16 rounded-lg"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">Scratch</p>
                  <p className="text-base opacity-70">Animation and Game</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-6 p-5 rounded-xl min-w-fit border border-[#E8E8E8]">
                <img
                  src="/tools-5.webp"
                  alt="tools logo"
                  className="w-16 rounded-lg"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">Scratch</p>
                  <p className="text-base opacity-70">Animation and Game</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-6 p-5 rounded-xl min-w-fit border border-[#E8E8E8]">
                <img
                  src="/tools-6.webp"
                  alt="tools logo"
                  className="w-16 rounded-lg"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">Scratch</p>
                  <p className="text-base opacity-70">Animation and Game</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-6 p-5 rounded-xl min-w-fit border border-[#E8E8E8]">
                <img
                  src="/tools-7.webp"
                  alt="tools logo"
                  className="w-16 rounded-lg"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">Scratch</p>
                  <p className="text-base opacity-70">Animation and Game</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse justify-end items-stretch gap-6 relative right-24">
              <div className="flex justify-start items-center gap-6 p-5 rounded-xl min-w-fit border border-[#E8E8E8]">
                <img
                  src="/tools-1.webp"
                  alt="tools logo"
                  className="w-16 rounded-lg"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">Scratch</p>
                  <p className="text-base opacity-70">Animation and Game</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-6 p-5 rounded-xl min-w-fit border border-[#E8E8E8]">
                <img
                  src="/tools-2.webp"
                  alt="tools logo"
                  className="w-16 rounded-lg"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">Scratch</p>
                  <p className="text-base opacity-70">Animation and Game</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-6 p-5 rounded-xl min-w-fit border border-[#E8E8E8]">
                <img
                  src="/tools-3.webp"
                  alt="tools logo"
                  className="w-16 rounded-lg"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">Scratch</p>
                  <p className="text-base opacity-70">Animation and Game</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-6 p-5 rounded-xl min-w-fit border border-[#E8E8E8]">
                <img
                  src="/tools-4.webp"
                  alt="tools logo"
                  className="w-16 rounded-lg"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">Scratch</p>
                  <p className="text-base opacity-70">Animation and Game</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-6 p-5 rounded-xl min-w-fit border border-[#E8E8E8]">
                <img
                  src="/tools-5.webp"
                  alt="tools logo"
                  className="w-16 rounded-lg"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">Scratch</p>
                  <p className="text-base opacity-70">Animation and Game</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-6 p-5 rounded-xl min-w-fit border border-[#E8E8E8]">
                <img
                  src="/tools-6.webp"
                  alt="tools logo"
                  className="w-16 rounded-lg"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">Scratch</p>
                  <p className="text-base opacity-70">Animation and Game</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-6 p-5 rounded-xl min-w-fit border border-[#E8E8E8]">
                <img
                  src="/tools-7.webp"
                  alt="tools logo"
                  className="w-16 rounded-lg"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">Scratch</p>
                  <p className="text-base opacity-70">Animation and Game</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END TOOLS */}
      {/* START TESTIMONIAL */}
      <section className="flex justify-center items-center w-full">
        <div className="w-full max-w-6xl flex flex-col justify-center items-center gap-10">
          <div className="flex text-center flex-col max-w-xl justify-center items-center gap-4">
            <span className="subtitle text-[#006EFF] font-medium text-base uppercase tracking-widest">
              STUDENT SUCCESS
            </span>
            <h2 className="text-4xl font-bold leading-14">
              Accelerated Learning for Future Innovators
            </h2>
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
        <div className="w-full gap-10 flex max-w-6xl justify-center items-center flex-col overflow-hidden">
          <div className="flex flex-row justify-between items-center gap-10 w-full">
            <div className="flex flex-col flex-1 gap-4 max-w-md">
              <span className="subtitle text-[#006EFF] font-medium text-base uppercase tracking-widest">
                STUDENT’S PROJECTS
              </span>
              <h2 className="text-4xl font-bold leading-14">
                Accelerated Learning for Future Innovators
              </h2>
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
        <div className="flex max-w-6xl flex-col w-full justify-center items-center gap-10">
          <div className="flex text-center flex-col max-w-xl justify-center items-center gap-4">
            <span className="subtitle text-[#006EFF] font-medium text-base uppercase tracking-widest">
              Industrial Partner
            </span>
            <h2 className="text-4xl font-bold leading-14">
              Accelerated Learning for Future Innovators
            </h2>
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
