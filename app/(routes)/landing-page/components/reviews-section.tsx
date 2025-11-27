"use client";
import { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import ReviewItem from "./review-item";
import { allReviews } from "@/app/helpers/data";
import { motion } from "framer-motion";

interface ReviewsSectionProps {}

const ReviewsSection: React.FC<ReviewsSectionProps> = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl flex flex-col py-10 sm:py-16 md:py-20 mx-auto px-4">
        <motion.div
          className="text-black text-2xl sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Çifte të mrekullueshme, meritojnë
          <br /> film madhështorë dasmëje.
        </motion.div>
        <br />
        <motion.div
          className="text-black text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Shfleto disa nga <b>700+ Dasmat</b> që kemi realizuar,
          <br className="hidden sm:block"></br> ku secila tregon punën tonë dhe
          dashurinë e qiftit.<br></br>
          <br></br>
          <br></br>
        </motion.div>
        <motion.div
          className="w-full overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Swiper
            modules={[FreeMode]}
            freeMode={true}
            spaceBetween={20}
            slidesPerView="auto"
            className="!pb-10"
            style={{ width: "100%", overflow: "visible" }}
            breakpoints={{
              0: {
                spaceBetween: 15,
              },
              640: {
                spaceBetween: 20,
              },
              768: {
                spaceBetween: 25,
              },
              1024: {
                spaceBetween: 30,
              },
            }}
          >
            {allReviews.map((review, index) => (
              <SwiperSlide
                key={index}
                style={{ width: "calc(100vw - 2rem)", maxWidth: "600px" }}
                className="!w-[calc(100vw-2rem)] sm:!w-[500px] md:!w-[600px]"
              >
                <ReviewItem
                  image={review.image}
                  date={review.date}
                  groomName={review.groomName}
                  brideName={review.brideName}
                  location={review.location}
                  review={review.review}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewsSection;
