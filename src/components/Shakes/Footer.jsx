import React from "react";
import shakeFooterImg from "../../assets/shakeFooterImg.png";

export default function ShakesFooter() {
  return (
    <div className="bg-white pt-32 font-chillax">
      <div className="bg-green-800 w-full py-10 px-8 relative overflow-hidden">
        <div className="flex justify-between items-start max-w-6xl mx-auto">
          <div className="text-white">
            <h1 className="text-7xl font-bold mb-2">Talab Zone</h1>
            <p className="uppercase text-lg mb-4">
              WALK IN, CHILL, SIP OR GET YOUR SHAKE DELIVERED CHILLED & FRESH.
            </p>

            <div className="flex items-center mb-6 text-sm">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>WASHINGTON SQUARE, NEW YORK, NY 10012, UNITED STATES</span>
            </div>

            <div className="flex gap-8 mt-4">
              <button className="bg-white text-green-800 py-2 px-6 font-medium text-sm">
                MAP
              </button>
              <button className="bg-white text-green-800 py-2 px-6 font-medium text-sm">
                VISIT US
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="">
              <img
                src={shakeFooterImg}
                alt=""
                className="w-32 h-56 object-contain -rotate-[20deg]"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <nav className="text-white flex justify-center gap-6 text-sm">
            <a href="#" className="hover:underline">
              HOME
            </a>
            <a href="#" className="hover:underline">
              MEDIA
            </a>
            <a href="#" className="hover:underline">
              NEWS
            </a>
            <a href="#" className="hover:underline">
              RESERVATION
            </a>
            <a href="#" className="hover:underline">
              SITE MAP
            </a>
            <a href="#" className="hover:underline">
              PRIVACY POLICY
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
