"use client"

import React, {useState} from 'react';

interface AddOnSelectorProps {
    title: string,
    description: string,
    isMonthly: boolean,
    price: {monthly: number, yearly: number}
    key?: string
}

function AddOnSelector({title, description, isMonthly, price} : AddOnSelectorProps) {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div className={`${isChecked ? "bg-magnolia border-marine-blue" : "border-light-gray"} border-[1px] border-solid rounded-lg py-4 px-5 flex items-center justify-between`}>
            <div className="flex gap-8">
                <input type="checkbox" value={isChecked ? "true" : "false"} onChange={()=>setIsChecked(s=>!s)}/>
                <div>
                    <p className="font-bold text-marine-blue">{title}</p>
                    <p className="text-cool-gray">{description}</p>
                </div>
            </div>
            <p className="text-purplish-blue">+${isMonthly ? price.monthly : price.yearly}/{isMonthly ? "mo" : "year"}</p>
        </div>
    );
}

export default AddOnSelector;