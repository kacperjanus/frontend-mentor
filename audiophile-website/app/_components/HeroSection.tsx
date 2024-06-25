import React from 'react';
import Button from "@/app/_components/Button";

function HeroSection() {
    return (
        <div className="w-full h-[510px] flex flex-col items-center justify-center text-center text-white relative">
            <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" src="/assets/home/mobile/image-header.jpg" alt="Headphones image"/>
            <span className="text-[14px] tracking-[10px] text-[#CFCFCF]">NEW PRODUCT</span>
            <span className="font-bold text-[36px]">XX99 MARK II HEADPHONES</span>
            <span>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</span>
            <Button type="primary">see product</Button>
        </div>
    );
}

export default HeroSection;