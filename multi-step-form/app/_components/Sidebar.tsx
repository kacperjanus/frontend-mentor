import React from 'react';
import SideStep from "@/app/_components/SideStep";

function Sidebar({stepNumber}: { stepNumber: number }) {
    return (
        <div className="justify-self-start">
            <div className="flex md:flex-col md:justify-start justify-center pb-20 md:gap-3 lg:gap-8 h-full md:w-[14rem] lg:w-[17rem] bg-cover bg-sidebarMobile md:bg-sidebar bg top-8 left-0 w-full gap-4 pt-10 md:rounded-lg">
                <SideStep title="YOUR INFO" no={1} active={stepNumber}/>
                <SideStep title="SELECT PLAN" no={2} active={stepNumber}/>
                <SideStep title="ADD-ONS" no={3} active={stepNumber}/>
                <SideStep title="SUMMARY" no={[4, 5]} active={stepNumber}/>
            </div>
        </div>
    );
}

export default Sidebar;