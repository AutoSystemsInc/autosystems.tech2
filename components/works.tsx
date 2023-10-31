import WorksCard from "./works-card";
import ScrollContainer from "react-indiana-drag-scroll";

const Works = () => (
  <div className="self-stretch px-44 py-14 bg-zinc-100 flex-col justify-center items-center gap-14 flex">
    <div className="self-stretch h-20 flex-col justify-center items-start gap-1 flex">
      <div className="self-stretch text-black text-4xl font-bold font-['Inter'] leading-10">
        WORKS
      </div>
      <div className="w-16 h-6 text-black text-base font-bold font-['Inter'] leading-3">
        制作実績
      </div>
      <div className="w-28 h-px border-4 border-black"></div>
    </div>

    <div className="overflow-x-hidden self-stretch">
        <div className="justify-items-start gap-10 flex flex-1 overflow-x-scroll">
          <div className="opacity-50 flex-col justify-start items-center gap-2.5">
            <img
              className="w-96 h-72 shadow"
              src="https://via.placeholder.com/400x298"
            />
            <div className="w-96 text-black text-xl font-bold font-['Inter'] leading-7">
              キャプションキャプションキャプションキャプションキャプション
            </div>
          </div>

          <div className="opacity-50 flex-col justify-start items-center gap-2.5">
            <img
              className="w-96 h-72 shadow"
              src="https://via.placeholder.com/400x298"
            />
            <div className="w-96 text-black text-xl font-bold font-['Inter'] leading-7">
              NP4G: 一般化のためのネットワーク
              <br />
              プログラミング
            </div>
          </div>

          <div className="opacity-50 flex-col justify-start items-center gap-2.5">
            <img
              className="w-96 h-72 shadow"
              src="https://via.placeholder.com/400x298"
            />
            <div className="w-96 text-black text-xl font-bold font-['Inter'] leading-7">
              next.jsブログエディタ
            </div>
          </div>
          <div className="opacity-50 flex-col justify-start items-center gap-2.5">
            <img
              className="w-96 h-72 shadow"
              src="https://via.placeholder.com/400x298"
            />
            <div className="w-96 text-black text-xl font-bold font-['Inter'] leading-7">
              商品比較サイト
            </div>
          </div>
          <div className="opacity-50 flex-col justify-start items-center gap-2.5">
            <img
              className="w-96 h-72 shadow"
              src="https://via.placeholder.com/400x298"
            />
            <div className="w-96 text-black text-xl font-bold font-['Inter'] leading-7">
              商品比較サイト
            </div>
          </div>
          <div className="opacity-50 flex-col justify-start items-center gap-2.5">
            <img
              className="w-96 h-72 shadow"
              src="https://via.placeholder.com/400x298"
            />
            <div className="w-96 text-black text-xl font-bold font-['Inter'] leading-7">
              商品比較サイト
            </div>
          </div>
        </div>
    </div>
  </div>
);

export default Works;
