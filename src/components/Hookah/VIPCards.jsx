import React from "react";
import VIPImg from "../../assets/vipImg.png";
import VIPImg1 from "../../assets/vipImg1.jpg";
import VIPImg2 from "../../assets/vipImg2.jpg";
import VIPImg3 from "../../assets/vipImg3.jpg";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

const VIPCards = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <motion.div
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('${VIPImg}')`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <motion.div
          className="relative z-10 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-2xl mb-10 font-light text-gray-300 font-chillax">
            Talab Zone
          </h2>
          <motion.p
            className="text-color1 text-5xl font-bitterRose"
            animate={{
              textShadow: [
                "0px 0px 0px rgba(255,255,255,0)",
                "0px 0px 10px rgba(255,255,255,0.8)",
                "0px 0px 0px rgba(255,255,255,0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            Cards
          </motion.p>
          <h1 className="text-4xl md:text-6xl font-chillax">Feel Premium</h1>
        </motion.div>
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-32 max-sm:gap-10 py-32 px-8 max-sm:px-1">
        {[
          {
            title: "SIGNATURE AMBIENCE",
            img: VIPImg1,
            glow: "shadow-[0_0_40px_#ff9100]",
          },
          {
            title: "PRIVATE LOUNGE ZONES",
            img: VIPImg2,
            glow: "shadow-[0_0_40px_#c000ff]",
          },
          {
            title: "CURATED HOOKAH FLAVORS",
            img: VIPImg3,
            glow: "shadow-[0_0_40px_#ffbf00]",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className={`relative rounded-xl w-[20rem] h-[25rem] max-sm:w-[10rem] max-sm:h-[15rem] overflow-hidden ${card.glow} font-Roboto`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 1 }}
            transition={{
              duration: 0.2,
              y: { duration: 0.5, delay: index * 0.2 },
              opacity: { duration: 0.5, delay: index * 0.2 },
              scale: { type: "spring", stiffness: 300, duration: 0.2 },
            }}
            viewport={{ once: true }}
          >
            <motion.img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute bottom-0 p-4 max-sm:p-1 max-sm:pb-5 w-full">
              <motion.h3
                className={`text-6xl max-sm:text-3xl text-white font-bitterRose font-bold mb-2`}
                style={{
                  WebkitTextStroke: `.1px ${
                    card.glow.match(/#[0-9a-f]{6}|#[0-9a-f]{3}/i)?.[0] ||
                    "#000000"
                  }`,
                  textShadow: `
                    0 0 1px ${
                      card.glow.match(/#[0-9a-f]{6}|#[0-9a-f]{3}/i)?.[0] ||
                      "#000000"
                    },
                    0 0 1px ${
                      card.glow.match(/#[0-9a-f]{6}|#[0-9a-f]{3}/i)?.[0] ||
                      "#000000"
                    }
                  `,
                }}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {card.title}
              </motion.h3>
              <motion.a href="#">
                <button className="squishy squishy-candy text-black text-base font-chillax px-6 py-2 max-sm:px-3 max-sm:py-1 max-sm:text-xs">
                  KNOW MORE <Send className="w-5 h-5 inline ml-1" />
                </button>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VIPCards;
