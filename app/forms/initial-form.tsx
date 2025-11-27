"use client";
import { useRouter } from "next/navigation";
import VideoItem from "../components/video-item";

interface InitialFormProps {}

const InitialForm: React.FC<InitialFormProps> = () => {
  const router = useRouter();
  const handleNext = () => {
    router.push("/name");
  };
  return (
    <div
      className="h-full w-full flex justify-center"
      style={{
        backgroundImage: "url('/images/main-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>

      <div className="grid grid-cols-1 grid-rows-[min-content_auto] md:grid-rows-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-10 w-full z-10 md:px-40 px-8 pt-10 md:pt-40 ">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 text-white text-5xl">
            A jeni gati
          </div>

          <div className="text-primary text-8xl md:text-9xl text-shadow-lg text-shadow-primary">
            të shkëlqeni
          </div>
          <div className="text-white text-3xl md:ml-56">
            në filmin e dasmës suaj
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <VideoItem></VideoItem>
          <div className="text-white text-xl md:text-lg">
            Hapi i parë i çdo dasmeje madhështore është planifikimi, andaj ne
            duam të dijmë çdo detaj rreth ditës tuaj më të veçantë në mënyrë që
            t'iu ofrojmë një eksperiencë unike dhe të pa harruar.
            <br></br>
            <br />
            Në vazhdim do të keni disa pyetje dhe rubrika qe na ndihmojnë ne të
            ofrojmë më të mirën për ju. Këto pyetje ju marrin vetëm pak sekonda
            apo minuta nga dita juaj.
          </div>

          <button onClick={handleNext} className="btn-primary w-fit">
            DUA TË MARR OFERTËN TIME SPECIALE
          </button>
        </div>
      </div>
    </div>
  );
};

export default InitialForm;
