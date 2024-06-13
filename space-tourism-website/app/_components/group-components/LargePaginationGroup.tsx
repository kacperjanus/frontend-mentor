import React, {SetStateAction} from 'react';
import LargePagination from "@/app/_components/single-components/LargePagination";

type technology = "launch-vehicle" | "spaceport" | "space-capsule";

function LargePaginationGroup({active, onClick}: {active: technology, onClick: React.Dispatch<SetStateAction<technology>>}) {
    return (
        <div className="flex gap-4 desktop:flex-col desktop:gap-8">
            <LargePagination onClick={()=>onClick("launch-vehicle")} active={active==="launch-vehicle"}>1</LargePagination>
            <LargePagination onClick={()=>onClick("spaceport")} active={active==="spaceport"}>2</LargePagination>
            <LargePagination onClick={()=>onClick("space-capsule")} active={active==="space-capsule"}>3</LargePagination>
        </div>
    );
}

export default LargePaginationGroup;