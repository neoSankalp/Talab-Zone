import React from "react";
import PromoBanner from "../../assets/PromoBanner.png";

export default function CafePromoBanner() {
  return (
    <div className="relative w-full overflow-hidden px-32 bg-white font-chillax">
      <div className="relative w-full h-[40vh] overflow-hidden">
        <img
          src={PromoBanner}
          alt="Cafe interior with wooden tables and chairs"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center p-16">
          <div className="bg-green-800 text-white p-6 max-w-md">
            <h2 className="text-4xl font-bold mb-4">WHY YOU'LL LOVE US</h2>

            <p className="text-sm mb-1">
              REAL FRUIT. REAL CHOCOLATE. NO SHORTCUTS.
            </p>
            <p className="text-sm mb-1">
              INSTAGRAMMABLE AESTHETICS WITH RICH FLAVOR.
            </p>
            <p className="text-sm mb-3">
              ADD-ONS LIKE CHOCO CHIPS, CARAMEL SWIRL, AND EVEN A SHOT OF
              ESPRESSO!
            </p>

            <button className="bg-white text-green-800 px-4 py-2 font-medium hover:bg-gray-100">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
