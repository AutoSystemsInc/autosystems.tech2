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
    <div className="relative w-full flex gap-6 snap-x overflow-x-auto pb-14">
      <div className="snap-center shrink-0">
        <div className="shrink-0 w-4 sm:w-48"></div>
      </div>
      <div className="snap-center shrink-0 first:pl-8 last:pr-8">
        <img
          className="shrink-0 w-400 h-298 rounded-lg shadow-xl bg-white"
          src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
        />
      </div>
      <div className="snap-center shrink-0 first:pl-8 last:pr-8">
        <img
          className="shrink-0 w-400 h-298 rounded-lg shadow-xl bg-white"
          src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
        />
      </div>
      <div className="snap-center shrink-0 first:pl-8 last:pr-8">
        <img
          className="shrink-0 w-400 h-298 rounded-lg shadow-xl bg-white"
          src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
        />
      </div>
      <div className="snap-center shrink-0 first:pl-8 last:pr-8">
        <img
          className="shrink-0 w-400 h-298 rounded-lg shadow-xl bg-white"
          src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
        />
      </div>
      <div className="snap-center shrink-0 first:pl-8 last:pr-8">
        <img
          className="shrink-0 w-400 h-298 rounded-lg shadow-xl bg-white"
          src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
        />
      </div>
      <div className="snap-center shrink-0 first:pl-8 last:pr-8">
        <img
          className="shrink-0 w-400 h-298 rounded-lg shadow-xl bg-white"
          src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
        />
      </div>
      <div className="snap-center shrink-0">
        <div className="shrink-0 w-4 sm:w-48"></div>
      </div>
    </div>

    // <div className="overflow-hidden relative cursor-grab scroll-smooth">
    //   <div
    //     className={`flex transition ease-out duration-40 `}
    //     style={{ transform: `translateX(-${current * 100 * 4/12 + current * 3}%)` }}
    //   >
    //       {sliders.map((s, index) =>
    //         <img key={index} src={s} className="mr-12 w-4/12"/>
    //       )}
    //   </div>
    //   <div className="absolute bottom-0 py-4 z-100 flex justify-center gap-3 w-full">
    //     {sliders.map((s, index) => {
    //       return (
    //         <div
    //           style={{ zIndex: 1000 }}
    //           onClick={() => setCurrent(index)}
    //           key={"circle" + index}
    //           className={`rounded-full w-5 h-5 cursor-pointer ${
    //             index == current ? "bg-white" : "bg-gray-500"
    //           }`}
    //         ></div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Carousel2;
