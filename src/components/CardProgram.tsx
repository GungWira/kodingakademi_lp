export default function CardProgram() {
  return (
    <a
      href=""
      className="min-w-72 w-72 rounded-xl flex relative overflow-hidden aspect-square justify-center items-center group"
    >
      <img
        src="/program-1.webp"
        alt="program image koding akademi"
        className="object-cover rounded-xl"
      />
      <div
        className="flex flex-col gap-1 w-full absolute px-6 py-6 pt-10 bottom-0 left-0 h-fit group-hover:pt-20 transition-all"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 110, 255, 0) 0%, #006EFF 49%, #006EFF 100%)",
        }}
      >
        <h3 className="text-white text-xl font-semibold">
          Basic Coding Junior
        </h3>
        <p className="text-white opacity-80 text-base">
          Belajar pemrograman usia dini
        </p>
      </div>
    </a>
  );
}
