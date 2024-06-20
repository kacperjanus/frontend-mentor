"use client"

import React, {useState} from 'react';
import {InitialValuesInterface} from "@/app/interfaces";

interface AddOnSelectorProps {
    title: string,
    description: string,
    primary: string,
    index: number
    setValues: React.Dispatch<React.SetStateAction<InitialValuesInterface>>
    values: InitialValuesInterface
    stepNumber: number
}

function AddOnSelector({title, description, primary, index, setValues, values, stepNumber} : AddOnSelectorProps) {
    const [isChecked, setIsChecked] = useState<boolean>(values[stepNumber-1][index])

    function handleCheck(){
        setIsChecked(s => !s);
        setValues(values.with(stepNumber-1, values[stepNumber-1].map((value: boolean, i:number) => (i === index ? !value : value))))
    }

    return (
        <div onClick={handleCheck} className={`${isChecked ? "bg-magnolia border-marine-blue" : "border-light-gray"} cursor-pointer hover:border-marine-blue border-[1px] border-solid rounded-lg py-4 px-4 md:px-5 flex items-center justify-between`}>
            <div className="flex gap-4 md:gap-8 items-center text-xs md:text-base">
                <input type="checkbox" className="relative peer cursor-pointer appearance-none w-5 h-5 border-[1px] border-light-gray rounded-md bg-white checked:bg-purplish-blue checked:border-none" checked={isChecked} readOnly />
                <img className="absolute w-3 h-3 peer-checked:block hidden ml-1" src="/icon-checkmark.svg"/>
                <div>
                    <p className="font-bold text-marine-blue">{title}</p>
                    <p className="text-cool-gray">{description}</p>
                </div>
            </div>
            <p className="text-purplish-blue md:text-base text-xs">{primary}</p>
        </div>
    );
}

export default AddOnSelector;