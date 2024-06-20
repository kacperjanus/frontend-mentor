"use client"

import React, {MouseEventHandler, SetStateAction} from 'react';

interface PlanPricingOptionProps {
    image: string;
    title: string;
    description: string,
    selectedPlan: number;
    setSelectedPlan: React.Dispatch<SetStateAction<number>>;
    index: number
}

function PlanPricingOption({image, title, description, selectedPlan, setSelectedPlan, index}: PlanPricingOptionProps) {
    const setCurrentPlan: MouseEventHandler<HTMLDivElement> = ()=> setSelectedPlan(index);

    return (
        <div onClick={setCurrentPlan} className={`border-solid flex gap-3 md:gap-0 md:block border-light-gray border-[1px] p-4 rounded-lg w-full md:w-[9.5rem] lg:w-[8rem] xl:w-[9.5rem] hover:border-marine-blue ${selectedPlan === index ? "border-marine-blue bg-magnolia":""} cursor-pointer`}>
            <img className="md:pb-14" src={image} alt={title} />
            <div>
                <p className="font-semibold text-marine-blue">{title}</p>
                <p className="text-cool-gray">{description}</p>
            </div>
        </div>
    );
}

export default PlanPricingOption;