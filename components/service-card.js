const ServiceCard = ({ title, description, thumbnail }) => {
    return (
    <div className="w-[351px] h-[326px] relative">
    <div className="w-[351px] h-[122px] left-0 top-[204px] absolute bg-zinc-600 shadow">
    <div className="left-[21px] top-[15px] absolute text-gray-200 text-[19px] font-bold font-['Inter'] leading-7">ウェブ開発</div>
    <div className="w-56 h-[68px] left-[21px] top-[43px] absolute text-gray-200 text-[13px] font-bold font-['Inter'] leading-7">Node.js等の技術を使い、Webサービスを迅速に作成します。</div>
    <div className="w-4 h-4 left-[311px] top-[20px] absolute" />
    </div>
    </div>
    );
}

export default ServiceCard