import React from 'react';
import Button from "@/app/_components/Button";

interface HeroSectionProps {
    name: string,
    description: string,
    header: string,
    image: string[]
}

function HeroSection({name, description, header, image}: HeroSectionProps) {
    return (
        <div className="bg-[#191919]">
            <div className="w-full desktop:max-w-[1100px] desktop:mx-auto h-[510px] desktop:h-[639px] tablet:h-[729px] desktop: flex flex-col items-center justify-center text-center desktop:text-start desktop:items-start text-white relative overflow-hidden">
                <img className="absolute tablet:hidden top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-1" src={image[0]} alt="Headphones image"/>
                <img className="hidden tablet:block tablet:absolute desktop:hidden top-[45%] scale-110 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1" src={image[1]} alt="Headphones image"/>
                <img className="hidden desktop:block absolute scale-[1.35] -top-[2%]" src={image[2]} alt="Headphones image"/>
                <div className="relative z-2 max-w-[328px] tablet:max-w-[379px] desktop:max-w-[398px] desktop:pl-4 flex flex-col justify-center items-center desktop:items-start gap-6">
                    <span className="text-[14px] tracking-[10px] text-[#8C8C8C] uppercase">{header}</span>
                    <span className="font-bold tracking-[1.29px] leading-[40px] text-[36px] tablet:text-[56px] tablet:leading-[58px] tablet:tracking-[2px]">{name}</span>
                    <span className="text-[15px] leading-[25px] tracking-0 font-medium text-[#C6C6C6] tablet:max-w-[349px]">{description}</span>
                    <Button type="primary">see product</Button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;