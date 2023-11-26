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
  const splitTitle = title.split(" ");
  const splitSubtitle = subtitle.split(" ");

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
    <div id={id}>
      <div
        className={
          "self-stretch text-[40px] font-bold font-['Inter'] leading-[48px]"
        }
      >
        {splitTitle.map((char, index) => (
          <span
            key={index}
            className={
              isVisible ? `animate-color-change delay-${index}` : "text-black"
            }
          >
            {char}
          </span>
        ))}
      </div>

      <div
        className={
          "w-28 h-[25px] text-base font-bold font-['Inter'] leading-[8px]"
        }
      >
        {splitSubtitle.map((char, index) => (
          <span
            key={index}
            className={
              isVisible ? `animate-color-change delay-${index}` : "text-black"
            }
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Heading;
