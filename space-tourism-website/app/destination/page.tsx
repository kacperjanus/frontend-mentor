"use client"

import React, {useState} from 'react';
import TabItem from "@/app/_components/single-components/TabItem";


function Page() {
    type Destination = "moon" | "mars" | "europa" | "titan";

    const DestinationData = {
        "moon": {
            name: "Moon",
            description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective\n" +
                "                and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11\n" +
                "                landing sites.",
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

    const [curDestination, setCurDestination] = useState("moon" as Destination);

    return (
        <div className="text-white p-6 flex flex-col items-center flex-grow text-center gap-[16px]">
            <h2 className="mobile-heading-xs mb-6 mt-6">
                01 PICK YOUR DESTINATION
            </h2>
            <div className="h-[150px] w-[150px] mx-auto my-12 mb-[32px]">
                <img src={`/destination/image-${curDestination}.png`} alt="Moon"/>
            </div>
            <div className="flex gap-[32px]">
                <TabItem value={"moon"} onClick={setCurDestination}>Moon</TabItem>
                <TabItem value={"mars"} onClick={setCurDestination}>Mars</TabItem>
                <TabItem value={"europa"} onClick={setCurDestination}>Europa</TabItem>
                <TabItem value={"titan"} onClick={setCurDestination}>Titan</TabItem>
            </div>
            <h2 className="mobile-heading-l uppercase mt-[16px]">
                {DestinationData[curDestination].name}
            </h2>
            <p className="mobile-body mb-auto">
                {DestinationData[curDestination].description}
            </p>
            <div className="mb-[16px]">
                <h3 className="subheading-s mb-[12px]">AVG. DISTANCE</h3>
                <span className="subheading-l">{DestinationData[curDestination].distance}</span>
            </div>
            <div>
                <h3 className="subheading-s mb-[12px]">EST. TRAVEL TIME</h3>
                <span className="subheading-l">{DestinationData[curDestination].time}</span>
            </div>
        </div>
    );
}

export default Page;