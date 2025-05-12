import React from "react";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";

export default function Aboutus() {
  return (
    <motion.div
      className="flex flex-col md:flex-row w-full min-h-screen bg-black text-white my-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="aboutus"
    >
      <motion.div
        className="w-full md:w-1/2 relative text-center"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"></div>
        <motion.div className="absolute top-5 left-1/2 -translate-x-1/2 z-20">
          <h2 className="text-2xl font-semibold text-gray-200 font-chillax">
            Talab Zone
          </h2>
        </motion.div>

        <motion.div
          className="absolute top-1/3 left-0 right-0 px-8 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.p
            className="text-lg md:text-xl mb-8 font-CabinetGrotesk"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Where every puff tells a story.
            <br /> Step in, sit back, and let the clouds carry you.
          </motion.p>

          <motion.p
            className="text-5xl italic font-light font-bitterRose text-color1"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            September 19, 2025
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-chillax font-bold mt-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Special Offer
          </motion.h1>
        </motion.div>

        <motion.img
          src={assets.AboutImg}
          alt="Lounge interior with stylish lighting"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 px-8 py-4 flex flex-col font-chillax"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          className="mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Where Smoke Meets Soul
          </motion.h2>
          <motion.p
            className="text-gray-300 mb-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At Talab Zone, we don't just serve hookah – we create experiences.
            From the moment you walk in, you're greeted with smooth beats, warm
            lighting, and a vibe that instantly feels like home. Whether you're
            flying solo, catching up with friends, or making memories that
            matter, our lounge is designed to elevate your chill to a whole new
            level.
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={assets.AboutImg2}
            alt="Bar interior with bottles display"
            className="w-full h-64 object-cover mb-8"
            initial={{ scale: 1.05, opacity: 0.8 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Talab Zone – Puff. Chill. Repeat.
          </motion.h2>
          <motion.p
            className="text-gray-300 mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our carefully curated menu features a wide range of premium hookah
            flavors, exotic fusions, and signature mixes you won't find anywhere
            else. Paired with handcrafted mocktails, coffee blends, and savory
            snacks, every session at Talab Zone is a full-on sensory escape.
            We're big on quality, ambiance, and making sure your time here feels
            effortless and unforgettable.
          </motion.p>

          <motion.p
            className="text-gray-300 mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            More than just a hookah lounge, Talab Zone is a growing culture of
            comfort, creativity, and connection. With weekly live music, themed
            nights, and a crowd that knows how to vibe, there's always something
            happening here. It's not just about what you smoke — it's about who
            you become while you're here.
          </motion.p>

          <motion.p
            className="text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Every corner of Talab Zone is crafted to inspire. From our aesthetic
            interiors to the laid-back seating and ambient lighting, everything
            is built for comfort and conversation. Whether you're unwinding
            after a long day or celebrating something special, our space is your
            sanctuary — a place where the outside world slows down and the good
            vibes take over.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
