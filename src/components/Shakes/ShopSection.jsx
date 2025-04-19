import React from "react";
import chefImg1 from "../../assets/chefImg1.png";
import chefImg2 from "../../assets/chefImg2.png";
import chefImg3 from "../../assets/chefImg3.png";
import chefImg4 from "../../assets/chefImg4.png";
import shopImg1 from "../../assets/shopImg1.png";
import shopImg2 from "../../assets/shopImg2.png";

export default function ShopSection() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-16 bg-white">
      {/* Title - Small screens: centered with lines, Large screens: original style */}
      <div className="flex items-center mb-6 sm:mb-8">
        {/* Small screens title (mobile-first) */}
        <div className="flex w-full items-center lg:hidden">
          <div className="h-px bg-gray-500 flex-grow"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-noto_sans_jp text-teal-700 px-2 sm:px-4 tracking-wider text-stroke-custom">
            SHOP GUIDE
          </h2>
          <div className="h-px bg-gray-500 flex-grow"></div>
        </div>

        {/* Large screens title (hidden on smaller screens) */}
        <div className="hidden lg:flex justify-start items-center w-[30vw]">
          <div className="h-px bg-gray-500 flex-grow"></div>
          <h2 className="text-5xl font-bold font-noto_sans_jp text-teal-700 px-4 tracking-wider text-stroke-custom">
            SHOP GUIDE
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Location 1 */}
        <div className="space-y-3 sm:space-y-4">
          <div className="overflow-hidden rounded">
            <img
              src={shopImg1}
              alt="Hotel and Restaurant"
              className="w-full h-auto"
            />
          </div>

          {/* Chef images section with equal sizing */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="aspect-square overflow-hidden rounded">
              <img
                src={chefImg1}
                alt="Chef 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded">
              <img
                src={chefImg2}
                alt="Chef 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="pt-1 sm:pt-2">
            <h2 className="font-bold text-sm sm:text-base mb-2">LOCATION 1</h2>
            <div className="flex items-start space-x-2 text-xs sm:text-sm mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p>WASHINGTON SQUARE, NEW YORK, NY 10012, UNITED STATES</p>
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p>+000 0000 000</p>
            </div>
          </div>
        </div>

        {/* Location 2 */}
        <div className="space-y-3 sm:space-y-4 mt-6 md:mt-0">
          <div className="overflow-hidden rounded">
            <img src={shopImg2} alt="Rivarno Cafe" className="w-full h-auto" />
          </div>

          {/* Chef images section with equal sizing */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="aspect-square overflow-hidden rounded">
              <img
                src={chefImg3}
                alt="Chef 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded">
              <img
                src={chefImg4}
                alt="Chef 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="pt-1 sm:pt-2">
            <h2 className="font-bold text-sm sm:text-base mb-2">LOCATION 2</h2>
            <div className="flex items-start space-x-2 text-xs sm:text-sm mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="break-words">
                ST. PAUL'S CHURCHYARD, CITY OF LONDON, LONDON EC4M 8AD, UNITED
                KINGDOM
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p>+000 0000 000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
