"use client"

import React, {useState} from 'react';
import SmallPaginationGroup from "@/app/_components/group-components/SmallPaginationGroup";
import Header from "@/app/_components/Header";

type CrewMember  = "mark-shuttleworth" | "victor-glover" | "douglas-hurley" | "anousheh-ansari"

const MembersData = {
    "douglas-hurley": {
        name: "Douglas Hurley",
        position: "commander",
        description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    "mark-shuttleworth": {
        name: "Mark Shuttleworth",
        position: "mission specialist",
        description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    "victor-glover": {
        name: "Victor Glover",
        position: "pilot",
        description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    "anousheh-ansari": {
        name: "Anousheh Ansari",
        position: "flight engineer",
        description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
}

function Page() {
    const [curMember, setCurMember] = useState("victor-glover" as CrewMember)

    return (
        <div
            className="min-h-screen overflow-hidden bg-crew-mobile tablet:bg-crew-tablet desktop:bg-crew-desktop bg-no-repeat bg-cover bg-bottom desktop:bg-right flex flex-col h-full">
            <Header/>
        <div className="text-white p-6 flex flex-col items-center flex-grow text-center gap-[16px] desktop:max-w-[1110px] desktop:mx-auto">
            <h2 className="mobile-heading-xs tablet:tablet-heading-xs desktop:heading-xs mb-6 mt-6 tablet:self-start ">
                <span className="text-grey font-bold">02</span> MEET YOUR CREW
            </h2>
            <div className="flex flex-grow flex-col desktop:grid desktop:grid-cols-2 desktop:items-center desktop:my-auto desktop:flex-grow desktop:gap-[32px] tablet:max-w-[512px] desktop:max-w-[1110px]">
                <div className="flex flex-col text-center items-center desktop:text-left gap-[16px]">
                    <span className="mobile-heading-s tablet:tablet-heading-s desktop:heading-s uppercase text-grey tablet:mt-10 desktop:self-start">{MembersData[curMember].position}</span>
                    <h2 className="mobile-heading-m tablet:tablet-heading-m desktop:heading-m uppercase tablet:mt-4 mb-[24px] desktop:self-start tablet:h-20">
                        {MembersData[curMember].name}
                    </h2>
                    <p className="mobile-body desktop:body desktop:text-start desktop:mb-10 h-40 tablet:h-28">
                        {MembersData[curMember].description}
                    </p>
                    <div className="desktop:self-start">
                        <SmallPaginationGroup active={curMember} onClick={setCurMember}/>
                    </div>
                </div>
                <div className="h-[340px] w-[271px] tablet:h-[560px] tablet:w-[447px] desktop:h-[676px] desktop:w-[539px] mx-auto mb-[32px] mt-8 desktop:my-0">
                    <img src={`/crew/image-${curMember}.png`} alt="Moon"/>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Page;