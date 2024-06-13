import React, {SetStateAction} from 'react';

type CrewMember  = "mark-shuttleworth" | "victor-glover" | "douglas-hurley" | "anousheh-ansari"

function SmallPagination({active, onClick}: {active: boolean, onClick: ()=>void}) {
    return (
        <button onClick={onClick} className={`h-[10px] w-[10px] desktop:h-[15px] desktop:w-[15px] rounded-full ${active ? "bg-white" : "bg-[#36373F] hover:bg-grey"}`}></button>
    );
}

export default SmallPagination;