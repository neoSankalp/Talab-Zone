import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-full py-5  h-auto min-h-screen bg-[url('./assets/bg.png')]">
      <Navbar />
      <div className="text-center mt-32">
        <h2 className="text-color1 text-5xl font-bitterRose">
          The pure taste of
        </h2>
        <h1
          className="subhead leading-none z-10 text-[10rem] font-extrabold text-white
               font-chillax"
        >
          Hookah
        </h1>
        <p className="font-chillax text-white">
          Step into a world where flavor dances with rhythm, music sets the{" "}
          <br />
          tone, and mellow vibes wrap around you like a velvet night.
        </p>
        <div className="mt-16">
          <a href="#">
            <button class="squishy squishy-candy text-black text-xl font-chillax px-6 py-2">
              Experience
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
