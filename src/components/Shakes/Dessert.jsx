import React from "react";
import dessertImg1 from "../../assets/dessertImg1.png";
import dessertImg2 from "../../assets/dessertImg2.png";
import dessertImg3 from "../../assets/dessertImg3.png";
import dessertImg4 from "../../assets/dessertImg4.png";

export default function DessertPanel() {
  const desserts = [
    {
      id: 1,
      name: "CAKE",
      description:
        "OUR HOMEMADE BREAD, WHICH HAS BEEN PRAISED BY THE PRESIDENT",
      price: "₹199",
      image: dessertImg1,
    },
    {
      id: 2,
      name: "CAKE",
      description:
        "OUR HOMEMADE BREAD, WHICH HAS BEEN PRAISED BY THE PRESIDENT",
      price: "₹299",
      image: dessertImg2,
    },
    {
      id: 3,
      name: "CAKE",
      description:
        "OUR HOMEMADE BREAD, WHICH HAS BEEN PRAISED BY THE PRESIDENT",
      price: "₹399",
      image: dessertImg3,
    },
    {
      id: 4,
      name: "CAKE",
      description:
        "OUR HOMEMADE BREAD, WHICH HAS BEEN PRAISED BY THE PRESIDENT",
      price: "₹499",
      image: dessertImg4,
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-16 mx-auto bg-white font-chillax">
      {/* Title - Small screens: centered with lines on both sides, Large screens: original style */}
      <div className="flex items-center mb-6 sm:mb-8">
        {/* Small screens title (hidden on lg+ screens) */}
        <div className="flex w-full items-center lg:hidden">
          <div className="h-px bg-gray-500 flex-grow"></div>
          <h2 className="text-3xl md:text-4xl font-bold font-noto_sans_jp text-teal-700 px-2 sm:px-4 tracking-wider text-stroke-custom">
            DESSERT
          </h2>
          <div className="h-px bg-gray-500 flex-grow"></div>
        </div>

        {/* Large screens title (hidden on smaller screens) */}
        <div className="hidden lg:flex justify-start items-center w-[30vw]">
          <div className="h-px bg-gray-500 flex-grow"></div>
          <h2 className="text-5xl font-bold font-noto_sans_jp text-teal-700 px-4 tracking-wider text-stroke-custom">
            DESSERT
          </h2>
        </div>
      </div>

      {/* Menu Grid - 2 columns on small screens, 4 on large */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {desserts.map((dessert) => (
          <div key={dessert.id} className="flex flex-col group">
            <div className="mb-2 h-32 sm:h-40 md:h-48 overflow-hidden rounded shadow-sm hover:shadow transition-shadow duration-300">
              <img
                src={dessert.image}
                alt={dessert.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-1 sm:mt-2">
              <h3 className="font-bold text-xs sm:text-sm md:text-base">
                {dessert.name}
              </h3>
              <p className="text-xs mt-1 leading-tight text-gray-700 line-clamp-2">
                {dessert.description}
              </p>
              <p className="font-bold mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
                {dessert.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
