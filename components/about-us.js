import AboutUsTitle from "./about-us-title"
import AboutUsDescription from "./about-us-description"

const AboutUs = () => {
    return (
        <div className="w-[1440px] h-[911px] px-[170px] py-[60px] bg-neutral-50 flex-col justify-center items-center gap-[60px] inline-flex">
            <div className="self-stretch h-[83px] flex-col justify-center items-start gap-[5px] flex">
                <AboutUsTitle title="ABOUT US"></AboutUsTitle>
                <div className="w-28 h-[25px] text-black text-base font-bold font-['Inter'] leading-[8px]">会社概要<br/></div>
                <div className="w-[110px] h-[0px] border-4 border-black"></div>
            </div>
          <div className="w-[1087px] h-[530px]">
            <AboutUsTitle title="PURPOSE"></AboutUsTitle>
            <AboutUsDescription description="世界中の人々が最先端のシステムをアクセスし、利用することのできる環境を構築すること"></AboutUsDescription>
            <AboutUsTitle title="VISION"></AboutUsTitle>
            <AboutUsDescription description="日常生活やビジネスの多くの側面での自動化を実現し、人々がより便利で効率的な生活を送れるようにする"></AboutUsDescription>
            <AboutUsTitle title="MISSION"></AboutUsTitle>
            <AboutUsDescription description="革新的なシステムを提供し、クライアントのビジネス成長をサポートし、ユーザーにとって価値ある経験を提供する"></AboutUsDescription>
          </div>
        </div>
    )
}

export default AboutUs