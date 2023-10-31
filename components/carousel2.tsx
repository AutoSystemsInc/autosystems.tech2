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
    <div className="w-[1440px] h-[815px] px-[170px] py-[60px] bg-zinc-100 flex-col justify-center items-center gap-[60px] inline-flex">
      <div className="self-stretch h-[83px] flex-col justify-center items-start gap-[5px] flex">
        <div className="self-stretch text-black text-[40px] font-bold font-['Inter'] leading-[48px]">
          WORKS
        </div>
        <div className="w-16 h-[25px] text-black text-base font-bold font-['Inter'] leading-[8px]">
          制作実績
        </div>
        <div className="w-[110px] h-[0px] border-4 border-black"></div>
      </div>
      <div className="self-stretch justify-start items-start gap-10 inline-flex">
        <div className="opacity-50 flex-col justify-start items-center gap-2.5 inline-flex">
          <img
            className="w-[400px] h-[298.08px] shadow"
            src="https://via.placeholder.com/400x298"
          />
          <div className="w-[400px] text-black text-xl font-bold font-['Inter'] leading-7">
            キャプションキャプションキャプションキャプションキャプション
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-2.5 inline-flex">
          <img
            className="w-[400px] h-[298.08px] shadow"
            src="https://via.placeholder.com/400x298"
          />
          <div className="w-[400px] text-black text-xl font-bold font-['Inter'] leading-7">
            NP4G: 一般化のためのネットワーク
            <br />
            プログラミング
          </div>
        </div>
        <div className="opacity-50 flex-col justify-start items-center gap-2.5 inline-flex">
          <img
            className="w-[400px] h-[298.08px] shadow"
            src="https://via.placeholder.com/400x298"
          />
          <div className="w-[400px] text-black text-xl font-bold font-['Inter'] leading-7">
            next.jsブログエディタ
          </div>
        </div>
        <div className="opacity-50 flex-col justify-start items-center gap-2.5 inline-flex">
          <img
            className="w-[400px] h-[298.08px] shadow"
            src="https://via.placeholder.com/400x298"
          />
          <div className="w-[400px] text-black text-xl font-bold font-['Inter'] leading-7">
            商品比較サイト
          </div>
        </div>
        <div className="opacity-50 flex-col justify-start items-center gap-2.5 inline-flex">
          <img
            className="w-[400px] h-[298.08px] shadow"
            src="https://via.placeholder.com/400x298"
          />
          <div className="w-[400px] text-black text-xl font-bold font-['Inter'] leading-7">
            商品比較サイト
          </div>
        </div>
        <div className="opacity-50 flex-col justify-start items-center gap-2.5 inline-flex">
          <img
            className="w-[400px] h-[298.08px] shadow"
            src="https://via.placeholder.com/400x298"
          />
          <div className="w-[400px] text-black text-xl font-bold font-['Inter'] leading-7">
            商品比較サイト
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel2;
