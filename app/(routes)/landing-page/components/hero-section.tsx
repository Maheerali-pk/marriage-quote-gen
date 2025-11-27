"use client";
import VideoItem from "@/app/components/video-item";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const router = useRouter();
  return (
    <div
      className="h-auto pb-20 md:pb-0 md:h-screen w-full flex items-center flex-col"
      style={{
        backgroundImage: "url('/images/main-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div>

      <motion.img
        src="/images/logo.png"
        alt="logo"
        className="w-auto mx-auto h-8 sm:h-10 md:h-14 mt-5 sm:mt-8 md:mt-10 mb-5 sm:mb-8 md:mb-10 z-10 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      ></motion.img>
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 z-10 h-full w-full px-4">
        <motion.div
          className="w-full sm:w-[80%] md:w-[60%] lg:w-[35%]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <VideoItem></VideoItem>
        </motion.div>
        <motion.div
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center w-full sm:w-4/5 md:w-2/3 lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Dasma realizohët vetëm njëherë, po me ZOOM Production...
        </motion.div>

        <motion.div
          className="flex flex-col items-center w-full sm:w-4/5 md:w-2/3 lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
            mbahet mend përgjithmonë
          </div>
          <motion.img
            className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto"
            src={"/images/lp/sign.png"}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          ></motion.img>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button
            onClick={() => router.push("/initial")}
            className="btn-secondary w-full sm:w-fit !rounded-full text-sm sm:text-base"
          >
            LEXO MË SHUMË RRETH ZP
          </button>
          <button
            onClick={() => router.push("/initial")}
            className="btn-primary w-full sm:w-fit !rounded-full text-sm sm:text-base"
          >
            REZERVO DATËN TËNDE
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
