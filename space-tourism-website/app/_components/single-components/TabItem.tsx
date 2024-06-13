import React, {ReactNode, SetStateAction} from 'react';

type Destination = "moon" | "mars" | "europa" | "titan";

function TabItem({children, onClick, value, active}: {children: ReactNode, onClick: React.Dispatch<SetStateAction<Destination>>, value: Destination, active: boolean}) {
    const onClickFunction: React.MouseEventHandler<HTMLDivElement> = ()=>{
        onClick(value);
    }
    return (
        <div onClick={onClickFunction} className={`mobile-nav-text tablet:nav-text h-8 cursor-pointer uppercase pb-[16px] border-b-transparent border-b-[3px] transition-all duration-200 ${active ? "border-b-white" : "hover:border-b-[#85868A]"}`}>{children}</div>
    );
}

export default TabItem;