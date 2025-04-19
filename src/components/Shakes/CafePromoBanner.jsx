import React from "react";
import PromoBanner from "../../assets/PromoBanner.png";

export default function CafePromoBanner() {
  return (
    <div className="relative w-full overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4 sm:py-6 bg-white font-chillax">
      <div className="relative w-full h-[30vh] sm:h-[35vh] md:h-[40vh] overflow-hidden">
        <img
          src={PromoBanner}
          alt="Cafe interior with wooden tables and chairs"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center p-4 sm:p-8 md:p-12 lg:p-16">
          <div className="bg-green-800 text-white p-4 sm:p-5 md:p-6 max-w-[85%] sm:max-w-sm md:max-w-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
              WHY YOU'LL LOVE US
            </h2>

            <p className="text-xs sm:text-sm mb-1">
              REAL FRUIT. REAL CHOCOLATE. NO SHORTCUTS.
            </p>
            <p className="text-xs sm:text-sm mb-1">
              INSTAGRAMMABLE AESTHETICS WITH RICH FLAVOR.
            </p>
            <p className="text-xs sm:text-sm mb-2 sm:mb-3">
              ADD-ONS LIKE CHOCO CHIPS, CARAMEL SWIRL, AND EVEN A SHOT OF
              ESPRESSO!
            </p>

            <button className="bg-white text-green-800 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 font-medium hover:bg-gray-100">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
