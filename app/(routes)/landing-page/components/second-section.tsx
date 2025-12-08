"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

interface SecondSectionProps {}

const SecondSection: React.FC<SecondSectionProps> = () => {
  return (
    <div className="h-full w-full flex flex-col bg-black pt-10 sm:pt-16 md:pt-20">
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="flex flex-col mx-auto w-full gap-6 sm:gap-8 md:gap-10">
          <motion.div
            className="flex w-full justify-start text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            10 VITE PUNË
          </motion.div>

          <motion.div
            className="flex w-full justify-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            700+ DASMA <br /> TË REALIZUARA
          </motion.div>

          <motion.div
            className="flex w-full justify-end text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            VIRALITET <br /> WORLD-WIDE
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col items-center mt-20 sm:mt-32 md:mt-40"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-white text-center text-xl sm:text-2xl md:text-3xl">
            WELCOME TO
          </div>
          <img
            src="/images/logo.png"
            className="h-32 sm:h-40 md:h-52 lg:h-60"
          ></img>
        </motion.div>
        {/* Mobile Swiper - only visible on mobile */}
        <motion.div
          className="block sm:hidden mt-4 overflow-hidden px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[FreeMode]}
            freeMode={true}
            spaceBetween={0}
            slidesPerView="auto"
            className="!pb-4"
          >
            <SwiperSlide style={{ width: "150vw" }} className="!w-[150vw]">
              <img
                src={"/images/lp/reels-list.png"}
                alt="reels list"
                className="w-full h-auto"
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>

        {/* Desktop Image - hidden on mobile */}
        <motion.img
          src={"/images/lp/reels-list.png"}
          className="hidden sm:block w-full h-auto mt-4 sm:mt-6 md:mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        ></motion.img>
        <motion.div
          className="text-white  text-left sm:text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-auto mt-20 sm:mt-32 md:mt-40 w-full sm:w-5/6 md:w-2/3 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Puna ynë flet vetë, por nëse është hera e parë që po lexon për ZOOM
          Production, ja qfarë duhët të dini:
        </motion.div>
        <motion.div
          className="text-white text-left sm:text-center text-base sm:text-lg mt-10 sm:mt-16 md:mt-20  w-full sm:w-5/6 md:w-3/4 lg:w-1/2 mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ZOOM Production ofëron sherbime premium të xhirimit dhe fotografimit
          të momenteve tuaja më të veqanta te dasmes apo ahnegut tuaj.
          <br></br>
          <br></br>
          Eksperienca yne 10+ vjeqare na lejon që dasmat dhe ahengjet ti shohim
          nga një këndveshtrim unik, por kjo nukë është e mjaftueshme...
          <br></br>
          <br></br>
          Sepse, pa një ekipë të profesionalizuar dhe unike për ZOOM Production,
          ky këndveshtrim nuk mund të kthehet në realitet.
        </motion.div>
        <motion.div
          className="flex justify-center mt-10 sm:mt-16 md:mt-20 w-full sm:w-5/6 md:w-3/4 lg:w-1/2 mx-auto px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img src={"/images/lp/sign2.png"} className="w-full h-auto"></img>
        </motion.div>
        <motion.div
          className="w-full sm:w-5/6 md:w-3/4 lg:w-1/2 text-white flex justify-end mx-auto mt-6 sm:mt-8 md:mt-10 mb-20 sm:mb-32 md:mb-40 px-4 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Letter from our Founder, Arlind Berisha
        </motion.div>
      </div>
      <motion.img
        src={"/images/lp/divider.png"}
        className="w-full h-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      ></motion.img>
    </div>
  );
};

export default SecondSection;
