"use client";
import VideoItem from "@/app/components/video-item";
import { useRouter } from "next/navigation";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const router = useRouter();
  return (
    <div
      className="h-screen w-full flex items-center flex-col"
      style={{
        backgroundImage: "url('/images/main-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div>

      <img
        src="/images/logo.png"
        alt="logo"
        className="w-auto mx-auto h-14 mt-10 mb-10 z-10"
      ></img>
      <div className="flex flex-col items-center gap-10 z-10 h-full w-full">
        <div className="w-[35%]">
          <VideoItem></VideoItem>
        </div>
        <div className="text-white text-5xl font-bold text-center w-1/2">
          Dasma realizohët vetëm njëherë, po me ZOOM Production...
        </div>

        <div className="flex flex-col items-center w-1/2">
          <div className="text-white text-5xl text-center ">
            mbahet mend përgjithmonë
          </div>
          <img className="w-[400px] h-auto" src={"/images/lp/sign.png"}></img>
        </div>
        <div className="flex gap-8 items-center">
          <button
            onClick={() => router.push("/initial")}
            className="btn-secondary w-fit !rounded-full"
          >
            LEXO MË SHUMË RRETH ZP
          </button>
          <button
            onClick={() => router.push("/initial")}
            className="btn-primary w-fit !rounded-full"
          >
            REZERVO DATËN TËNDE
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
