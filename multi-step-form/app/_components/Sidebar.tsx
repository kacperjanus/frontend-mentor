import React from 'react';
import SideStep from "@/app/_components/SideStep";

function Sidebar({stepNumber, stepsData}: { stepNumber: number, stepsData: string[] }) {
    return (
        <div className="justify-self-start">
            <div className="flex md:flex-col md:justify-start justify-center pb-20 md:gap-3 lg:gap-8 h-full md:w-[14rem] lg:w-[17rem] bg-cover bg-sidebarMobile md:bg-sidebar bg top-8 left-0 w-full gap-4 pt-10 md:rounded-lg lg:transition-all lg:duration-500">
                {stepsData.map((el, i)=> <SideStep key={i} title={el} no={i} active={stepNumber-1}/>)}
                <SideStep title={"Summary"} no={stepsData.length} active={stepNumber-1}/>
            </div>
        </div>
    );
}

export default Sidebar;