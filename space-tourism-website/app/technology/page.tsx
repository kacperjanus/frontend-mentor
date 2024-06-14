"use client"

import React, {useState} from 'react';
import LargePaginationGroup from "@/app/_components/group-components/LargePaginationGroup";
import Header from "@/app/_components/Header";

const TechnologyData = {
    "launch-vehicle": {
        title: "Launch Vehicle",
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    "spaceport": {
        title: "Spaceport",
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    "space-capsule": {
        title: "Space Capsule",
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    }
}

type technology = "launch-vehicle" | "spaceport" | "space-capsule";

function Page() {
    const [curTechnology, setCurTechnology] = useState("launch-vehicle" as technology);
    return (
        <div className="min-h-screen bg-technology-mobile tablet:bg-technology-tablet desktop:bg-technology-desktop bg-no-repeat bg-cover bg-bottom desktop:bg-right flex flex-col h-full">
            <Header/>
            <div
                className="text-white p-6 flex flex-col items-center flex-grow text-center gap-[16px] desktop:max-w-[1310px] desktop:mx-auto">
                <h2 className="mobile-heading-xs tablet:tablet-heading-xs desktop:heading-xs mb-6 mt-6 tablet:self-start">
                    <span className="text-grey font-bold">03</span> SPACE LAUNCH 101
                </h2>
                <div className="flex flex-grow flex-col desktop:grid desktop:grid-cols-[1.25fr_1fr] desktop:gap-[32px] tablet:max-w-[512px] desktop:max-w-[1110px] desktop:items-center">
                    <div className="w-full desktop:order-1 mx-auto my-8 desktop:mb-0">
                        <img className="hidden desktop:block w-full" src={`/technology/image-${curTechnology}-portrait.jpg`}
                             alt="Moon"/>
                        <img className="desktop:hidden block w-full" src={`/technology/image-${curTechnology}-landscape.jpg`}
                             alt="Moon"/>
                    </div>
                    <div className="flex flex-grow flex-col desktop:h-[304px] desktop:flex-row text-center items-center desktop:items-start gap-[16px]">
                            <LargePaginationGroup active={curTechnology} onClick={setCurTechnology}/>
                        <div className="h-full">
                            <div className="flex flex-col gap-4 w-full justify-evenly desktop:justify-start desktop:items-start desktop:mb-6">
                                <div className="mt-10 desktop:my-0">
                                    <span className="mobile-heading-s tablet:tablet-heading-s desktop:heading-s uppercase text-grey">THE TERMINOLOGY...</span>
                                </div>
                                <h2 className="mobile-heading-m tablet:tablet-heading-m desktop:heading-m uppercase tablet:mt-4 mb-[24px] desktop:my-0 desktop:text-start">
                                    {TechnologyData[curTechnology].title}
                                </h2>
                            </div>
                            <p className="mobile-body desktop:body desktop:text-start">
                                {TechnologyData[curTechnology].description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;