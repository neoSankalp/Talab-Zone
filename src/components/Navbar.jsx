import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(0);
  const [followStyle, setFollowStyle] = useState({
    width: 0,
    left: 0,
  });

  const tabs = [
    { text: "Hookah" },
    { text: "About us" },
    { text: "SHAKES" },
    { text: "VIP CARDS" },
  ];

  useEffect(() => {
    const updateFollowStyle = () => {
      const tabElements = document.querySelectorAll(".tab-element");
      if (tabElements[activeTab]) {
        const activeTabElement = tabElements[activeTab];
        setFollowStyle({
          width: activeTabElement.offsetWidth,
          left: activeTabElement.offsetLeft,
        });
      }
    };

    updateFollowStyle();

    window.addEventListener("resize", updateFollowStyle);
    return () => window.removeEventListener("resize", updateFollowStyle);
  }, [activeTab]);

  return (
    <div className="text-center">
      <h1 className="font-chillax text-white text-2xl">Talab Zone</h1>
      <div className="w-full max-w-[30rem] mx-auto relative top-2 flex bg-white/5 rounded-full backdrop-blur-md shadow-lg border border-white/10">
        <div className="flex justify-center items-center w-full h-16">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab-element z-10 flex items-center justify-center h-12 mx-2 px-4 rounded-full cursor-pointer transition-colors duration-300 ${
                activeTab === index
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <span className="font-normal whitespace-nowrap">{tab.text}</span>
            </div>
          ))}
        </div>
        <div
          className="absolute top-2 bg-white/10 backdrop-blur-md shadow-md border border-white/20 rounded-full transition-all duration-500"
          style={{
            height: "75%",
            width: followStyle.width + "px",
            left: followStyle.left + "px",
            transitionTimingFunction: "cubic-bezier(0.57, -0.01, 0.21, 0.89)",
          }}
        />
      </div>
    </div>
  );
}
