import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);
  const navIndicator = useRef(null);
  const tabElements = useRef([]);

  const tabs = [
    { text: "Hookah", sectionId: "hero" },
    { text: "About us", sectionId: "about-us" },
    { text: "SHAKES" },
    { text: "VIP CARDS", sectionId: "vip-cards" },
  ];

  // Initialize refs array
  useEffect(() => {
    tabElements.current = tabElements.current.slice(0, tabs.length);

    // Initial positioning after a short delay
    setTimeout(() => {
      if (tabElements.current[0] && navIndicator.current) {
        moveIndicator(0);
        setInitialLoad(false);
      }
    }, 100);
  }, [tabs.length]);

  // Direct DOM manipulation for immediate visual feedback
  const moveIndicator = (index) => {
    const tab = tabElements.current[index];
    if (tab && navIndicator.current) {
      navIndicator.current.style.width = `${tab.offsetWidth}px`;
      navIndicator.current.style.left = `${tab.offsetLeft}px`;
    }
  };

  useEffect(() => {
    // Handle window resize only
    const handleResize = () => {
      moveIndicator(activeTab);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeTab]);

  const scrollToSection = (sectionId, index) => {
    // Move the indicator and update state
    moveIndicator(index);
    setActiveTab(index);

    // Scroll to section
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center items-center w-full z-50 navbar-slide-down">
      <div className="text-center mt-5">
        <h1 className="font-chillax text-white text-2xl">Talab Zone</h1>
        <div className="font-chillax w-full max-w-[30rem] px-2 max-sm:max-w-[25rem] mx-auto relative top-2 flex bg-white rounded-full shadow-lg border border-white/10">
          <div className="flex justify-center items-center w-full h-16 max-sm:h-9">
            {tabs.map((tab, index) => (
              <div
                key={index}
                ref={(el) => (tabElements.current[index] = el)}
                className={`tab-element z-10 flex items-center justify-center h-10 mx-2 px-4 max-sm:px-2 max-sm:mx-0 rounded-full cursor-pointer transition-colors duration-300 max-sm:text-sm ${
                  activeTab === index
                    ? "text-white"
                    : "text-black hover:text-gray-500"
                }`}
                onClick={() => scrollToSection(tab.sectionId, index)}
              >
                <span className="font-normal whitespace-nowrap">
                  {tab.text}
                </span>
              </div>
            ))}
          </div>
          <div
            ref={navIndicator}
            className="absolute top-2 max-sm:top-1 bg-black backdrop-blur-md shadow-md border border-white/20 rounded-full transition-all duration-300"
            style={{
              height: "75%",
              transitionTimingFunction: "cubic-bezier(0.57, -0.01, 0.21, 0.89)",
            }}
          />
        </div>
      </div>
      <style jsx>{`
        .navbar-slide-down {
          animation: slideDown 0.6s ease-out forwards;
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100px);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
