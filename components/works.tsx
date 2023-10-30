import WorksCard from "./works-card";

const Works = () => (
  <div className="self-stretch h-[815px] px-[170px] py-[60px] bg-zinc-100 flex-col justify-center items-center gap-[60px] inline-flex">
    <div className="self-stretch h-[83px] flex-col justify-center items-start gap-[5px] flex">
      <div className="self-stretch text-black text-[40px] font-bold font-['Inter'] leading-[48px]">
        WORKS
      </div>
      <div className="w-16 h-[25px] text-black text-base font-bold font-['Inter'] leading-[8px]">
        制作実績
      </div>
      <div className="w-[110px] h-[0px] border-4 border-black"></div>
    </div>
    <div className="relative w-[1440px] flex gap-20 snap-x overflow-x-auto pb-14">
		
      <WorksCard
        url=""
        title="test1"
        thumbnail="https://via.placeholder.com/400x298"
      ></WorksCard>
      <WorksCard
        url=""
        title="NP4G: 一般化のためのネットワーク<br/>プログラミング"
        thumbnail="https://via.placeholder.com/400x298"
      ></WorksCard>
      <WorksCard
        url=""
        title="NP4G: 一般化のためのネットワーク<br/>プログラミング"
        thumbnail="https://via.placeholder.com/400x298"
      ></WorksCard>
      <WorksCard
        url=""
        title="NP4G: 一般化のためのネットワーク<br/>プログラミング"
        thumbnail="https://via.placeholder.com/400x298"
      ></WorksCard>
      <WorksCard
        url=""
        title="NP4G: ネットワークプログラミング"
        thumbnail="https://via.placeholder.com/400x298"
      ></WorksCard>
    </div>
  </div>
);

export default Works;
