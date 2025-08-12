import CallToAction from "../components/core/CallToAction";
import Footer from "../components/core/Footer";
import Navbar from "../components/core/Navbar";
import TitleLayout from "../components/core/TitleLayout";
import ClassInformation from "../components/courseDetail/ClassInformation";
import ClassPreview from "../components/courseDetail/ClassPreview";
import CourseDetailHero from "../components/courseDetail/CourseDetailHero";
import RoadDetail from "../components/courseDetail/RoadDetail";
import BoxCardProject from "../components/homepage/BoxCardProject";

export default function CourseDetail() {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      {/* NAVBAR */}
      <Navbar />
      {/* NAVBAR */}
      {/* HERO COURSE DETAIL */}
      <CourseDetailHero
        title="Basic Coding Junior"
        subtitle="Junior Program"
        description="Transformasi digital bukanlah sekadar wacana masa depan, ia telah menjadi kenyataan yang dimulai hari ini bersama Mediatech."
        image="/course-detail-hero-bcj.svg"
      />
      {/* HERO COURSE DETAIL */}
      {/* CLASS PREVIEW COURSE DETAIL */}
      <ClassPreview />
      {/* CLASS PREVIEW COURSE DETAIL */}
      {/* CLASS INFORMATION COURSE DETAIL */}
      <ClassInformation />
      {/* CLASS INFORMATION COURSE DETAIL */}
      {/* ROAD JOURNEY COURSE DETAIL */}
      <RoadDetail />
      {/* ROAD JOURNEY COURSE DETAIL */}
      {/* COURSE PROJECT */}
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
      {/* COURSE PROJECT */}
      {/* START CTA */}
      <CallToAction />
      {/* END CTA */}
      {/* START FOOTER */}
      <Footer />
      {/* END FOOTER */}
    </div>
  );
}
