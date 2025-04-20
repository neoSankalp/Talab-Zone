import React from "react";
import { motion } from "framer-motion";
import hookahFlavor2Img from "../../assets/hookahFlavor2.jpg";
import hookahFlavor5Img from "../../assets/hookahFlavor5.png";
import hookahFlavor4Img from "../../assets/hookahFlavor4.jpg";
import hookahFlavor3Img from "../../assets/hookahFlavor3.jpg";
import hookahFlavor1Img from "../../assets/hookahFlavor1.jpeg";

export default function FlavorSlider() {
  const carouselItemsData = [
    {
      title: "Blue Mist",
      num: "01",
      image: hookahFlavor3Img,
      class: "cardTitle1",
    },
    {
      title: "Kiwi Fusion",
      num: "02",
      image: hookahFlavor4Img,
      class: "cardTitle2",
    },
    {
      title: "Minty Grape Crush",
      num: "03",
      image: hookahFlavor2Img,
      class: "cardTitle3",
    },
    {
      title: "Tropical Thunder",
      num: "04",
      image: hookahFlavor5Img,
      class: "cardTitle4",
    },
    {
      title: "Lemon Chill",
      num: "05",
      image: hookahFlavor1Img,
      class: "cardTitle5",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-black w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="flex font-chillax justify-center flex-wrap gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {carouselItemsData.map((item, index) => (
            <motion.div
              key={item.num}
              className="relative w-[12rem] max-sm:w-[10rem] overflow-hidden rounded-lg group cursor-pointer"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-64 md:h-72 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute top-2 left-2">
                <motion.span
                  className="text-white opacity-75 text-5xl font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 0.75, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {item.num}
                </motion.span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <h3
                    className={`cardTitle ${item.class} text-white font-KaushanScript text-[2rem] font-bold text-center px-2`}
                  >
                    {item.title}
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
