export function SocialMediaRecordsSection() {
  return (
    <div className="w-full h-full bg-[#1f1e1b] pt-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="sm:grid-cols-2 grid grid-cols-1 gap-10 sm:gap-40 place-items-center">
          <div className="w-full h-full flex flex-col gap-4">
            <h2 className="w-full text-white text-4xl font-bold">
              Të parët për: <br />{" "}
              <b>
                “50+ Milion Shikime & 100K
                <br /> Ndjekës në Instagram”
              </b>
            </h2>
            <div className="text-base text-white">
              ZOOM Production është produksioni i parë shqiptar i dasmave që ka
              arritur 50+ milionë shikime në të gjitha platformat digjitale,
              duke krijuar një ndikim të padiskutueshëm në industrinë e
              videografisë së dasmave.
              <br></br>
              <br></br>
              Me një komunitet prej 100,000 ndjekësish në Instagram, stilin tonë
              e kanë përqafuar çifte nga mbarë bota, duke e bërë markën tonë
              sinonim të elegancës, kreativitetit dhe standardit të lartë. Këto
              arritje pasqyrojnë jo vetëm punën tonë, por edhe lidhjen
              emocionale që krijojmë me publikun në çdo projekt.
            </div>
          </div>
          <div className="h-full w-full flex items-center justify-center">
            <div className="relative">
              <img
                src="/images/lp/social-media/screenshot.png"
                className="w-full h-full object-cover rounded-4xl"
              ></img>

              <div className="bg-gradient-to-l absolute top-0 left-0 rounded-4xl from-[rgba(212,170,0,0.45)] to-transparent w-full h-full z-10"></div>
              <div className="bg-gradient-to-l absolute top-0 right-0 rounded-4xl from-[rgba(0,0,0,0.35)] to-transparent w-full h-full z-10"></div>
              <img
                src="/images/lp/social-media/check.png"
                className="absolute top-0 left-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 hidden sm:block"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
