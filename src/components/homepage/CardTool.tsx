interface Tool {
  src: string;
  title: string;
  desc: string;
}

export default function CardTool({ tool }: { tool: Tool }) {
  return (
    <div className="flex justify-start items-center gap-5 md:gap-6 p-4 md:p-5 rounded-xl min-w-fit border border-[#E8E8E8] bg-white flex-shrink-0">
      <img
        src={tool.src}
        alt="tools logo"
        className="w-12 md:w-16 rounded-lg"
      />
      <div className="flex flex-col">
        <p className="font-semibold text-base md:text-lg">{tool.title}</p>
        <p className="text-sm md:text-base opacity-70">{tool.desc}</p>
      </div>
    </div>
  );
}
