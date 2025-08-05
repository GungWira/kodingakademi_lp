type TitleLayoutProps = {
  title: string;
  subtitle: string;
  type?: "White" | "Normal";
  align: "Center" | "Left";
  position: "Center" | "Left";
};

export default function TitleLayout({
  title,
  subtitle,
  type = "Normal",
  align,
  position,
}: TitleLayoutProps) {
  return (
    <div
      className={`
    ${align == "Left" && "text-left"}
    ${align == "Center" && "text-center"}

    ${position == "Left" && "justify-start items-start"}
    ${position == "Center" && "justify-center items-center"}

    flex flex-col gap-2 sm:gap-3`}
    >
      <span
        className={`
        ${type == "Normal" && "text-[#006EFF]"}
        ${type == "White" && "text-[#FFFFFF]"}
         font-medium uppercase tracking-widest text-xs sm:text-base`}
      >
        {subtitle}
      </span>
      <h2
        className={`
            ${type == "Normal" && "text-[#202020]"}
        ${type == "White" && "text-[#FFFFFF]"}
            text-2xl sm:text-4xl leading-9 sm:leading-14 font-bold`}
      >
        {title}
      </h2>
    </div>
  );
}
