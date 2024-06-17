"use client"

import React, {useState} from 'react';
import TabItemGroup from "@/app/_components/group-components/TabItemGroup";
import PageHeader from "@/app/_components/PageHeader";
import {DestinationsData} from "@/app/data";
import {Destination} from "@/app/interfaces";

function Page() {
    const [curDestination, setCurDestination] = useState<Destination>("moon");

    return (

            <div className="text-white p-6 flex flex-col items-center flex-grow text-center tablet:gap-[16px] desktop:max-w-[1110px] desktop:mx-auto">
                <PageHeader>
                    01 PICK YOUR DESTINATION
                </PageHeader>
                <div className="flex flex-grow flex-col desktop:grid desktop:grid-cols-2 desktop:items-center desktop:my-auto desktop:flex-grow desktop:gap-[32px]">
                    <div className="h-[150px] w-[150px] tablet:h-[300px] tablet:w-[300px] desktop:h-[480px] desktop:w-[480px] mx-auto my-12">
                        <img src={`/destination/image-${curDestination}.png`} alt="Destination planet"/>
                    </div>
                    <div className="flex flex-grow flex-col text-center items-center gap-[16px]">
                        <div className="flex gap-[32px] desktop:self-start">
                            <TabItemGroup active={curDestination} onClick={setCurDestination}/>
                        </div>
                        <h2 className="mobile-heading-l tablet:tablet-heading-l uppercase mt-[16px] desktop:self-start">
                            {DestinationsData[curDestination].name}
                        </h2>
                        <p className="mobile-body mb-auto desktop:text-start desktop:h-20">
                            {DestinationsData[curDestination].description}
                        </p>
                        <div className="flex flex-col tablet:flex-row desktop:grid desktop:grid-cols-2 gap-6 w-full justify-evenly desktop:text-start desktop:mt-10">
                            <div className="mb-[16px]">
                                <h3 className="subheading-s mb-[12px]">AVG. DISTANCE</h3>
                                <span className="subheading-l">{DestinationsData[curDestination].distance}</span>
                            </div>
                            <div>
                                <h3 className="subheading-s mb-[12px]">EST. TRAVEL TIME</h3>
                                <span className="subheading-l">{DestinationsData[curDestination].time}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Page;