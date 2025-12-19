function AwardsSection() {
  return (
    <div className="flex flex-col gap-10 bg-[#1f1e1b] px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-20">
        <div className="w-full flex sm:justify-center">
          <div className="text-3xl sm:text-6xl  w-fit text-white">
            <div></div>
            Fitues Qmimësh e Mbajtës
            <div>Rekordesh...</div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[30rem_auto] gap-30 sm:gap-10 ">
          <div className="relative sm:w-full w-1/2">
            <img
              src="/images/lp/awards/image1.png"
              className=" sm:w-full h-full object-contain"
            ></img>
            <div className="absolute bottom-0 right-0 translate-y-[4rem] w-[15rem] sm:w-[20rem] translate-x-2/3 overflow-visible z-10">
              <img src="/images/lp/awards/image2.png" className=""></img>
              <div className="text-white flex flex-col text-sm w-fit max-w-[7rem] sm:max-w-full sm:w-full  sm:text-3xl absolute top-1/2 -translate-y-[3rem] sm:-translate-y-[2rem] -translate-x-[4rem] italic left-full w-full sm:whitespace-nowrap">
                <div className="w-fit">Arlind Acepting </div>
                <div className="w-fit">the price</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-white sm:p-8">
            <div className="text-3xl">Fitues të Çmimit</div>
            <div className="text-4xl font-bold">
              “Best International Wedding Videography Award”
            </div>
            <br></br>
            <div className="text-lg">
              ZOOM Production është nderuar me çmimin Best International Wedding
              Videography Award, një vlerësim prestigjioz që njeh nivelin tonë
              të lartë të krijimit, rrëfimit dhe realizimit filmik të dasmave.
              <br></br>
              <br></br>
              Për ne, ky vlerësim është dëshmi e pasionit, kreativitetit dhe
              përkushtimit të ekipit tonë për të sjellë film dasmëje që mbeten
              përgjithmonë.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardsSection;
