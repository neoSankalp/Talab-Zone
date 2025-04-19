import React from "react";

export default function Aboutus() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-black text-white">
      {/* Left Section with Hero Image and Overlay Content */}
      <div className="w-full md:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"></div>
        <div className="absolute top-5 left-5 z-20">
          <h2 className="text-2xl font-semibold text-gray-200">Talab Zone</h2>
        </div>

        <div className="absolute top-1/3 left-0 right-0 px-8 z-20">
          <p className="text-lg md:text-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>

          <p className="text-xl italic font-light">September 19, 2022</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">Special Offer</h1>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
          <div className="bg-white/90 rounded-full flex text-black px-2">
            <button className="px-4 py-2 flex items-center">
              <span className="w-4 h-4 mr-2 rounded-full border border-gray-700"></span>
              Hookah
            </button>
            <button className="px-4 py-2">About us</button>
            <button className="px-4 py-2 mx-1 bg-black text-white rounded-full">
              SHAKES
            </button>
            <button className="px-4 py-2">VIP CARDS</button>
          </div>
        </div>

        <img
          src="/api/placeholder/800/800"
          alt="Lounge interior with stylish lighting"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-1/2 px-8 py-12 flex flex-col">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Lorem ipsum dolor</h2>
          <p className="text-gray-300 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
            malesuada nunc vel risus commodo viverra maecenas. Dis parturient
            montes nascetur ridiculus mus mauris vitae ultricies. Placerat duis
            ultricies lacus sed turpis. Vel elit scelerisque mauris pellentesque
            pulvinar pellentesque habitant morbi tristique. Turpis massa sed
            elementum tempus egestas sed sed risus.
          </p>
        </div>

        <div className="mb-12">
          <img
            src="/api/placeholder/600/300"
            alt="Bar interior with bottles display"
            className="w-full h-64 object-cover mb-8"
          />

          <h2 className="text-3xl font-bold mb-4">Lorem ipsum dolor</h2>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
            malesuada nunc vel risus commodo viverra maecenas. Dis parturient
            montes nascetur ridiculus mus mauris vitae ultricies. Placerat duis
            ultricies lacus sed turpis. Vel elit scelerisque mauris pellentesque
            pulvinar pellentesque habitant morbi tristique. Turpis massa sed
            elementum tempus egestas sed sed risus.
          </p>

          <p className="text-gray-300 mb-6">
            Velit ut tortor pretium viverra. Vivamus arcu felis bibendum ut.
            Quis enim lobortis scelerisque fermentum dui faucibus in ornare.
            Fusce ut placerat orci nulla pellentesque dignissim enim.
          </p>

          <p className="text-gray-300">
            Congue eu consequat ac felis donec et. Feugiat vivamus at augue eget
            arcu dictum. Scelerisque felis imperdiet proin fermentum leo vel
            orci. Auctor urna nunc id cursus metus aliquam eleifend mi.
            Facilisis mauris sit amet massa vitae tortor condimentum lacinia.
            Eget arcu dictum varius duis at consectetur lorem. Magna eget est
            lorem ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
