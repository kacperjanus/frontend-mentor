"use client"

import React, {MouseEventHandler, SetStateAction} from 'react';
import {PlanOption} from "@/app/interfaces";

interface PlanPricingOptionProps {
    image: string;
    title: PlanOption;
    price: {
        monthly: number,
        yearly: number
    };
    isMonthly: boolean;
    selectedPlan: string;
    setSelectedPlan: React.Dispatch<SetStateAction<PlanOption>>;
}

function PlanPricingOption({image, title, price, isMonthly, selectedPlan, setSelectedPlan}: PlanPricingOptionProps) {
    const setCurrentPlan: MouseEventHandler<HTMLDivElement> = ()=> setSelectedPlan(title);

    return (
        <div onClick={setCurrentPlan} className={`border-solid flex gap-3 md:gap-0 md:block border-light-gray border-[1px] p-4 rounded-lg w-full md:w-[9.5rem] lg:w-[8rem] xl:w-[9.5rem] hover:border-marine-blue ${selectedPlan === title ? "border-marine-blue bg-magnolia":""} cursor-pointer`}>
            <img className="md:pb-14" src={image} alt={title} />
            <div>
                <p className="font-semibold text-marine-blue">{title}</p>
                <p className="text-cool-gray">${isMonthly ? price.monthly : price.yearly}/{isMonthly ? "mo" : "year"}</p>
                {isMonthly ? "" : <p className="text-marine-blue text-sm">2 months free</p>}
            </div>
        </div>
    );
}

export default PlanPricingOption;