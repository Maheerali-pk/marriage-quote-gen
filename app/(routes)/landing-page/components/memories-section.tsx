"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
export function MemoriesSection() {
  const router = useRouter();
  return (
    <div className="gap-10 overflow-hidden relative">
      <div className="flex flex-col max-w-7xl mx-auto w-full px-4 ">
        <div className="sm:ml-40 flex flex-col gap-4">
          <h2 className="text-3xl sm:text-5xl  ">Dhe si perfundim...</h2>
          <div className="flex flex-col sm:ml-[20rem]">
            <div className="text-xl">ju pranoni momentet tuaja te</div>
            <div className="text-xl">paketuara në mënyrë Premium...</div>
          </div>
        </div>
      </div>
      <div
        // style={{ transform: "translateX(-10vw)" }}
        className="w-screen relative  overflow-visible translate-y-[3rem] -translate-x-[2rem] sm:-translate-x-[3vw]"
      >
        <img
          src="/images/lp/memories/main-bg.png"
          className="w-[calc(100vw+4rem)] sm:w-[calc(106vw)] max-w-none"
          alt="Memories"
        />
        <div className="flex  absolute top-0   sm:right-[10rem] right-0 gap-10   ">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#aa8800] sm:p-4 p-2 h-fit  text-white flex-col rounded-2xl  overflow-hidden max-w-[20rem] sm:max-w-[30rem] gap-2 items-center shadow-[0_25px_80px_rgba(0,0,0,0.5),0_15px_40px_rgba(170,136,0,0.3),0_0_0_2px_rgba(255,255,255,0.1)]"
          >
            <div className="sm:text-5xl text-lg font-bold text-center">
              PAKO PREMIUM
            </div>
            <div className="sm:text-lg text-xs text-center">
              Ruaj kujtimet tua me shekuj me pakon tone te sigurt dhe moderne
            </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            src="/images/lp/memories/arrow3.png"
            className="sm:block hidden w-[13rem] h-auto  translate-y-[20%]"
            alt="Arrow"
          />
        </div>

        <div className="flex flex-col absolute sm:bottom-0  bottom-8 -translate-y-1/2 sm:right-[2rem] -right-2 gap-10   ">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="bg-[#aa8800] sm:p-4 p-2    text-white flex-col rounded-2xl  overflow-hidden sm:max-w-[18rem] max-w-[14rem] gap-2 items-center shadow-[0_25px_80px_rgba(0,0,0,0.5),0_15px_40px_rgba(170,136,0,0.3),0_0_0_2px_rgba(255,255,255,0.1)]"
          >
            <div className="sm:text-3xl text-lg font-bold text-center">
              PAKO PREMIUM
            </div>
            <div className="text-xs sm:text-sm text-center">
              Ruaj kujtimet tua me shekuj me pakon tone te sigurt dhe moderne
            </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            src="/images/lp/memories/arrow2.png"
            className="sm:block hidden w-[18rem] h-auto -translate-x-[40%]"
            alt="Arrow"
          />
        </div>

        <div className="flex flex-col absolute top-1/3 sm:top-1/2  sm:left-[10rem] left-12 gap-4   ">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="bg-[#aa8800] sm:p-4 p-2    text-white flex-col rounded-2xl  overflow-hidden sm:max-w-[18rem] max-w-[12rem] sm:max-w-[14rem] gap-2 items-center shadow-[0_25px_80px_rgba(0,0,0,0.5),0_15px_40px_rgba(170,136,0,0.3),0_0_0_2px_rgba(255,255,255,0.1)]"
          >
            <div className="sm:text-3xl text-lg font-bold text-center">
              1TB SECURE DISK
            </div>
            <div className="text-xs sm:text-sm text-center">
              Qe kujtimet e tuaja te ruhen sigurt, kemi 1TB HDD
            </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            src="/images/lp/memories/arrow1.png"
            className="sm:block hidden w-[13rem] h-auto translate-x-[calc(100%-5rem)]"
            alt="Arrow"
          />
        </div>
      </div>

      <img
        src="/images/lp/blur-rect.png"
        alt="Memories Background"
        className=" absolute top-full -translate-y-[1.5rem]   sm:-translate-y-[10rem]"
      ></img>
    </div>
  );
}
