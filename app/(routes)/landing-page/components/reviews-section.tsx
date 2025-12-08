"use client";
import { FunctionComponent, useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import ReviewItem from "./review-item";
import { allReviews } from "@/app/helpers/data";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ReviewsSectionProps {}

const ReviewsSection: React.FC<ReviewsSectionProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const swiperWrapperRef = useRef<HTMLDivElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !swiperRef.current ||
      !swiperWrapperRef.current ||
      !swiperReady
    ) {
      return;
    }

    const swiper = swiperRef.current;
    let scrollTrigger: ScrollTrigger | null = null;
    let resizeHandler: (() => void) | null = null;
    let refreshTimeout: NodeJS.Timeout | null = null;

    // Wait for Swiper to be fully initialized and calculate dimensions
    const initScrollTrigger = () => {
      // Force Swiper to recalculate dimensions
      swiper.update();
      swiper.updateSlides();
      swiper.updateSlidesClasses();

      // Calculate the maximum translate distance
      const maxTranslate = Math.abs(swiper.maxTranslate());

      if (maxTranslate === 0 || isNaN(maxTranslate)) {
        // Swiper not ready yet, try again
        setTimeout(initScrollTrigger, 100);
        return;
      }

      // Kill existing ScrollTrigger if any
      if (scrollTrigger) {
        scrollTrigger.kill();
        scrollTrigger = null;
      }

      // Calculate scroll distance - use maxTranslate as the scroll distance
      // This ensures the slider completes exactly when scroll completes
      const scrollDistance = maxTranslate;

      // Get the section's natural height to maintain during pinning
      const sectionHeight = sectionRef.current.offsetHeight;

      // Create ScrollTrigger - trigger on the swiper wrapper so it activates when cards are in center
      scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center center",
        end: () => `+=${scrollDistance}`,
        pin: true, // Pin the entire section
        pinSpacing: true, // Add spacing to prevent overlap
        anticipatePin: 1,
        scrub: 1, // Smooth scrubbing, set to true for instant or number for delay
        invalidateOnRefresh: true, // Recalculate on refresh
        onUpdate: (self) => {
          // Convert scroll progress (0 to 1) to horizontal translate
          const progress = self.progress;
          const translate = -progress * maxTranslate;
          swiper.setTranslate(translate);
        },
        onEnter: () => {
          // Disable Swiper's touch/drag when ScrollTrigger is active
          swiper.allowTouchMove = false;
        },
        onLeave: () => {
          // Re-enable Swiper's touch/drag when ScrollTrigger is inactive
          swiper.allowTouchMove = true;
        },
        onEnterBack: () => {
          swiper.allowTouchMove = false;
        },
        onLeaveBack: () => {
          swiper.allowTouchMove = true;
        },
      });

      // Refresh ScrollTrigger on window resize
      resizeHandler = () => {
        if (scrollTrigger && swiper) {
          swiper.update();
          const newMaxTranslate = Math.abs(swiper.maxTranslate());
          if (newMaxTranslate > 0 && !isNaN(newMaxTranslate)) {
            scrollTrigger.refresh();
          }
        }
      };

      window.addEventListener("resize", resizeHandler);

      // Refresh ScrollTrigger after setup to ensure proper calculations
      ScrollTrigger.refresh();
    };

    // Initialize after a short delay to ensure Swiper is ready
    const timeoutId = setTimeout(initScrollTrigger, 300);

    // Also refresh on initial load
    refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      if (refreshTimeout) {
        clearTimeout(refreshTimeout);
      }
      if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler);
      }
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.vars.trigger === swiperWrapperRef.current ||
          trigger.vars.trigger === sectionRef.current
        ) {
          trigger.kill();
        }
      });
    };
  }, [swiperReady]);

  return (
    <div ref={sectionRef} className="w-full bg-white overflow-hidden">
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
          ref={swiperWrapperRef}
          className="w-full overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              // Wait a bit for Swiper to fully initialize
              setTimeout(() => {
                setSwiperReady(true);
              }, 100);
            }}
            spaceBetween={20}
            slidesPerView={1.2}
            freeMode={true}
            modules={[FreeMode]}
            className="!pb-10"
            style={{ width: "100%", overflow: "visible" }}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: "auto",
                spaceBetween: 20,
              },
              768: {
                slidesPerView: "auto",
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: "auto",
                spaceBetween: 30,
              },
            }}
          >
            {allReviews.map((review, index) => (
              <SwiperSlide
                key={index}
                style={{ maxWidth: "600px" }}
                className="sm:!w-[500px] md:!w-[600px]"
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
