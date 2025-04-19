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
    <div className="px-32 py-16 mx-auto bg-white font-chillax">
      {/* Title */}
      <div className="flex justify-center items-center mb-8 w-[30vw]">
        <div className="h-px bg-gray-500 flex-grow"></div>
        <h2 className="text-5xl font-bold font-noto_sans_jp text-teal-700 px-4 tracking-wider text-stroke-custom">
          SHAKES
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
