interface FooterSectionProps {}

const FooterSection: React.FC<FooterSectionProps> = () => {
  return (
    <div className="flex flex-col w-full bg-[linear-gradient(to_top,black_0%,transparent_100%)] mt-40">
      <div className="w-1/2 mx-auto mb-40 flex flex-col gap-10">
        <div className="text-black text-5xl font-bold flex w-full justify-start">
          Dhe si perfundim...
        </div>
        <div className="text-black text-2xl flex w-full justify-end">
          <div className="text-left flex justify-left">
            ju pranoni momentet tuaja te<br></br> paketuara në mënyrë Premium...{" "}
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="/images/lp/footer.png"
          className="max-w-7xl mx-auto h-auto z-20"
        />
        <div className="bg-[linear-gradient(to_top,#29272A_0%,#29272a5a_100%)] w-full h-[80%] absolute bottom-0 left-0"></div>
      </div>
    </div>
  );
};

export default FooterSection;
