interface SecondSectionProps {}

const SecondSection: React.FC<SecondSectionProps> = () => {
  return (
    <div className="h-full w-full flex flex-col bg-black pt-10 sm:pt-16 md:pt-20">
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="flex flex-col mx-auto w-full gap-6 sm:gap-8 md:gap-10">
          <div className="flex w-full justify-start text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            10 VITE PUNË
          </div>

          <div className="flex w-full justify-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            700+ DASMA <br /> TË REALIZUARA
          </div>

          <div className="flex w-full justify-end text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            VIRALITET <br /> WORLD-WIDE
          </div>
        </div>

        <div className="flex flex-col items-center mt-20 sm:mt-32 md:mt-40">
          <div className="text-white text-center text-xl sm:text-2xl md:text-3xl">WELCOME TO</div>
          <img src="/images/logo.png" className="h-32 sm:h-40 md:h-52 lg:h-60"></img>
        </div>
        <img
          src={"/images/lp/reels-list.png"}
          className="w-full h-auto mt-4 sm:mt-6 md:mt-8"
        ></img>
        <div className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-auto mt-20 sm:mt-32 md:mt-40 w-full sm:w-5/6 md:w-2/3 px-4">
          Puna ynë flet vetë, por nëse është hera e parë që po lexon për ZOOM
          Production, ja qfarë duhët të dini:
        </div>
        <div className="text-white text-base sm:text-lg mt-10 sm:mt-16 md:mt-20 text-center w-full sm:w-5/6 md:w-3/4 lg:w-1/2 mx-auto px-4">
          ZOOM Production ofëron sherbime premium të xhirimit dhe fotografimit
          të momenteve tuaja më të veqanta te dasmes apo ahnegut tuaj.
          <br></br>
          <br></br>
          Eksperienca yne 10+ vjeqare na lejon që dasmat dhe ahengjet ti shohim
          nga një këndveshtrim unik, por kjo nukë është e mjaftueshme...
          <br></br>
          <br></br>
          Sepse, pa një ekipë të profesionalizuar dhe unike për ZOOM Production,
          ky këndveshtrim nuk mund të kthehet në realitet.
        </div>
        <div className="flex justify-center mt-10 sm:mt-16 md:mt-20 w-full sm:w-5/6 md:w-3/4 lg:w-1/2 mx-auto px-4">
          <img src={"/images/lp/sign2.png"} className="w-full h-auto"></img>
        </div>
        <div className="w-full sm:w-5/6 md:w-3/4 lg:w-1/2 text-white flex justify-end mx-auto mt-6 sm:mt-8 md:mt-10 mb-20 sm:mb-32 md:mb-40 px-4 text-sm sm:text-base">
          Letter from our Founder, Arlind Berisha
        </div>
      </div>
      <img src={"/images/lp/divider.png"} className="w-full h-auto"></img>
    </div>
  );
};

export default SecondSection;
