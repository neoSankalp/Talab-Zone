import React from "react";

const Home = () => {
  return (
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
  );
};

export default Home;
