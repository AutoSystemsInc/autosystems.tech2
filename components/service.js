import ServiceCard from "./service-card"

const Service = () => {
    return (
        <div className="w-[1440px] h-[629px] px-[170px] py-[60px] bg-neutral-50 flex-col justify-center items-center gap-[60px] inline-flex">
            <div className="self-stretch h-[83px] flex-col justify-center items-start gap-[5px] flex">
                <div className="self-stretch text-black text-[40px] font-bold font-['Inter'] leading-[48px]">SERVICE</div>
                <div className="w-28 h-[25px] text-black text-base font-bold font-['Inter'] leading-[8px]">事業・サービス</div>
                <div className="w-[110px] h-[0px] border-4 border-black"></div>
            </div>
            <div className="w-[1100px] grow shrink basis-0 justify-center items-center gap-[77px] inline-flex">
                <ServiceCard title="title" description="description" thumbnail="https://via.placeholder.com/400x298" ></ServiceCard>
                <ServiceCard title="title" description="description" thumbnail="https://via.placeholder.com/400x298" ></ServiceCard>
            </div>
        </div>
    )
}

export default Service
