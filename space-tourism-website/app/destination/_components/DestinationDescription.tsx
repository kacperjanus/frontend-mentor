import React, {SetStateAction} from 'react';
import {Destination} from "@/app/interfaces";
import TabItemGroup from "@/app/_components/group-components/TabItemGroup";
import {DestinationsData} from "@/app/data";

function DestinationDescription({curDestination, setCurDestination}: {curDestination: Destination, setCurDestination: React.Dispatch<SetStateAction<Destination>>}) {
    return (
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
            <div
                className="flex flex-col tablet:flex-row desktop:grid desktop:grid-cols-2 gap-6 w-full justify-evenly desktop:text-start desktop:mt-10">
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
    );
}

export default DestinationDescription;