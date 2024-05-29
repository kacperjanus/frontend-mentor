import React from 'react';
import Image from "next/image";

function MainArticle() {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-[1.75fr_1fr] min-h-full min-w-full gap-x-8 gap-y-8 md:mb-0 mb-14">
            <div className="md:col-span-2 relative h-80 w-full">
                <Image className="object-cover hidden md:block" fill src={"/image-web-3-desktop.jpg"} alt="Web 3 article image"/>
                <Image className="object-cover md:hidden" fill src={"/image-web-3-mobile.jpg"} alt="Web 3 article image"/>
            </div>
            <div className="text-[2.6rem] leading-none md:text-6xl font-[700] flex items-center"><h1>The Bright Future of Web 3.0?</h1></div>
            <div className="flex flex-col items-start gap-8  justify-between">
                <p className="text-dark-grayish-blue">
                    We dive into the next evolution of the web that claims to but the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                </p>
                <button className="bg-soft-red text-off-white text-md font-semibold px-8 py-3 tracking-widest">
                    READ MORE
                </button>
            </div>
        </div>
    );
}

export default MainArticle;