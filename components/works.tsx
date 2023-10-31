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

    <div className="w-[1140px] text-black">
      <ScrollContainer>
        <div className="flex gap-x-10">
          <div className="flex-col">
            <img
              className="w-96 h-72 drop-shadow-md"
              src="https://via.placeholder.com/400x298"
            />
            <div className="w-96 text-black text-xl font-bold font-['Inter'] leading-7">
              キャプションキャプションキャプションキャプションキャプション
            </div>
          </div>

          <div className="flex-col">
            <img
              className="w-96 h-72 drop-shadow-md"
              src="https://via.placeholder.com/400x298"
            />
            <div className="w-96 text-black text-xl font-bold font-['Inter'] leading-7">
              キャプションキャプションキャプションキャプションキャプション
            </div>
          </div>

          <div className="flex-col">
            <img
              className="w-96 h-72 drop-shadow-md"
              src="https://via.placeholder.com/400x298"
            />
            <div className="w-96 text-black text-xl font-bold font-['Inter'] leading-7">
              キャプションキャプションキャプションキャプションキャプション
            </div>
          </div>

          <div className="flex-col">
            <img
              className="w-96 h-72 drop-shadow-md"
              src="https://via.placeholder.com/400x298"
            />
            <div className="w-96 text-black text-xl font-bold font-['Inter'] leading-7">
              NP4G: 一般化のためのネットワーク
              <br />
              プログラミング
            </div>
          </div>

          <div className="flex-col">
            <img
              className="w-96 h-72 drop-shadow-md"
              src="https://via.placeholder.com/400x298"
            />
            <div className="w-96 text-black text-xl font-bold font-['Inter'] leading-7">
              next.jsブログエディタ
            </div>
          </div>
        </div>
      </ScrollContainer>
    </div>
  </div>
);

export default Works;
