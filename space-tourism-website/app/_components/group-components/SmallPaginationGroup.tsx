import React, {SetStateAction} from 'react';
import SmallPagination from "@/app/_components/single-components/SmallPagination";

type CrewMember  = "mark-shuttleworth" | "victor-glover" | "douglas-hurley" | "anousheh-ansari"

function SmallPaginationGroup({active, onClick, values}: {active: CrewMember, onClick: React.Dispatch<SetStateAction<string>>, values: string[]}) {
    return (
        <div className="flex gap-4 desktop:gap-10">
            {values.map((value) => <SmallPagination key={value} active={active===value} onClick={()=>onClick(value)}/>)}
        </div>
    );
}

export default SmallPaginationGroup;