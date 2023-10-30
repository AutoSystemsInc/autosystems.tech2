import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import React from "react";
import { useState } from "react";

interface Carousel2Props {
  images: string[];
}

const Carousel2 = ({ sliders }: { sliders: string[] }) => {
  let [current, setCurrent] = React.useState(0);
  let previousSlide = () => {
    console.log("current");
    setCurrent(current > 0 ? current - 1 : sliders.length - 1);
  };
  let nextSlide = () => {
    console.log("current");
    setCurrent(current < sliders.length - 1 ? current + 1 : 0);
  };

  return (
    <div className="overflow-hidden relative cursor-grab">
      <div
        className={`flex transition ease-out duration-40`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
          {sliders.map((s, index) =>
            <img key={index} src={s} className="mr-12 w-3/12"/>
          )}
      </div>
      <div className="absolute bottom-0 py-4 z-100 flex justify-center gap-3 w-full">
        {sliders.map((s, index) => {
          return (
            <div
              style={{ zIndex: 1000 }}
              onClick={() => setCurrent(index)}
              key={"circle" + index}
              className={`rounded-full w-5 h-5 cursor-pointer ${
                index == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel2;
