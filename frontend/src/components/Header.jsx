import React, { useState } from "react";

const Header = () => {
  // State to manage menu visibility
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to scroll smoothly to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -90;
      const yPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 fixed w-full z-50 sm:py-4 lg:py-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button onClick={() => scrollToSection("home")} className="flex items-center space-x-3 rtl:space-x-reverse animate-slideBottom">
          <span className="self-center text-4xl font-semibold whitespace-nowrap text-white">
            Portfolio
          </span>
        </button>
        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-black rounded-lg md:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600   "
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only bg-gray-800 hover:bg-gray-700">Open Menu</span>
          <svg
            className="w-7 h-7"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* Navigation Links */}
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   rounded-lg bg-gray-800 md:flex-row md:space-x-5 lg:space-x-9 rtl:space-x-reverse md:mt-0 md:border-0  ">
            {["Home", "About", "Education", "Skills", "Projects", "Contact"].map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setMenuOpen(false); // Close menu after clicking a link
                  }}
                  className="block py-2 px-3 w-full pt-8 text-left text-2xl sm:hover:bg-gray-700 text-white rounded-sm md:hover:bg-transparent md:border-0 md:p-0 animate-slideTop  hover:text-cyan-400 "
                  style={{animationDelay: `${index * 0.2}s`,animationFillMode: "both"}}
                >
                  {item}
                </button>
                {isMenuOpen ? <hr/>:''}
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
