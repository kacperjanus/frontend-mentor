"use client"

import React, {useState} from 'react';

interface AddOnSelectorProps {
    title: string,
    description: string,
    isMonthly: boolean,
    price: {monthly: number, yearly: number}
    key?: string
    index: number
    setSelectedAddOns: React.Dispatch<React.SetStateAction<boolean[]>>
}

function AddOnSelector({title, description, isMonthly, price, index, setSelectedAddOns} : AddOnSelectorProps) {
    const [isChecked, setIsChecked] = useState(false)

    function handleCheck(){
        setIsChecked(s=>!s);
        setSelectedAddOns((s)=> s.map((value, i)=>(i===index ? !value : value)))
    }


    return (
        <div className={`${isChecked ? "bg-magnolia border-marine-blue" : "border-light-gray"} border-[1px] border-solid rounded-lg py-4 px-5 flex items-center justify-between`}>
            <div className="flex gap-8">
                <input type="checkbox" value={isChecked ? "true" : "false"} onChange={handleCheck}/>
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