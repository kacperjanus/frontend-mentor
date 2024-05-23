import React from 'react';
import Image from "next/image";

function MainArticle() {
    return (
        <div className="grid grid-cols-2 grid-rows-[1.75fr_1fr] min-h-full min-w-full gap-x-8 gap-y-8">
            <div className="col-span-2 relative">
                <Image fill src={"/image-web-3-desktop.jpg"} alt="Web 3 article image"/>
            </div>
            <div className="text-6xl font-[700] flex items-center"><h1>The Bright Future of Web 3.0?</h1></div>
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