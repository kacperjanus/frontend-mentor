import DisplayButton from "@/app/_components/single-components/DisplayButton";

export default function Home() {
  return <div className="p-6 tablet:px-[40x] tablet:py-[128px] desktop:py-[128px] desktop:max-w-[1110px] h-full desktop:mx-auto flex flex-col desktop:grid desktop:grid-cols-2 desktop:items-end desktop:gap-[48px]">
            <div className="text-white text-center desktop:text-start">
                <h2 className="uppercase mobile-heading-xs tablet:heading-xs text-light-blue mb-6">So, you want to travel to</h2>
                <h1 className="mobile-heading-xl tablet:heading-xl mb-6">SPACE</h1>
                <p className="mobile-body text-light-blue">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="flex-grow flex items-center justify-center desktop:justify-self-end desktop:self-center">
                <DisplayButton>EXPLORE</DisplayButton>
            </div>
  </div>
}