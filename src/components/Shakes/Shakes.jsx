import React from "react";
import shakesImg1 from "../../assets/shakesImg1.png";
import shakesImg2 from "../../assets/shakesImg2.png";
import shakesImg3 from "../../assets/shakesImg3.png";
import shakesImg4 from "../../assets/shakesImg4.png";

export default function ShakesPanel() {
  const shakes = [
    {
      id: 1,
      name: "NUTELLA OVERLOAD",
      description:
        "OUR HOMEMADE BREAD, WHICH HAS BEEN PRAISED BY THE PRESIDENT",
      price: "₹199",
      image: shakesImg1,
    },
    {
      id: 2,
      name: "NUTELLA OVERLOAD",
      description:
        "OUR HOMEMADE BREAD, WHICH HAS BEEN PRAISED BY THE PRESIDENT",
      price: "₹299",
      image: shakesImg2,
    },
    {
      id: 3,
      name: "NUTELLA OVERLOAD",
      description:
        "OUR HOMEMADE BREAD, WHICH HAS BEEN PRAISED BY THE PRESIDENT",
      price: "₹399",
      image: shakesImg3,
    },
    {
      id: 4,
      name: "NUTELLA OVERLOAD",
      description:
        "OUR HOMEMADE BREAD, WHICH HAS BEEN PRAISED BY THE PRESIDENT",
      price: "₹499",
      image: shakesImg4,
    },
  ];

  return (
    <div
      id="shakes"
      className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-16 mx-auto bg-white font-chillax"
    >
      {/* Title - Small screens: centered with lines on both sides, Large screens: original left-aligned style */}
      <div className="flex items-center mb-6 sm:mb-8">
        {/* Small screens title (hidden on lg+ screens) */}
        <div className="flex w-full items-center lg:hidden">
          <div className="h-px bg-gray-500 flex-grow"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-noto_sans_jp text-teal-700 px-2 sm:px-4 tracking-wider text-stroke-custom">
            SHAKES
          </h2>
          <div className="h-px bg-gray-500 flex-grow"></div>
        </div>

        {/* Large screens title (hidden on smaller screens) - matches your original style */}
        <div className="hidden lg:flex justify-start items-center w-[30vw]">
          <div className="h-px bg-gray-500 flex-grow"></div>
          <h2 className="text-5xl font-bold font-noto_sans_jp text-teal-700 px-4 tracking-wider text-stroke-custom">
            SHAKES
          </h2>
        </div>
      </div>

      {/* Menu Grid - Updated to show 2 cards per row on small devices */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {shakes.map((shake) => (
          <div key={shake.id} className="flex flex-col group">
            <div className="mb-2 h-32 sm:h-40 md:h-48 overflow-hidden rounded shadow-sm hover:shadow transition-shadow duration-300">
              <img
                src={shake.image}
                alt={shake.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-1 sm:mt-2">
              <h3 className="font-bold text-xs sm:text-sm md:text-base">
                {shake.name}
              </h3>
              <p className="text-xs mt-1 leading-tight text-gray-700 line-clamp-2">
                {shake.description}
              </p>
              <p className="font-bold mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
                {shake.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
