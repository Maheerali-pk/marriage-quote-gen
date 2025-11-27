"use client";
import { motion } from "framer-motion";

interface FooterSectionProps {}

const FooterSection: React.FC<FooterSectionProps> = () => {
  return (
    <div className="flex flex-col w-full  mt-20 sm:mt-32 md:mt-40 relative">
      <div className="bg-[linear-gradient(to_top,black_0%,transparent_100%)] w-full h-full absolute top-0 left-0"></div>

      <div className="w-full sm:w-5/6 md:w-3/4 lg:w-1/2 mx-auto mb-20 sm:mb-32 md:mb-40 flex flex-col gap-6 sm:gap-8 md:gap-10 px-4 z-10">
        <motion.div
          className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex w-full justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Dhe si perfundim...
        </motion.div>
        <motion.div
          className="text-black text-lg sm:text-xl md:text-2xl flex w-full justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-left flex justify-left">
            ju pranoni momentet tuaja te<br></br> paketuara në mënyrë Premium...{" "}
          </div>
        </motion.div>
      </div>
      <motion.div
        className="relative z-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src="/images/lp/footer.png"
          className="max-w-7xl mx-auto h-auto z-20 w-full px-4"
        />
      </motion.div>
      <div className="bg-[linear-gradient(to_top,#29272A_0%,#29272a5a_100%)] w-full h-[60%] absolute bottom-0 left-0"></div>
    </div>
  );
};

export default FooterSection;
