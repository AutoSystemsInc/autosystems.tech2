import ScrollContainer from "react-indiana-drag-scroll";
import WorksCard from "./works-card";
import Heading from "./heading";

const Works = () => {
  return (
    <div className="self-stretch px-44 py-14 bg-zinc-100 flex-col justify-center items-center gap-14 flex" id="works">
      <div className="self-stretch h-20 flex-col justify-center items-start gap-1 flex">
        <Heading id="worksHeading" title="WORKS" subtitle="制作実績"></Heading>
        <div className="w-28 h-px border-4 border-black"></div>
      </div>

      <div className="w-[1140px] text-black">
        <ScrollContainer>
          <div className="flex gap-x-10">
            <WorksCard
              url="https://google.com/"
              thumbnail="https://via.placeholder.com/400x298"
              title="協力事例"
            ></WorksCard>

            <WorksCard
              url="https://google.com/"
              thumbnail="https://via.placeholder.com/400x298"
              title="キャプションキャプションキャプションキャプションキャプション"
            ></WorksCard>

            <WorksCard
              url="https://google.com/"
              thumbnail="https://via.placeholder.com/400x298"
              title="キャプションキャプションキャプションキャプションキャプション"
            ></WorksCard>

            <WorksCard
              url="https://google.com/"
              thumbnail="https://via.placeholder.com/400x298"
              title="キャプションキャプションキャプションキャプションキャプション"
            ></WorksCard>
          </div>
        </ScrollContainer>
      </div>
    </div>
  );
};

export default Works;
