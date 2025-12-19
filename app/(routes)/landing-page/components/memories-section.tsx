export function MemoriesSection() {
  return (
    <div className="gap-10 overflow-hidden relative">
      <div className="flex flex-col max-w-7xl mx-auto w-full px-4 ">
        <div className="sm:ml-40 flex flex-col gap-4">
          <h2 className="text-3xl sm:text-5xl  ">Dhe si perfundim...</h2>
          <div className="flex flex-col sm:ml-[20rem]">
            <div className="text-xl">ju pranoni momentet tuaja te</div>
            <div className="text-xl">paketuara në mënyrë Premium...</div>
          </div>
        </div>
      </div>
      <div
        // style={{ transform: "translateX(-10vw)" }}
        className="w-screen relative  overflow-visible translate-y-[3rem] -translate-x-[2rem] sm:-translate-x-[3vw]"
      >
        <img
          src="/images/lp/memories.png"
          className="w-[calc(100vw+4rem)] sm:w-[calc(106vw)] max-w-none"
          alt="Memories"
        />
      </div>

      <img
        src="/images/lp/blur-rect.png"
        alt="Memories Background"
        className=" absolute top-full -translate-y-[1.5rem]  sm:-translate-y-[10rem]"
      ></img>
    </div>
  );
}
