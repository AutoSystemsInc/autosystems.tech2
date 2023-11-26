import ScrollContainer from "react-indiana-drag-scroll";
import WorksCard from "./works-card";
import React, { useState, useEffect } from "react";

const Works = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    const elem = document.getElementById("works");
    const rect = elem?.getBoundingClientRect();
    const isNowVisible =
      !isVisible && rect?.top! >= 0 && rect?.bottom! <= window.innerHeight / 2;
    if (isNowVisible) {
      setIsVisible(true);
      console.log("visible");
      window.removeEventListener("scroll", checkVisibility); // リスナーを削除
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);

  return (
    <div className="self-stretch px-44 py-14 bg-zinc-100 flex-col justify-center items-center gap-14 flex">
      <div className="self-stretch h-20 flex-col justify-center items-start gap-1 flex">
        <div
          id="works"
          className={isVisible ? "animate-glow text-red-900 " : ""}
        >
          <div className="self-stretch text-4xl font-bold font-['Inter'] leading-10">
            WORKS
          </div>
          <div className="w-16 h-6 text-base font-bold font-['Inter'] leading-3">
            制作実績
          </div>
        </div>
        <div className="w-28 h-px border-4 border-black"></div>
      </div>

      <div className="w-[1140px] text-black">
        <ScrollContainer>
          <div className="flex gap-x-10">
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
