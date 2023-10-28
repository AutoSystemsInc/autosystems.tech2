const AboutUsDescription = ({ description }: { description: string }) => {
  return (
    <span className="text-neutral-500 text-[29px] font-bold font-['Inter'] leading-[48px]">
      {description}
      <br />
    </span>
  );
};

export default AboutUsDescription;
