import { useState } from "react";

interface ProgramsData {
  [key: string]: string[];
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState<boolean>(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const programsData: ProgramsData = {
    "Junior Program": [
      "Scratch Programming",
      "Basic Web Design",
      "Game Development",
    ],
    "Senior Program": [
      "Advanced JavaScript",
      "React Framework",
      "Full Stack Development",
    ],
    Bootcamp: ["Intensive Coding", "Career Preparation", "Industry Projects"],
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleProgramsHover = (isOpen: boolean): void => {
    setIsProgramsOpen(isOpen);
    if (!isOpen) {
      setActiveSubMenu(null);
    }
  };

  const handleSubMenuHover = (program: string | null): void => {
    setActiveSubMenu(program);
  };

  return (
    <nav className="w-full z-50 bg-white fixed top-0 left-0 shadow-sm flex items-center justify-center">
      <div className="px-8 w-full max-w-6xl flex justify-between items-center gap-8 py-6">
        {/* Logo */}
        <a href="/">
          <img
            src="/logo-color.webp"
            alt="logo koding akademi color"
            className="h-9"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-end items-center gap-10">
          <a
            href=""
            className="text-sm font-medium text-gray-900 opacity-70 hover:opacity-100 transition-opacity"
          >
            Home
          </a>

          {/* Programs Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleProgramsHover(true)}
            onMouseLeave={() => handleProgramsHover(false)}
          >
            <a
              href=""
              className="text-sm font-medium text-gray-900 opacity-70 hover:opacity-100 transition-opacity flex items-center gap-1"
            >
              Programs
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>

            {/* Bridge untuk menghubungkan Programs dengan dropdown */}
            {isProgramsOpen && (
              <div className="absolute top-full left-0 w-48 h-2 bg-transparent"></div>
            )}

            {/* First Level Dropdown */}
            {isProgramsOpen && (
              <div className="absolute top-full left-0 pt-2 w-48">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  {Object.keys(programsData).map((program: string) => (
                    <div
                      key={program}
                      className="relative group/sub"
                      onMouseEnter={() => handleSubMenuHover(program)}
                      onMouseLeave={() => handleSubMenuHover(null)}
                    >
                      <a
                        href=""
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-between"
                      >
                        {program}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>

                      {/* Bridge untuk menghubungkan menu utama dengan submenu */}
                      {activeSubMenu === program && (
                        <div className="absolute top-0 left-full w-2 h-full bg-transparent"></div>
                      )}

                      {/* Second Level Dropdown */}
                      {activeSubMenu === program && (
                        <div className="absolute top-0 left-full pl-2 w-48">
                          <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                            {programsData[program].map(
                              (subProgram: string, index: number) => (
                                <a
                                  key={index}
                                  href=""
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                >
                                  {subProgram}
                                </a>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href=""
            className="text-sm font-medium text-gray-900 opacity-70 hover:opacity-100 transition-opacity"
          >
            Blog
          </a>
          <a
            href=""
            className="text-sm font-medium text-gray-900 opacity-70 hover:opacity-100 transition-opacity"
          >
            Contact
          </a>
          <a href="">
            <button className="bg-[#006EFF] px-4 py-3 cursor-pointer text-white text-sm rounded-sm font-semibold flex justify-center items-center gap-3 hover:bg-[#005DD7] transition-colors">
              Book Trial Now
              <img src="/arrow-icon.webp" alt="arrow icon" className="h-4" />
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col gap-1 w-6 h-6 justify-center"
          type="button"
        >
          <div
            className={`h-0.5 w-6 bg-gray-900 transition-all ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`h-0.5 w-6 bg-gray-900 transition-all ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`h-0.5 w-6 bg-gray-900 transition-all ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg">
          <div className="px-8 py-4 space-y-4">
            <a
              href=""
              className="block text-sm font-medium text-gray-900 opacity-70 py-2"
            >
              Home
            </a>

            {/* Mobile Programs Section */}
            <div>
              <button
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                className="w-full text-left text-sm font-medium text-gray-900 opacity-70 py-2 flex items-center justify-between"
                type="button"
              >
                Programs
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isProgramsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isProgramsOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {Object.keys(programsData).map((program: string) => (
                    <div key={program}>
                      <button
                        onClick={() =>
                          setActiveSubMenu(
                            activeSubMenu === program ? null : program
                          )
                        }
                        className="w-full text-left text-sm text-gray-600 py-2 flex items-center justify-between"
                        type="button"
                      >
                        {program}
                        <svg
                          className={`w-3 h-3 transition-transform ${
                            activeSubMenu === program ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {activeSubMenu === program && (
                        <div className="ml-4 space-y-1">
                          {programsData[program].map(
                            (subProgram: string, index: number) => (
                              <a
                                key={index}
                                href=""
                                className="block text-xs text-gray-500 py-1"
                              >
                                {subProgram}
                              </a>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a
              href=""
              className="block text-sm font-medium text-gray-900 opacity-70 py-2"
            >
              Blog
            </a>
            <a
              href=""
              className="block text-sm font-medium text-gray-900 opacity-70 py-2"
            >
              Contact
            </a>
            <div className="pt-4">
              <button
                className="w-full bg-[#006EFF] px-4 py-3 text-white text-sm rounded-sm font-semibold flex justify-center items-center gap-3 hover:bg-[#005DD7] transition-colors"
                type="button"
              >
                Book Trial Now
                <img src="/arrow-icon.webp" alt="arrow icon" className="h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
