import React from 'react';
import {CrewMember} from "@/app/interfaces";

function MemberImage({curMember}: {curMember: CrewMember}) {
    return (
        <div
            className="h-[340px] w-[271px] tablet:h-[560px] tablet:w-[447px] desktop:h-[676px] desktop:w-[539px] mx-auto mb-[32px] mt-8 desktop:my-0 relative">
            <div
                className="before:bg-gradient-to-b before:from-transparent before:via-transparent before:via-90% before:to-[#0B0D17] before:absolute before:content-[''] before:z-10 before:w-full before:h-full before:block before:clip before:pointer-events-none before:inset-0"/>
            <img className="h-full w-full" src={`/crew/image-${curMember}.png`} alt="Crew member"/>
        </div>
    );
}

export default MemberImage;