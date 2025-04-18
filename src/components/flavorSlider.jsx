import React from "react";

export default function FlavorSlider() {
  const carouselItemsData = [
    {
      title: "Blue Mist",
      num: "01",
      image: "/src/assets/hookahFlavor3.jpg",
      class: "cardTitle1",
    },
    {
      title: "Kiwi Fusion",
      num: "02",
      image: "/src/assets/hookahFlavor4.jpg",
      class: "cardTitle2",
    },
    {
      title: "Minty Grape Crush",
      num: "03",
      image: "/src/assets/hookahFlavor2.jpg",
      class: "cardTitle3",
    },
    {
      title: "Tropical Thunder",
      num: "04",
      image: "/src/assets/hookahFlavor5.png",
      class: "cardTitle4",
    },
    {
      title: "Lemon Chill",
      num: "05",
      image: "/src/assets/hookahFlavor1.jpeg",
      class: "cardTitle5",
    },
  ];

  return (
    <div className="bg-black w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex font-chillax justify-center flex-wrap gap-10">
          {carouselItemsData.map((item) => (
            <div
              key={item.num}
              className="relative w-[12rem] max-sm:w-[10rem] overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="absolute top-2 left-2">
                <span className="text-white opacity-75 text-5xl font-medium">
                  {item.num}
                </span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3
                    className={`cardTitle ${item.class} text-white font-KaushanScript text-[2rem] font-bold text-center px-2`}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
