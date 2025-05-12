import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";

const HeroShakes = () => {
  const heroImages = [
    assets.HeroSliderImg1,
    assets.HeroSliderImg2,
    assets.HeroSliderImg3,
    assets.HeroSliderImg4,
    assets.HeroSliderImg5,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="px-2 sm:px-6 md:px-8 lg:px-16 xl:px-32 bg-white">
      {/* Hero Section */}
      <div className="relative h-auto">
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[74vh] overflow-hidden">
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hero image ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Slider dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  index === currentImageIndex
                    ? "bg-white"
                    : "bg-white bg-opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Headline text - responsive sizing */}
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-4 sm:left-6 z-10">
          <h1
            className="text-5xl font-extrabold text-white leading-tight tracking-wide"
            style={{ textShadow: "2px 2px 0 rgba(0,50,50,0.3)" }}
          >
            SIP THE
            <br />
            GOOD LIFE.
          </h1>
        </div>
      </div>

      <div className="w-full h-44 flex justify-center items-center">
        <h1 className="text-center text-7xl max-sm:text-5xl text-white font-bitterRose font-bold text-stroke">
          Sip the thick, chill the thrill <br />
          only at Talab Shakes.
        </h1>
      </div>

      {/* Three promotional sections - stack on mobile, side by side on larger screens */}
      <div className="flex flex-col sm:flex-row mt-3 gap-3">
        {/* First panel */}
        <div className="relative w-full sm:w-1/3 h-48 sm:h-56 md:h-64">
          <img
            src={assets.HeroImg2}
            alt="Coffee being poured"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white text-center leading-tight">
              GREAT
              <br />
              VALUE
              <br />
              DRINKS
            </h2>
          </div>
        </div>

        {/* Second panel */}
        <div className="relative w-full sm:w-1/3 h-48 sm:h-56 md:h-64">
          <img
            src={assets.HeroImg3}
            alt="Dessert with berries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
              SEASONAL
              <br />
              DESSERT
            </h2>
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-green-800 text-white p-1 sm:p-2 rounded">
              <div className="text-xl sm:text-2xl font-bold">3/1</div>
              <div className="text-xs">START!</div>
            </div>
          </div>
        </div>

        {/* Third panel */}
        <div className="relative w-full sm:w-1/3 h-48 sm:h-56 md:h-64">
          <img
            src={assets.HeroImg4}
            alt="Cafe interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              SOLO SPACE
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroShakes;
