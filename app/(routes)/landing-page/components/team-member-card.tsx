interface TeamMemeberCardProps {
  name: string;
  role: string;
  img: string;
}

const TeamMemeberCard: React.FC<TeamMemeberCardProps> = ({
  name,
  role,
  img,
}) => {
  return (
    <div className="w-full h-[30rem] rounded-4xl relative overflow-hidden">
      <img
        src={img}
        alt="our-team"
        className="w-full h-full object-cover  absolute top-0 left-0"
      />
      <div className="absolute  w-1/2 flex flex-col z-30 gap-6 w-full px-4 bottom-8">
        <div className="flex flex-col gap-2">
          <div className="text-white text-base">{role}</div>
          <h3 className="text-white text-3xl  font-bold">{name}</h3>
        </div>
        <div className="btn btn-primary text-sm btn-small w-fit !pr-10 !font-normal  !rounded-full">
          Lexo me shumë rreth {name.split(" ")[0]}
        </div>
      </div>
      <div className="bg-gradient-to-r absolute rounded-4xl from-[rgba(212,170,0,0.45)] to-transparent w-full h-full z-10"></div>
      <div className="bg-gradient-to-r absolute rounded-4xl from-[rgba(0,0,0,0.35)] to-transparent w-full h-full z-10"></div>
    </div>
  );
};

export default TeamMemeberCard;
