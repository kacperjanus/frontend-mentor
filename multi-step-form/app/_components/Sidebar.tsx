import React from 'react';
import SideStep from "@/app/_components/SideStep";

function Sidebar({stepNumber}: { stepNumber: number }) {
    return (
        <div className="relative justify-self-start">
            {/*<picture className="h-full md:w-[20rem] lg:w-[34rem]">*/}
            {/*    <source media="(max-width: 768px)" srcSet="/bg-sidebar-mobile.svg"/>*/}
            {/*    <img src="/bg-sidebar-desktop.svg"/>*/}
            {/*</picture>*/}
            <img className="h-full md:w-[20rem] md:block hidden lg:w-[34rem]" src="/bg-sidebar-desktop.svg"/>
            <img className="h-full md:w-[20rem] md:hidden block lg:w-[34rem]" src="/bg-sidebar-mobile.svg"/>
            <div className="flex md:flex-col md:gap-3 lg:gap-8 absolute top-8 left-0 w-full justify-center gap-4">
                <SideStep title="YOUR INFO" no={1} active={stepNumber}/>
                <SideStep title="SELECT PLAN" no={2} active={stepNumber}/>
                <SideStep title="ADD-ONS" no={3} active={stepNumber}/>
                <SideStep title="SUMMARY" no={4} active={stepNumber}/>
            </div>
        </div>
    );
}

// <picture>
//     <source media="(min-width: 900px)" srcSet="BigImage.png"/>
//     <source media="(min-width: 480px)" srcSet="MediumImage.png"/>
//     <img src="OtherImage.png" alt="IfItDoesntMatchAnyMedia"/>
// </picture>

export default Sidebar;