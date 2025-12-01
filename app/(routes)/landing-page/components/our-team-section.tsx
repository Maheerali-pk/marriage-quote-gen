"use client";
import TeamMemeberCard from "./team-member-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

interface OurTeamSectionProps {}

const allTeamMembers = [
  {
    name: "RINESA REXHEPI",
    role: "CEO OF ZP",
    img: "/images/lp/team/img2.png",
  },
  {
    name: "DRITA LLUGIQI",
    role: "MENAGER OF ZP",
    img: "/images/lp/team/img3.png",
  },
  {
    name: "IDEAL EMINI",
    role: "CGO OF ZP",
    img: "/images/lp/team/img4.png",
  },
];

// Create array of 10 items by duplicating the 5 images
const otherMembersImages = Array.from({ length: 10 }, (_, index) => {
  const imageNumber = (index % 5) + 1;
  return `/images/lp/other-members/img${imageNumber}.png`;
});

const OurTeamSection: React.FC<OurTeamSectionProps> = () => {
  return (
    <div className="bg-[#1f1e1b] w-full h-full py-40">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 px-4">
        <h3 className="text-white text-6xl  font-bold">
          Kush qëndron mbrapa suksesit të ZOOM Production...
        </h3>
        <div className="w-full h-[40rem] rounded-4xl relative overflow-hidden">
          <img
            src="/images/lp/team/img1.png"
            alt="our-team"
            className="w-full h-full object-cover sm:object-[0px_-200px] absolute top-0 left-0"
          />
          <div className="absolute bottom-4 left-4 pr-4 sm:bottom-10 sm:left-10 sm:pr-10 sm:w-1/2 w-full flex flex-col z-30 gap-6">
            <div className="flex flex-col gap-3">
              <div className="text-white text-xl">
                FOUNDER OF ZOOM PRODUCTION
              </div>

              <h3 className="text-white text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                ARLIND BERISHA
              </h3>
              <div className="text-white">
                Arlind është themeluesi i ZOOM Production dhe një ndër mendjet
                më strategjike në industrinë kreative shqiptare. Si personi që
                qëndron pas disa bizneseve të suksesshme, ai e transformoi ZOOM
                Production nga një ide në një brand prestigjioz. Për 5 vite me
                radhë, Arlind e udhëhoqi kompaninë me disiplinë, vizion dhe një
                standard të palëkundur cilësie, duke ndërtuar ekipin që sot e
                bën ZOOM Production të triumfojë në çdo projekt
              </div>
            </div>
            <div className="btn btn-primary btn-small w-fit !pr-20 !rounded-full">
              Lexo me shumë rreth Arlindit
            </div>
          </div>
          <div className="bg-gradient-to-r absolute rounded-4xl from-[rgba(212,170,0,0.45)] to-transparent w-full h-full z-10"></div>
          <div className="bg-gradient-to-r absolute rounded-4xl from-[rgba(0,0,0,0.35)] to-transparent w-full h-full z-10"></div>
        </div>
        <div className="grid sm:grid-cols-3 gap-10 grid-cols-1">
          {allTeamMembers.map((member) => (
            <TeamMemeberCard key={member.name} {...member} />
          ))}
        </div>
        <div className="w-full overflow-hidden">
          <Swiper
            modules={[FreeMode]}
            freeMode={true}
            spaceBetween={40}
            slidesPerView="auto"
            className="!pb-10"
            style={{ width: "100%", overflow: "visible" }}
          >
            {otherMembersImages.map((img, index) => (
              <SwiperSlide
                key={index}
                style={{ width: "250px", height: "250px" }}
                className="!w-[200px] !h-[200px]"
              >
                <div className="w-full h-full rounded-4xl relative overflow-hidden">
                  <img
                    src={img}
                    alt={`team-member-${index + 1}`}
                    className="w-full h-full object-cover absolute top-0 left-0 select-none"
                  />
                  <div className="bg-gradient-to-r absolute rounded-4xl from-[rgba(212,170,0,0.45)] to-transparent w-full h-full z-10"></div>
                  <div className="bg-gradient-to-r absolute rounded-4xl from-[rgba(0,0,0,0.35)] to-transparent w-full h-full z-10"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
