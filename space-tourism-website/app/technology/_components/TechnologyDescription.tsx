import React, {SetStateAction} from 'react';
import {Technology} from "@/app/interfaces";
import LargePaginationGroup from "@/app/_components/group-components/LargePaginationGroup";
import {TechnologiesData} from "@/app/data";

function TechnologyDescription({curTechnology, setCurTechnology}: {curTechnology: Technology, setCurTechnology: React.Dispatch<SetStateAction<Technology>>}) {
    const values: Technology[] = ["launch-vehicle", "space-capsule", "spaceport"];

    return (
        <div
            className="flex flex-grow flex-col desktop:h-[304px] desktop:flex-row text-center items-center desktop:items-start gap-[16px]">
            <LargePaginationGroup active={curTechnology} onClick={setCurTechnology as React.Dispatch<SetStateAction<string>>} values={values}/>
            <div className="h-full">
                <div
                    className="flex flex-col gap-4 w-full justify-evenly desktop:justify-start desktop:items-start desktop:mb-6">
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
    );
}

export default TechnologyDescription;