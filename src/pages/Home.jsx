import React from "react";
import FlavorSlider from "../components/flavorSlider";

const Home = () => {
  return (
    <div>
      {/* ================== HERO SECTION ================ */}
      <div className="w-full py-5  h-auto min-h-screen bg-[url('./assets/bg.png')] bg-cover bg-no-repeat bg-center">
        <div className="text-center mt-48">
          <h2 className="text-color1 text-5xl font-bitterRose">
            The pure taste of
          </h2>
          <h1
            className="subhead leading-none z-10 text-[10rem] font-extrabold text-white
               font-chillax max-md:text-[7rem] max-sm:text-[6rem]"
          >
            Hookah
          </h1>
          <p className="font-chillax text-white w-[35%] max-lg:w-[50%] max-md:w-[70%] relative left-[50%] -translate-x-[50%]">
            Step into a world where flavor dances with rhythm, music sets the{" "}
            tone, and mellow vibes wrap around you like a velvet night.
          </p>
          <div className="mt-16">
            <a href="#">
              <button class="squishy squishy-candy text-black text-xl max-sm:text-lg font-chillax px-6 py-2">
                Experience
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* ================== FLAVORS SECTION ================ */}
      <div>
        <h3 className="text-white text-center leading-relaxed font-merienda text-3xl">
          you have big plans... <br /> we have hookah plans.
        </h3>
        <div className="py-10">
          <FlavorSlider />
        </div>
        <h3 className="text-white text-center leading-relaxed w-[70%] relative left-[50%] -translate-x-[50%] font-merienda text-2xl max-sm:text-base">
          From rich double apple to icy mint fusions and tropical explosions,
          our hookah menu is curated to elevate your senses. Crafted using
          top-tier equipment and handled by professionals who know the art of a
          perfect pull.
        </h3>
      </div>
    </div>
  );
};

export default Home;
