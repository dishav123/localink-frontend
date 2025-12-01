import svgPaths from "../../assets/star";

function StarIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Star icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_276)" id="Star icon">
          <g id="Star background"></g>
          <g clipPath="url(#clip1_1_276)" id="Star">
            <path d={svgPaths.p2668e780} fill="var(--fill-0, #FFC51D)" id="Star_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_276">
            <rect fill="white" height="18" width="18" />
          </clipPath>
          <clipPath id="clip1_1_276">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Stars() {
  return (
    <div className="content-stretch flex gap-1 items-center relative shrink-0" data-name="Stars">
      {[...Array(5).keys()].map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}

function AuthorIcon() {
  return (
    <div className="bg-[#155b75] relative rounded-[200px] shrink-0 size-8" data-name="Author Icon">
      <div className="absolute flex flex-col font-bold justify-center leading-0 left-1/2 text-[14px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%] w-8">
        <p className="leading-none">BR</p>
      </div>
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="basis-0 content-stretch flex gap-1 grow items-start leading-normal min-h-px min-w-px relative shrink-0 text-[16px] text-nowrap whitespace-pre" data-name="Text and supporting text">
      <p className=" font-bold relative shrink-0 text-[#292929]">Bob Ross</p>
      <p className=" font-medium text-[12px] relative shrink-0 text-neutral-600">Painter</p>
    </div>
  );
}

function Author() {
  return (
    <div className="content-stretch flex gap-3 items-center relative shrink-0 w-full" data-name="Author">
      <AuthorIcon />
      <TextAndSupportingText />
    </div>
  );
}

function QuoteAndSubheading() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start relative shrink-0 w-full" data-name="Quote and subheading">
      <p className=" font-medium leading-normal relative shrink-0 text-[#292929] text-[20px] w-full">Great experience with all of the people who helped set everything up and get everything going.</p>
      <Author />
    </div>
  );
}

export default function ReviewCard() {
  return (
    <div className="bg-white relative size-full" data-name="Review Card">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start p-6 relative size-full">
          <Stars />
          <QuoteAndSubheading />
        </div>
      </div>
    </div>
  );
}