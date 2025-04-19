import React from "react";
import AboutImg from "../assets/aboutImg.png";
import AboutImg2 from "../assets/about2Img.png";

export default function Aboutus() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-black text-white my-10">
      <div className="w-full md:w-1/2 relative text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"></div>
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20">
          <h2 className="text-2xl font-semibold text-gray-200 font-chillax">
            Talab Zone
          </h2>
        </div>

        <div className="absolute top-1/3 left-0 right-0 px-8 z-20">
          <p className="text-lg md:text-xl mb-8 font-CabinetGrotesk">
            Where every puff tells a story.
            <br /> Step in, sit back, and let the clouds carry you.
          </p>

          <p className="text-5xl italic font-light font-bitterRose text-color1">
            September 19, 2025
          </p>
          <h1 className="text-4xl md:text-6xl font-chillax font-bold mt-2">
            Special Offer
          </h1>
        </div>

        <img
          src={AboutImg}
          alt="Lounge interior with stylish lighting"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 px-8 py-4 flex flex-col font-chillax">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Where Smoke Meets Soul</h2>
          <p className="text-gray-300 mb-2">
            At Talab Zone, we don’t just serve hookah – we create experiences.
            From the moment you walk in, you're greeted with smooth beats, warm
            lighting, and a vibe that instantly feels like home. Whether you’re
            flying solo, catching up with friends, or making memories that
            matter, our lounge is designed to elevate your chill to a whole new
            level.
          </p>
        </div>

        <div className="mb-12">
          <img
            src={AboutImg2}
            alt="Bar interior with bottles display"
            className="w-full h-64 object-cover mb-8"
          />

          <h2 className="text-3xl font-bold mb-4">
            Talab Zone – Puff. Chill. Repeat.
          </h2>
          <p className="text-gray-300 mb-6">
            Our carefully curated menu features a wide range of premium hookah
            flavors, exotic fusions, and signature mixes you won’t find anywhere
            else. Paired with handcrafted mocktails, coffee blends, and savory
            snacks, every session at Talab Zone is a full-on sensory escape.
            We’re big on quality, ambiance, and making sure your time here feels
            effortless and unforgettable.
          </p>

          <p className="text-gray-300 mb-6">
            More than just a hookah lounge, Talab Zone is a growing culture of
            comfort, creativity, and connection. With weekly live music, themed
            nights, and a crowd that knows how to vibe, there’s always something
            happening here. It’s not just about what you smoke — it’s about who
            you become while you're here.
          </p>

          <p className="text-gray-300">
            Every corner of Talab Zone is crafted to inspire. From our aesthetic
            interiors to the laid-back seating and ambient lighting, everything
            is built for comfort and conversation. Whether you're unwinding
            after a long day or celebrating something special, our space is your
            sanctuary — a place where the outside world slows down and the good
            vibes take over.
          </p>
        </div>
      </div>
    </div>
  );
}
