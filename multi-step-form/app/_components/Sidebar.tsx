import React from 'react';
import SideStep from "@/app/_components/SideStep";

function Sidebar() {
    return (
        <div className="bg-no-repeat h-full relative">
            <img src="/bg-sidebar-desktop.svg"/>
            <div className="flex flex-col gap-8 absolute top-8 left-0">
            <SideStep title="YOUR INFO" no={1} active={true}/>
            <SideStep title="SELECT PLAN" no={2}/>
            <SideStep title="ADD-ONS" no={3}/>
            <SideStep title="SUMMARY" no={4}/>
            </div>
        </div>
    );
}

export default Sidebar;