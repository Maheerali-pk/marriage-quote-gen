interface SecondSectionProps {}

const SecondSection: React.FC<SecondSectionProps> = () => {
  return (
    <div className="h-full w-full flex flex-col bg-black pt-20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col mx-auto w-full gap-10">
          <div className="flex w-full justify-start text-white text-4xl">
            10 VITE PUNË
          </div>

          <div className="flex w-full justify-center text-white text-4xl">
            700+ DASMA <br /> TË REALIZUARA
          </div>

          <div className="flex w-full justify-end text-white text-4xl">
            VIRALITET <br /> WORLD-WIDE
          </div>
        </div>

        <div className="flex flex-col items-center mt-40">
          <div className="text-white text-center text-3xl">WELCOME TO</div>
          <img src="/images/logo.png" className="h-60"></img>
        </div>
        <img
          src={"/images/lp/reels-list.png"}
          className="w-full h-auto mt-8"
        ></img>
        <div className="text-white text-center text-5xl mx-auto mt-40 w-2/3">
          Puna ynë flet vetë, por nëse është hera e parë që po lexon për ZOOM
          Production, ja qfarë duhët të dini:
        </div>
        <div className="text-white text-lg mt-20 text-center w-1/2 mx-auto">
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
        <div className="flex justify-center mt-20 w-1/2 mx-auto">
          <img src={"/images/lp/sign2.png"} className="w-full h-auto"></img>
        </div>
        <div className="w-1/2 text-white flex justify-end mx-auto mt-10 mb-40">
          Letter from our Founder, Arlind Berisha
        </div>
      </div>
      <img src={"/images/lp/divider.png"} className="w-full h-auto"></img>
    </div>
  );
};

export default SecondSection;
