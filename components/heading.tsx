import React, { useState, useEffect } from "react";
import { title } from "process";

const Heading = ({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    const elem = document.getElementById(id);
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
    <div id={id} className={isVisible ? "animate-glow text-red-900 " : ""}>
      <div className="self-stretch text-[40px] font-bold font-['Inter'] leading-[48px]">
        {title}
      </div>
      <div className="w-28 h-[25px] text-base font-bold font-['Inter'] leading-[8px]">
        {subtitle}
      </div>
    </div>
  );
};

export default Heading;
