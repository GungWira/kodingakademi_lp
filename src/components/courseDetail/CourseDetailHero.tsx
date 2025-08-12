import Button from "../core/Button";
import TitleLayout from "../core/TitleLayout";

type CourseDetailHeroProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export default function CourseDetailHero({
  title,
  subtitle,
  description,
  image,
}: CourseDetailHeroProps) {
  return (
    <section className="w-full flex justify-center items-center mt-32">
      <div className="w-full max-w-6xl px-6 sm:px-8 flex justify-start items-center flex-col sm:flex-row gap-3 sm:gap-4">
        <div className="flex flex-col justify-center items-start flex-2 gap-3">
          <TitleLayout
            title={title}
            subtitle={subtitle}
            align="Left"
            position="Left"
            type="Normal"
            size="BigSize"
          />
          <p className="text-sm sm:text-base opacity-80 leading-relaxed">
            {description}
          </p>
          <Button style="mt-2" content="Book Trial Now" />
        </div>
        <div className="flex justify-end items-center flex-3">
          <img
            src={image}
            alt="illustrasi basic coding junior koding akademi"
          />
        </div>
      </div>
    </section>
  );
}
