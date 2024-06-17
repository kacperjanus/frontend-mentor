import React, {SetStateAction} from 'react';
import LargePagination from "@/app/_components/single-components/LargePagination";
import {Technology} from "@/app/interfaces";

function LargePaginationGroup({active, onClick, values}: {active: Technology, onClick: React.Dispatch<SetStateAction<string>>, values: string[]}) {
    return (
        <div className="flex gap-4 desktop:flex-col desktop:gap-8">
            {values.map((value, index) => (<LargePagination key={value} active={active===value} onClick={()=>onClick(value)}>{index+1}</LargePagination>))}
        </div>
    );
}

export default LargePaginationGroup;