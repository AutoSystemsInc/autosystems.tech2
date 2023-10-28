const WorksCard = ({
  url,
  title,
  thumbnail,
}: {
  url: string;
  title: string;
  thumbnail: string;
}) => (
  <div className="w-[400px] h-[336.08px] flex-col justify-start items-center gap-2.5 inline-flex">
    <a href={url} title="work">
      <img className="w-[400px] h-[298.08px] shadow" src={thumbnail} />
    </a>
    <div className="w-[400px] text-black text-xl font-bold font-['Inter'] leading-7">
      {title}
    </div>
  </div>
);

export default WorksCard;
