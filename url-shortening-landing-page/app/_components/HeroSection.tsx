import React from 'react';
import ShortenBox from "@/app/_components/ShortenBox";

function HeroSection() {
    return (
        <div className="grid grid-cols-2 mt-10 mb-32 max-w-5xl mx-auto relative">
            <div className="flex flex-col justify-center">
                <h1 className="text-6xl font-bold leading-[1.1]">More than just shorter links</h1>
                <p className="text-base text-gray mb-10">Build your own brand&apos;s recognition and get detailed insights on how your links are performing</p>
                <button className="bg-cyan self-start px-6 py-2 rounded-full text-white hover:bg-[#9AE2E2]">Get Started</button>
            </div>
            <div>
                <img className="w-[100rem] translate-x-24" src="/illustration-working.svg"/>
            </div>
            <ShortenBox/>
        </div>
    );
}

export default HeroSection;