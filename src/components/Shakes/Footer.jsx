import React from "react";
import { assets } from "../../assets/assets";

export default function ShakesFooter() {
  return (
    <div className="bg-white pt-8 sm:pt-16 md:pt-24 lg:pt-32 font-chillax">
      <div className="bg-green-800 w-full py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="text-white text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
              Talab Zone
            </h1>
            <p className="uppercase text-sm sm:text-base md:text-lg mb-4 px-2 md:px-0">
              WALK IN, CHILL, SIP OR GET YOUR SHAKE DELIVERED CHILLED & FRESH.
            </p>

            <div className="flex items-center justify-center md:justify-start mb-6 text-xs sm:text-sm px-4 md:px-0">
              <svg
                className="w-4 h-4 mr-1 flex-shrink-0 max-lg:hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs sm:text-sm">
                WASHINGTON SQUARE, NEW YORK, NY 10012, UNITED STATES
              </span>
            </div>

            <div className="flex gap-3 sm:gap-6 md:gap-8 mt-4 justify-center md:justify-start">
              <button className="bg-white text-green-800 py-1 sm:py-2 px-4 sm:px-6 font-medium text-xs sm:text-sm">
                MAP
              </button>
              <button className="bg-white text-green-800 py-1 sm:py-2 px-4 sm:px-6 font-medium text-xs sm:text-sm">
                VISIT US
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="">
              <img
                src={assets.shakeFooterImg}
                alt="Milkshake"
                className="w-24 h-40 sm:w-28 sm:h-48 md:w-32 md:h-56 object-contain -rotate-[20deg]"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 sm:mt-4 text-center">
          <nav className="text-white flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm">
            <a href="#" className="hover:underline px-1 py-1">
              HOME
            </a>
            <a href="#" className="hover:underline px-1 py-1">
              MEDIA
            </a>
            <a href="#" className="hover:underline px-1 py-1">
              NEWS
            </a>
            <a href="#" className="hover:underline px-1 py-1">
              RESERVATION
            </a>
            <a href="#" className="hover:underline px-1 py-1">
              SITE MAP
            </a>
            <a href="#" className="hover:underline px-1 py-1">
              PRIVACY POLICY
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
