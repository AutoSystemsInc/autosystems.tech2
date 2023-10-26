
const NewsCard = ({ title, description, url, urlToImage , date}) => {
    return (
        <div className="w-[352px] h-[313px] flex-col justify-center items-start gap-[15px] inline-flex">
            <img className="self-stretch grow shrink basis-0 shadow" src="https://via.placeholder.com/352x247" />
            <div className="self-stretch text-black text-[19px] font-bold font-['Inter'] leading-tight">{title}</div>
            <div className="self-stretch text-neutral-500 text-base font-normal font-['Inter'] leading-none">{date}</div>
        </div>
    )
}

export default NewsCard