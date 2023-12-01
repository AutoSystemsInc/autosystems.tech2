import Heading from "./heading";

const AboutUs = () => (
  <div className="h-[911px] px-[170px] py-[60px] bg-neutral-50 flex-col justify-center items-center gap-[60px] inline-flex" id="about">
    <div className="self-stretch h-[83px] flex-col justify-center items-start gap-[5px] flex">
      <Heading id="aboutUsHeading" title="ABOUT US" subtitle="会社概要"></Heading>
      <div className="w-[110px] h-[0px] border-4 border-black"></div>
    </div>
    <div className="w-[1087px] h-[530px]">
      <span className="text-black text-[40px] font-bold font-['Inter'] leading-[48px]">
        PURPOSE
        <br />
      </span>
      <span className="text-neutral-500 text-[29px] font-bold font-['Inter'] leading-[48px]">
        世界中の人々が最先端のシステムをアクセスし、利用することのできる環境を構築すること
        <br />
      </span>
      <span className="text-neutral-500 text-[40px] font-bold font-['Inter'] leading-[48px]">
        <br />
      </span>
      <span className="text-black text-[40px] font-bold font-['Inter'] leading-[48px]">
        VISION
        <br />
      </span>
      <span className="text-neutral-500 text-[29px] font-bold font-['Inter'] leading-[48px]">
        日常生活やビジネスの多くの側面での自動化を実現し、人々がより便利で効率的な生活を送れるようにする
        <br />
      </span>
      <span className="text-black text-[40px] font-bold font-['Inter'] leading-[48px]">
        <br />
        MISSION
        <br />
      </span>
      <span className="text-neutral-500 text-[29px] font-bold font-['Inter'] leading-[48px]">
        革新的なシステムを提供し、クライアントのビジネス成長をサポートし、ユーザーにとって価値ある経験を提供する
      </span>
    </div>
  </div>
);

export default AboutUs;
