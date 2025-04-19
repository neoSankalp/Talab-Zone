import React from "react";
import dessertImg1 from "../../assets/dessertImg1.png";
import dessertImg2 from "../../assets/dessertImg2.png";
import dessertImg3 from "../../assets/dessertImg3.png";
import dessertImg4 from "../../assets/dessertImg4.png";

export default function DessertPanel() {
  const shakes = [
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
    <div className="px-32 py-16 mx-auto bg-white font-chillax">
      {/* Title */}
      <div className="flex justify-center items-center mb-8 w-[30vw]">
        <div className="h-px bg-gray-500 flex-grow"></div>
        <h2 className="text-5xl font-bold font-noto_sans_jp text-teal-700 px-4 tracking-wider text-stroke-custom">
          DESSERT
        </h2>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {shakes.map((shake) => (
          <div key={shake.id} className="flex flex-col">
            <div className="mb-2 h-48 overflow-hidden">
              <img
                src={shake.image}
                alt={shake.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2">
              <h3 className="font-bold text-sm">{shake.name}</h3>
              <p className="text-xs mt-1 leading-tight">{shake.description}</p>
              <p className="font-bold mt-2">{shake.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
