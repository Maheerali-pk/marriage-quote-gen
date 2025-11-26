"use client";
import { useRouter } from "next/navigation";

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

      <div className="grid grid-cols-1 md:grid-cols-[max-content_auto] gap-10 w-full z-10 md:px-40 px-8 pt-40">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 text-white text-5xl">
            A jeni gati
          </div>

          <div className="text-primary text-9xl text-shadow-lg text-shadow-primary">
            të shkëlqeni
          </div>
          <div className="text-white text-3xl ml-56">
            në filmin e dasmës suaj
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-full relative">
            <img
              src="/images/video.png"
              className="w-full h-auto  top-0 left-0 brightness-50"
            ></img>
            <img
              className="w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/images/play-icon.png"
            ></img>
          </div>
          <div className="text-white">
            Hapi i parë i çdo dasmeje madhështore është planifikimi, andaj ne
            duam të dijmë çdo detaj rreth ditës tuaj më të veçantë në mënyrë që
            t'iu ofrojmë një eksperiencë unike dhe të pa harruar.
            <br></br>
            <br />
            Në vazhdim do të keni disa pyetje dhe rubrika qe na ndihmojnë ne të
            ofrojmë më të mirën për ju. Këto pyetje ju marrin vetëm pak sekonda
            apo minuta nga dita juaj.
          </div>

          <button
            onClick={handleNext}
            className="bg-[rgba(212,170,0,1)] hover:bg-[rgba(212,170,0,0.8)] cursor-pointer transition-all duration-300 w-fit font-bold text-white text-2xl px-8 py-4 rounded-2xl"
          >
            DUA TË MARR OFERTËN TIME SPECIALE
          </button>
        </div>
      </div>
    </div>
  );
};

export default InitialForm;
