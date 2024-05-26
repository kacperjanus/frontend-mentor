"use client"

import React from 'react';
import Button from "@/app/_components/Button";
import PlanPricingOption from "@/app/_components/PlanPricingOption";
import {Plan} from "@/app/interfaces";

interface StepTwoProps {
    isMonthly: boolean,
    setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>,
    setStepNumber: React.Dispatch<React.SetStateAction<number>>,
    selectedPlan: string,
    setSelectedPlan: React.Dispatch<React.SetStateAction<string>>,
}

function StepTwo({isMonthly, setIsMonthly, setStepNumber, selectedPlan, setSelectedPlan}: StepTwoProps) {

    const increaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s+1)
    }

    const decreaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s-1)
    }

    const plans : Plan[] = [{title: "Arcade", image: "/icon-arcade.svg", price: {monthly: 9, yearly: 90} },
        {title: "Advanced", image: "/icon-advanced.svg", price: {monthly: 12, yearly: 120}},
        {title: "Pro", image: "/icon-pro.svg", price: {monthly: 15, yearly: 150}},
    ]

    return (
        <div className="flex flex-col mt-4 h-full justify-between">
            <div className="flex flex-col gap-8">
            <div className="flex justify-between">
                {plans.map((plan: Plan)=> <PlanPricingOption key={plan.title} isMonthly={isMonthly} image={plan.image} title={plan.title} price={plan.price} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />)}
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