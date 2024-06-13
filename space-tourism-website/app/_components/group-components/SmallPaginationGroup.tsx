import React, {SetStateAction} from 'react';
import SmallPagination from "@/app/_components/single-components/SmallPagination";

type CrewMember  = "mark-shuttleworth" | "victor-glover" | "douglas-hurley" | "anousheh-ansari"

function SmallPaginationGroup({active, onClick}: {active: CrewMember, onClick: React.Dispatch<SetStateAction<CrewMember>>}) {
    return (
        <div className="flex gap-4 desktop:gap-10">
            <SmallPagination onClick={()=>onClick("mark-shuttleworth")} active={active==="mark-shuttleworth"}/>
            <SmallPagination onClick={()=>onClick("victor-glover")} active={active==="victor-glover"}/>
            <SmallPagination onClick={()=>onClick("douglas-hurley")} active={active==="douglas-hurley"}/>
            <SmallPagination onClick={()=>onClick("anousheh-ansari")} active={active==="anousheh-ansari"}/>
        </div>
    );
}

export default SmallPaginationGroup;