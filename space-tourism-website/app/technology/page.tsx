"use client"

import React, {useState} from 'react';
import LargePaginationGroup from "@/app/_components/group-components/LargePaginationGroup";
import PageHeader from "@/app/_components/PageHeader";
import {TechnologiesData} from "@/app/data";
import {Technology} from "@/app/interfaces";

function Page() {
    const [curTechnology, setCurTechnology] = useState<Technology>("launch-vehicle");

    return (
            <div
                className="text-white p-6 flex flex-col items-center flex-grow text-center gap-[16px] desktop:max-w-[1310px] desktop:mx-auto">
                <PageHeader>
                    03 SPACE LAUNCH 101
                </PageHeader>
                <div className="flex flex-grow flex-col desktop:grid desktop:grid-cols-[1.25fr_1fr] desktop:gap-[32px] tablet:max-w-[512px] desktop:max-w-[1110px] desktop:items-center">
                    <div className="w-full desktop:order-1 mx-auto my-8 desktop:mb-0">
                        <img className="hidden desktop:block w-full" src={`/technology/image-${curTechnology}-portrait.jpg`}
                             alt="Technology used"/>
                        <img className="desktop:hidden block w-full" src={`/technology/image-${curTechnology}-landscape.jpg`}
                             alt="Technology used"/>
                    </div>
                    <div className="flex flex-grow flex-col desktop:h-[304px] desktop:flex-row text-center items-center desktop:items-start gap-[16px]">
                            <LargePaginationGroup active={curTechnology} onClick={setCurTechnology}/>
                        <div className="h-full">
                            <div className="flex flex-col gap-4 w-full justify-evenly desktop:justify-start desktop:items-start desktop:mb-6">
                                <div className="mt-10 desktop:my-0">
                                    <span className="mobile-heading-s tablet:tablet-heading-s desktop:heading-s uppercase text-grey">THE TERMINOLOGY...</span>
                                </div>
                                <h2 className="mobile-heading-m tablet:tablet-heading-m desktop:heading-m uppercase tablet:mt-4 mb-[24px] desktop:my-0 desktop:text-start">
                                    {TechnologiesData[curTechnology].title}
                                </h2>
                            </div>
                            <p className="mobile-body desktop:body desktop:text-start">
                                {TechnologiesData[curTechnology].description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Page;