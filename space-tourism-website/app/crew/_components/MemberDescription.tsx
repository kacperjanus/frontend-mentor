import React, {SetStateAction} from 'react';
import {MembersData} from "@/app/data";
import SmallPaginationGroup from "@/app/_components/group-components/SmallPaginationGroup";
import {CrewMember} from "@/app/interfaces";

function MemberDescription({curMember, setCurMember}: {curMember: CrewMember, setCurMember: React.Dispatch<SetStateAction<CrewMember>>}) {
    const values: CrewMember[] = ["douglas-hurley", "anousheh-ansari", "victor-glover", "mark-shuttleworth"];
    return (
        <div className="flex flex-col text-center items-center desktop:text-left gap-[16px]">
            <span
                className="mobile-heading-s tablet:tablet-heading-s desktop:heading-s uppercase text-grey tablet:mt-10 desktop:self-start">{MembersData[curMember].position}</span>
            <h2 className="mobile-heading-m tablet:tablet-heading-m desktop:heading-m uppercase tablet:mt-4 mb-[24px] desktop:self-start tablet:h-20">
                {MembersData[curMember].name}
            </h2>
            <p className="mobile-body desktop:body desktop:text-start desktop:mb-10 h-40 tablet:h-28">
                {MembersData[curMember].description}
            </p>
            <div className="desktop:self-start">
                <SmallPaginationGroup active={curMember} onClick={setCurMember as React.Dispatch<SetStateAction<string>>} values={values}/>
            </div>
        </div>
    );
}

export default MemberDescription;