"use client"

import React, {useState} from 'react';
import SmallPaginationGroup from "@/app/_components/group-components/SmallPaginationGroup";
import PageHeader from "@/app/_components/PageHeader";
import {CrewMember} from "@/app/interfaces";
import {MembersData} from "@/app/data";

function Page() {
    const [curMember, setCurMember] = useState<CrewMember>("victor-glover")

    return (
        <div className="text-white p-6 flex flex-col items-center flex-grow text-center gap-[16px] desktop:max-w-[1110px] desktop:mx-auto">
            <PageHeader>
                02 MEET YOUR CREW
            </PageHeader>
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
                <div className="h-[340px] w-[271px] tablet:h-[560px] tablet:w-[447px] desktop:h-[676px] desktop:w-[539px] mx-auto mb-[32px] mt-8 desktop:my-0 relative">
                    <div className="before:bg-gradient-to-b before:from-transparent before:via-transparent before:via-90% before:to-[#0B0D17] before:absolute before:content-[''] before:z-10 before:w-full before:h-full before:block before:clip before:pointer-events-none before:inset-0"/>
                    <img className="h-full w-full" src={`/crew/image-${curMember}.png`} alt="Crew member"/>
                </div>
            </div>
        </div>
    );
}

export default Page;