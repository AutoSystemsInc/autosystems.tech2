import NewsCard from "./news-card";

const News = () => {
    return (

        <div className="self-stretch h-[689px] px-[170px] py-[60px] flex-col justify-center items-center gap-[60px] inline-flex">
            <div className="self-stretch h-[83px] flex-col justify-center items-start gap-[5px] flex">
                <div className="self-stretch text-black text-[40px] font-bold font-['Inter'] leading-[48px]">NEWS</div>
                <div className="w-28 h-[25px] text-black text-base font-bold font-['Inter'] leading-[8px]">お知らせ</div>
                <div className="w-[110px] h-[0px] border-4 border-black"></div>
            </div>

            <div className="self-stretch justify-between items-center inline-flex">
            <NewsCard title="新サービスリリースのお知らせ" thumbnail="https://via.placeholder.com/352x247" date="2023/12/15" urlToOneNews="https://google.com"></NewsCard>
            <NewsCard title="新サービスリリースのお知らせ" thumbnail="https://via.placeholder.com/352x247" date="2023/12/15" urlToOneNews="https://google.com"></NewsCard>
            <NewsCard title="新サービスリリースのお知らせ" thumbnail="https://via.placeholder.com/352x247" date="2023/12/15" urlToOneNews="https://google.com"></NewsCard>
            </div>

            <a href="https::google.com">
                <div className="px-10 py-[15px] rounded-[10px] border-2 border-black justify-center items-center gap-2.5 inline-flex">
                <div className="text-right text-black text-xl font-normal font-['Inter'] leading-7">すべてのお知らせを見る</div>
                </div>
            </a>
        </div>
    )
}

export default News