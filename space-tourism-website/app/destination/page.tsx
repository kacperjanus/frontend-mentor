"use client"

import React, {useState} from 'react';
import TabItemGroup from "@/app/_components/group-components/TabItemGroup";
import Header from "@/app/_components/Header";
import PageHeader from "@/app/_components/PageHeader";

type Destination = "moon" | "mars" | "europa" | "titan";

interface DestinationData {
    name: string;
    description: string;
    distance: string;
    time: string;
}

const DestinationsData: Record<Destination, DestinationData> = {
    "moon": {
        name: "Moon",
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 KM",
        time: "3 DAYS",
    },
    "mars": {
        name: "Mars",
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 MIL. KM",
        time: "9 MONTHS",
    },
    "europa": {
        name: "Europa",
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 MIL. KM",
        time: "3 YEARS",
    },
    "titan": {
        name: "Titan",
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 BIL. KM",
        time: "7 YEARS",
    }
}

function Page() {
    const [curDestination, setCurDestination] = useState<Destination>("moon");

    return (
        <div className="min-h-screen bg-destination-mobile tablet:bg-destination-tablet desktop:bg-destination-desktop bg-no-repeat bg-cover bg-bottom desktop:bg-right flex flex-col h-full">
            <Header/>
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
        </div>
    );
}

export default Page;