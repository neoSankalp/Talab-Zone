import React, { useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import FlavorSlider from "../components/flavorSlider";
import WeddingHookahBanner from "../components/WeddingHookahPlanner";
import VIPCards from "../components/VIPCards";
import Aboutus from "../components/Aboutus";

const Home = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const heroTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.5 },
    }),
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div>
      {/* ================== HERO SECTION ================ */}
      <div className="w-full py-5 h-auto min-h-screen bg-[url('./assets/bg.png')] bg-cover bg-no-repeat bg-center">
        <div className="text-center mt-48">
          <h2 className="text-color1 text-5xl font-bitterRose">
            The pure taste of
          </h2>
          <h1 className="subhead leading-none z-10 text-[10rem] font-extrabold text-white font-chillax max-md:text-[7rem] max-sm:text-[6rem]">
            Hookah
          </h1>
          <p className="font-chillax text-white w-[35%] max-lg:w-[50%] max-md:w-[70%] relative left-[50%] -translate-x-[50%]">
            Step into a world where flavor dances with rhythm, music sets the{" "}
            tone, and mellow vibes wrap around you like a velvet night.
          </p>
          <div className="mt-16">
            <a href="#">
              <button className="squishy squishy-candy text-black text-xl max-sm:text-lg font-chillax px-6 py-2">
                Experience
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* ================== FLAVORS SECTION ================ */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.h3
          className="text-white text-center leading-relaxed font-merienda text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          you have big plans... <br /> we have hookah plans.
        </motion.h3>
        <motion.div
          className="py-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FlavorSlider />
        </motion.div>
        <motion.h3
          className="text-white text-center leading-relaxed w-[70%] relative left-[50%] -translate-x-[50%] font-merienda text-2xl max-sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          From rich double apple to icy mint fusions and tropical explosions,
          our hookah menu is curated to elevate your senses. Crafted using
          top-tier equipment and handled by professionals who know the art of a
          perfect pull.
        </motion.h3>
      </motion.div>

      {/* ================== WEDDING HOOKAH PLANNER SECTION ================ */}
      <motion.div
        className="p-16 my-16 max-sm:p-1"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <WeddingHookahBanner />
      </motion.div>

      {/* ================== VIP CARDS SECTION ================ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <VIPCards />
      </motion.div>

      {/* ================== ABOUT US SECTION ================ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Aboutus />
      </motion.div>
    </div>
  );
};

export default Home;
