"use client"

import React from 'react';

function PlanPricingOption({image, title, price, isMonthly}: {image: string; title: string, price: {monthly: number, yearly: number}, isMonthly: boolean}) {
    return (
        <div className="border-solid border-light-gray border-[1px] p-4 rounded-lg w-[9.5rem] active:border-marine-blue active:bg-magnolia">
            <img className="pb-14" src={image} alt={title} />
            <p className="font-semibold text-marine-blue">{title}</p>
            <p className="text-cool-gray">${isMonthly ? price.monthly : price.yearly}/{isMonthly ? "mo" : "year"}</p>
            {isMonthly ? "" : <p className="text-marine-blue text-sm">2 months free</p>}
        </div>
    );
}

export default PlanPricingOption;