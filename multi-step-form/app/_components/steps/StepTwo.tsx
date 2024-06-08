"use client"

import React from 'react';
import Button from "@/app/_components/Button";
import PlanPricingOption from "@/app/_components/PlanPricingOption";
import {Plan, PlanOption} from "@/app/interfaces";

interface StepTwoProps {
    isMonthly: boolean,
    setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>,
    setStepNumber: React.Dispatch<React.SetStateAction<number>>,
    selectedPlan: string,
    setSelectedPlan: React.Dispatch<React.SetStateAction<PlanOption>>,
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
            <div className="flex md:flex-row flex-col gap-3 md:gap-0 justify-between">
                {plans.map((plan: Plan)=> <PlanPricingOption key={plan.title} isMonthly={isMonthly} image={plan.image} title={plan.title} price={plan.price} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />)}
            </div>
                <div className="bg-magnolia rounded-lg h-12 flex justify-center items-center gap-6">
                    <p className={`${isMonthly ? "font-bold text-marine-blue" : "text-cool-gray"}`}>Monthly</p>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={isMonthly} onChange={() => setIsMonthly(s => !s)} className="sr-only peer" />
                        <div
                            className="relative w-9 h-5 bg-marine-blue rounded-full peer peer-checked:after:translate-x-[-150%] after:content-[''] after:absolute after:top-1 after:start-[21px] after:bg-white  after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
                    </label>
                    <p className={`${!isMonthly ? "font-bold text-marine-blue" : "text-cool-gray"}`}>Yearly</p>
                </div>
            </div>

            <div className="flex md:justify-between items-center fixed bg-white justify-center gap-24 md:static bottom-0 right-0 self-end md:bg-none w-full">
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