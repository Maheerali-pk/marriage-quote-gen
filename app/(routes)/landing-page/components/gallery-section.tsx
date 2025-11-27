"use client";
import { motion } from "framer-motion";

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
      </div>
      <motion.div
        className="w-full overflow-x-auto overflow-y-visible"
        style={{ overflowX: "auto", overflowY: "visible" }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="w-[200vw]" style={{ width: "200vw" }}>
          <img
            src="/images/lp/gallery.png"
            alt="gallery"
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default GallerySection;
