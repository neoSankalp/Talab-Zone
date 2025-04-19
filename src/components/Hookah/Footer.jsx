import { useState } from "react";
import footerImg from "../../assets/footerImg.png";

export default function Footer() {
  return (
    <div className="bg-black relative min-h-screen text-white font-chillax">
      {/* backdrop images */}
      <div className="absolute w-full h-full z-1">
        <div className=" w-full h-[80%]">
          <div className=" right-0 top-0 w-full h-full flex justify-end">
            <img
              src={footerImg}
              alt="Hookah with colorful smoke"
              className="object-contain h-full"
            />
          </div>
        </div>
      </div>
      <div className="container relative mx-auto px-4 py-8 z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="max-w-xl mb-8 md:mb-0">
            <h1 className="text-6xl font-extrabold mb-4 text-color1">
              Talab Zone
            </h1>
            <p className="text-lg mb-8">
              Step in, sit back, and let the clouds carry you.
            </p>
            <a href="#">
              <button className="squishy squishy-candy text-black text-base font-chillax px-6 py-2 max-sm:px-3 max-sm:py-1 max-sm:text-xs">
                BOOK A TABLE
              </button>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-b border-gray-700 z-10">
          {/* Product Column */}
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Landing Page</li>
              <li>Popup Builder</li>
              <li>Web-design</li>
              <li>Content</li>
              <li>Integrations</li>
            </ul>
          </div>

          {/* Use Cases Column */}
          <div>
            <h3 className="font-medium mb-4">Use Cases</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Web-designers</li>
              <li>Marketers</li>
              <li>Small Business</li>
              <li>Website Builder</li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Academy</li>
              <li>Blog</li>
              <li>Themes</li>
              <li>Hosting</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <div>
            <p>© 2025 Talab Zone. All rights reserved.</p>
          </div>

          <div className="flex mt-8 md:mt-0 space-x-4">
            <a href="#">
              <button className="squishy squishy-candy text-black text-base font-chillax px-6 py-2 max-sm:px-3 max-sm:py-1 max-sm:text-xs">
                VIP Cards
              </button>
            </a>
            <a href="#">
              <button className="squishy squishy-candy text-black text-base font-chillax px-6 py-2 max-sm:px-3 max-sm:py-1 max-sm:text-xs">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
