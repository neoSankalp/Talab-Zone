import React from "react";
import { assets } from "../../assets/assets";

const WeddingHookahBanner = () => {
  return (
    <div className="relative max-sm:h-[65vh] rounded-3xl w-full h-screen overflow-hidden">
      {/* Desktop Image */}
      <img
        src={assets.weddingHookah}
        alt="Wedding Background"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      />

      {/* Mobile Image */}
      <img
        src={assets.weddingHookahMobile}
        alt="Wedding Background Mobile"
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-yellow-400 px-4">
        <h1 className="text-4xl font-chillax md:text-7xl font-bold mb-6">
          Hookah for
          <br />
          Weddings & Events
        </h1>
        <div className="mt-16">
          <a href="#">
            <button class="squishy squishy-candy text-black text-xl max-sm:text-lg font-chillax px-6 py-2">
              Book Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WeddingHookahBanner;
