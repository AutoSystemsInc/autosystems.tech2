const WorksCard = ({
  url,
  title,
  thumbnail,
}: {
  url: string;
  title: string;
  thumbnail: string;
}) => (
  <div className="snap-center shrink-0 first:pl-32 last:pr-8">
    <a href={url} title="work" className="container" style={{ width: "400px" }}>
      <img
        className="shrink-0 w-400 h-298 shadow-xl bg-white"
        src={thumbnail}
      />
      <div
        className="w-400 text-black text-xl font-bold font-['Inter'] leading-7 mt-3"
        style={{
          whiteSpace: "normal" /* テキストの自動改行を許可 */,
          overflow: "hidden" /* 要素からはみ出たテキストを非表示にする */,
        }}
      >
        {title}
      </div>
    </a>
  </div>
);

export default WorksCard;
