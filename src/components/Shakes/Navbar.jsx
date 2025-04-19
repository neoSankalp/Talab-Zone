import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavbarShakes = () => {
  const [hoverItem, setHoverItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "food", label: "Food" },
    { id: "desert", label: "Desert" },
    { id: "inquiry", label: "Inquiry" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="z-50 bg-white fixed w-full flex justify-between items-center px-6 py-4 max-sm:px-2 font-chillax text-white">
      <div className="text-2xl font-bold text-black">Talab Zone</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <ul className="flex space-x-1 md:space-x-8">
          {menuItems.map((item) => (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                className="block px-4 py-2 text-gray-500 font-medium text-lg hover:text-[#0C3B2C] transition-colors duration-300"
                onMouseEnter={() => setHoverItem(item.id)}
                onMouseLeave={() => setHoverItem(null)}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0C3B2C] transform transition-all duration-300 ${
                    hoverItem === item.id
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-500 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Inquiry Button - Hidden on small screens */}
      <button className="hidden md:block bg-[#0C3B2C] hover:bg-white hover:text-[#0C3B2C] font-semibold border-2 border-[#0C3B2C] rounded-md text-white px-4 py-2 uppercase transition-all duration-500">
        Inquiry
      </button>

      {/* Mobile Menu Dropdown with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-40"
          >
            <ul className="flex flex-col py-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block px-6 py-3 text-gray-500 font-medium text-lg hover:text-[#0C3B2C] hover:bg-gray-50 transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {/* Inquiry Button for Mobile */}
              <li className="px-4 py-3">
                <button className="w-full bg-[#0C3B2C] hover:bg-white hover:text-[#0C3B2C] font-semibold border-2 border-[#0C3B2C] rounded-md text-white px-4 py-2 uppercase transition-all duration-500">
                  Inquiry
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarShakes;
