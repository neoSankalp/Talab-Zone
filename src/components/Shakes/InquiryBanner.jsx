import React from "react";
import EnquiryBannerImg from "../../assets/enquiryBannerImg.png";

export default function InquiryBanner() {
  return (
    <div className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4 sm:py-6 md:py-8 bg-white">
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${EnquiryBannerImg})`,
          }}
        ></div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-3 sm:mb-4 md:mb-6 font-bitterRose"
            style={{
              color: "#7fffd4",
              textShadow: "0 0 10px rgba(127, 255, 212, 0.8)",
            }}
          >
            YOUR VIBE OUR SPACE ONE EPIC NIGHT
          </h1>

          <p className="text-white text-center text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 md:mb-4 font-chillax">
            JUST BRING THE CREW—WE'LL HANDLE THE REST.
          </p>

          <p className="text-white text-center text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-5 md:mb-6 font-chillax">
            DM US OR CALL TO BOOK YOUR DATE!
          </p>

          <button className="bg-green-800 hover:bg-green-700 text-white font-medium px-6 sm:px-8 py-2 uppercase text-xs sm:text-sm tracking-wider font-chillax rounded transition-all duration-500">
            INQUIRY
          </button>
        </div>
      </div>
    </div>
  );
}
