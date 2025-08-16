type ButtonProps = {
  content: string;
  type?: "White" | "Blue";
  style?: string;
  onClick?: () => void;
  typeAttr?: "button" | "submit" | "reset";
};

export default function Button({
  content,
  style,
  type = "Blue",
  onClick,
  typeAttr = "button",
}: ButtonProps) {
  return (
    <a href="">
      <button
        type={typeAttr}
        onClick={onClick}
        className={`${style} ${
          type == "Blue" && "bg-[#006EFF] text-white hover:bg-[#005DD7]"
        } ${
          type == "White" && "bg-white text-[#006EFF] hover:bg-stone-50"
        }  px-4 py-3 cursor-pointer text-xs sm:text-sm rounded-sm font-semibold flex justify-center items-center gap-2 sm:gap-3 `}
      >
        {content}
        {type == "Blue" && (
          <img src="/arrow-icon.webp" alt="arrow icon" className="h-3 sm:h-4" />
        )}
        {type == "White" && (
          <img
            src="/arrow-icon-blue.webp"
            alt="arrow icon"
            className="h-3 sm:h-4"
          />
        )}
      </button>
    </a>
  );
}
