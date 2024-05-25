"use client"

import React from 'react';
import Button from "@/app/_components/Button";
import PlanPricingOption from "@/app/_components/PlanPricingOption";



function StepTwo({isMonthly, setIsMonthly, setStepNumber}: {isMonthly: boolean, setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>, setStepNumber: React.Dispatch<React.SetStateAction<number>>}) {

    const increaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s+1)
    }

    const decreaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s-1)
    }

    return (
        <div className="flex flex-col mt-4 h-full justify-between">
            <div className="flex flex-col gap-8">
            <div className="flex justify-between">
                <PlanPricingOption isMonthly={isMonthly} image="/icon-arcade.svg" title="Arcade" price={{monthly: 9, yearly: 90}} />
                <PlanPricingOption isMonthly={isMonthly} image="/icon-advanced.svg" title="Advanced" price={{monthly: 12, yearly: 120}} />
                <PlanPricingOption isMonthly={isMonthly} image="/icon-pro.svg" title="Pro" price={{monthly: 15, yearly: 150}} />
            </div>
                <div className="bg-magnolia rounded-lg h-12 flex justify-center items-center gap-6">
                    <p className={`${isMonthly ? "font-bold text-marine-blue": "text-cool-gray"}`}>Monthly</p>
                    <label className="switch">
                        <input value={isMonthly? "true" : "false"} onChange={()=>setIsMonthly(s=>!s)} type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                    <p className={`${!isMonthly ? "font-bold text-marine-blue": "text-cool-gray"}`}>Yearly</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
            <div>
                    <Button setStepNumber={decreaseStep} content="Go Back" backButton={true}/>
                </div>
                <div className="mb-4">

                <Button setStepNumber={increaseStep} content="Next Step"/>
                </div>
            </div>
        </div>
    );
}

export default StepTwo;