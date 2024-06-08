import React from 'react';
import ShortenBox from "@/app/_components/ShortenBox";

function HeroSection() {
    return (
        <div className="grid md:grid-cols-2 grid-rows-[30rem,14rem] md:grid-rows-1 mt-10 mb-32 max-w-2xl lg:max-w-5xl mx-6 md:mx-auto relative items-center">
            <div className="flex flex-col justify-center gap-4 md:gap-0">
                <h1 className="text-center md:text-left text-4xl md:text-[2.8rem] lg:text-6xl font-bold leading-[1.1]">More than just shorter links</h1>
                <p className="text-center md:text-left text-base text-gray md:mb-10">Build your own brand&apos;s recognition and get detailed insights on how your links are performing</p>
                <button className="bg-cyan self-center md:self-start px-12 py-3 rounded-full text-white hover:bg-[#9AE2E2]">Get Started</button>
            </div>
            <div className="row-start-1 md:col-start-2">
                <img className="h-[400px] w-[580px] object-cover object-left md:h-fit md:translate-x-24" src="/illustration-working.svg"/>
            </div>
            <ShortenBox/>
        </div>
    );
}

export default HeroSection;