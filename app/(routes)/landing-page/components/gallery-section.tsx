"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

interface GallerySectionProps {}

const GallerySection: React.FC<GallerySectionProps> = () => {
  return (
    <div className="w-full bg-white overflow-hidden mt-10 sm:mt-16 md:mt-20">
      <div className="max-w-7xl flex flex-col py-10 sm:py-16 md:py-20 mx-auto px-4">
        <motion.div
          className="text-black text-2xl sm:text-3xl md:text-4xl font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Çifte të lumtura, meritojnë
          <br /> fotografi të përjetëshme.
        </motion.div>
        <br />
        <motion.div
          className="text-black text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Galeria ynë me mbi <b>7.6 Milion Shkrepje</b>, e ketu{" "}
          <br className="hidden sm:block" /> gjeni disa prej tyre...
          <br></br>
          <br></br>
        </motion.div>
        <motion.div
          className="w-full overflow-hidden -mx-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Swiper
            modules={[FreeMode, Autoplay]}
            freeMode={true}
            spaceBetween={0}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={3000}
            className="!pb-10"
            style={{ width: "100%", overflow: "visible" }}
          >
            <SwiperSlide style={{ width: "200vw" }} className="!w-[200vw]">
              <img
                src="/images/lp/gallery.png"
                alt="gallery"
                className="w-full h-auto"
              />
            </SwiperSlide>
            <SwiperSlide style={{ width: "200vw" }} className="!w-[200vw]">
              <img
                src="/images/lp/gallery.png"
                alt="gallery"
                className="w-full h-auto"
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default GallerySection;
