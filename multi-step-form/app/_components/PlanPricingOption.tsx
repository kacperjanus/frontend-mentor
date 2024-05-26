"use client"

import React, {MouseEventHandler, SetStateAction} from 'react';

interface PlanPricingOptionProps {
image: string; title: string, price: {monthly: number, yearly: number}, isMonthly: boolean, selectedPlan: string, setSelectedPlan: React.Dispatch<SetStateAction<string>>
}

function PlanPricingOption({image, title, price, isMonthly, selectedPlan, setSelectedPlan}: PlanPricingOptionProps) {
    const setCurrentPlan: MouseEventHandler<HTMLDivElement> = ()=> setSelectedPlan(title);

    return (
        <div onClick={setCurrentPlan} className={`border-solid border-light-gray border-[1px] p-4 rounded-lg w-[9.5rem] hover:border-marine-blue ${selectedPlan === title ? "border-marine-blue bg-magnolia":""} cursor-pointer`}>
            <img className="pb-14" src={image} alt={title} />
            <p className="font-semibold text-marine-blue">{title}</p>
            <p className="text-cool-gray">${isMonthly ? price.monthly : price.yearly}/{isMonthly ? "mo" : "year"}</p>
            {isMonthly ? "" : <p className="text-marine-blue text-sm">2 months free</p>}
        </div>
    );
}

export default PlanPricingOption;