import React, {ReactNode, SetStateAction} from 'react';

type Destination = "moon" | "mars" | "europa" | "titan";

function TabItem({children, onClick, value}: {children: ReactNode, onClick: React.Dispatch<SetStateAction<Destination>>, value: Destination}) {
    const onClickFunction: React.MouseEventHandler<HTMLDivElement> = ()=>{
        onClick(value);
    }
    return (
        <div onClick={onClickFunction} className="mobile-nav-text tablet:nav-text h-8 cursor-pointer uppercase pb-[16px] border-b-transparent border-b-[3px] hover:border-b-[#85868A] active:border-b-white">{children}</div>
    );
}

export default TabItem;