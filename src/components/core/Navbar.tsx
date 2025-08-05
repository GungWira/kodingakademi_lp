export default function Navbar() {
  return (
    <nav className="w-full z-50 bg-white fixed top-0 left-0 shadow-sm flex items-center justify-center">
      <div className="px-8 w-full max-w-6xl flex justify-between items-center gap-8 py-6">
        <a href="/">
          <img
            src="/logo-color.webp"
            alt="logo koding akademi color"
            className="h-9"
          />
        </a>
        <div className="flex justify-end items-center gap-10">
          <a href="" className="text-sm font-medium text-gray-900 opacity-70">
            Home
          </a>
          <a href="" className="text-sm font-medium text-gray-900 opacity-70">
            Programs
          </a>
          <a href="" className="text-sm font-medium text-gray-900 opacity-70">
            Blog
          </a>
          <a href="" className="text-sm font-medium text-gray-900 opacity-70">
            Contact
          </a>
          <a href="">
            <button className="bg-[#006EFF] px-4 py-3 cursor-pointer text-white text-sm rounded-sm font-semibold flex justify-center items-center gap-3 hover:bg-[#005DD7]">
              Book Trial Now
              <img src="/arrow-icon.webp" alt="arrow icon" className="h-4" />
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
