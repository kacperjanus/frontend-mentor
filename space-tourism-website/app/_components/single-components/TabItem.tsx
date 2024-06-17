import React, {ReactNode, SetStateAction} from 'react';
import {Destination} from "@/app/interfaces";

function TabItem({children, onClick, value, active}: {children: ReactNode, onClick: React.Dispatch<SetStateAction<string>>, value: string, active: boolean}) {
    const onClickFunction: React.MouseEventHandler<HTMLDivElement> = ()=>{
        onClick(value as Destination);
    }
    return (
        <div onClick={onClickFunction} className={`mobile-nav-text tablet:nav-text h-8 cursor-pointer uppercase pb-[16px] border-b-transparent border-b-[3px] transition-all duration-200 ${active ? "border-b-white" : "hover:border-b-[#85868A]"}`}>{children}</div>
    );
}

export default TabItem;