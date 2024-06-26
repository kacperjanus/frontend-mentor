import React from 'react';
import Button from "@/app/_components/Button";

function HeroSection() {
    return (
        <div className="bg-[#191919]">
            <div className="w-full desktop:max-w-[1100px] desktop:mx-auto h-[510px] desktop:h-[639px] tablet:h-[729px] desktop: flex flex-col items-center justify-center text-center desktop:text-start desktop:items-start text-white relative overflow-hidden">
                <img className="absolute tablet:hidden top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-1" src="/assets/home/mobile/image-header.jpg" alt="Headphones image"/>
                <img className="hidden tablet:block tablet:absolute desktop:hidden top-[45%] scale-110 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1" src="/assets/home/tablet/image-header.jpg" alt="Headphones image"/>
                <img className="hidden desktop:block absolute scale-[1.35] -top-[2%]" src="/assets/home/desktop/image-hero.jpg" alt="Headphones image"/>
                <div className="relative z-2 max-w-[328px] tablet:max-w-[379px] desktop:max-w-[398px] desktop:pl-4 flex flex-col justify-center items-center desktop:items-start gap-6">
                    <span className="text-[14px] tracking-[10px] text-[#8C8C8C]">NEW PRODUCT</span>
                    <span className="font-bold tracking-[1.29px] leading-[40px] text-[36px] tablet:text-[56px] tablet:leading-[58px] tablet:tracking-[2px]">XX99 MARK II HEADPHONES</span>
                    <span className="text-[15px] leading-[25px] tracking-0 font-medium text-[#C6C6C6] tablet:max-w-[349px]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</span>
                    <Button type="primary">see product</Button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;