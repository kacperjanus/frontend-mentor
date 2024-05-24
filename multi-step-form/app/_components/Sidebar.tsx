import React from 'react';
import SideStep from "@/app/_components/SideStep";

function Sidebar({stepNumber}: {stepNumber: number}) {
    return (
        <div className="bg-no-repeat relative">
            <img className="h-full w-[34rem]" src="/bg-sidebar-desktop.svg"/>
            <div className="flex flex-col gap-8 absolute top-8 left-0">
            <SideStep title="YOUR INFO" no={1} active={stepNumber}/>
            <SideStep title="SELECT PLAN" no={2} active={stepNumber}/>
            <SideStep title="ADD-ONS" no={3} active={stepNumber}/>
            <SideStep title="SUMMARY" no={4} active={stepNumber}/>
            </div>
        </div>
    );
}

export default Sidebar;