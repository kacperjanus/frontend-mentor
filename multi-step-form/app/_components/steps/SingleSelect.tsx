"use client"

import React, {SetStateAction} from 'react';
import Button from "@/app/_components/Button";
import PlanPricingOption from "@/app/_components/PlanPricingOption";
import {InitialValuesInterface, PlanOption, singleSelectOption} from "@/app/interfaces";

interface SingleSelectProps {
    isMonthly?: boolean,
    setIsMonthly?: React.Dispatch<React.SetStateAction<boolean>>,
    setStepNumber: React.Dispatch<React.SetStateAction<number>>,
    selectedPlan?: string,
    setSelectedPlan?: React.Dispatch<React.SetStateAction<number>>,
    fields: singleSelectOption[],
    values: InitialValuesInterface,
    setValues: React.Dispatch<SetStateAction<InitialValuesInterface>>,
    stepNumber: number
}

function SingleSelect({isMonthly, setIsMonthly, setStepNumber, selectedPlan, setSelectedPlan, fields, values, setValues, stepNumber}: SingleSelectProps) {

    const increaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s+1)
    }

    const decreaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s-1)
    }

    return (
        <div className="flex flex-col my-4 h-full justify-between">
            <div className="flex flex-col gap-8">
                <div className="flex md:flex-row flex-col gap-3 md:gap-0 justify-between">
                    {fields.map((option: singleSelectOption, i: number)=> <PlanPricingOption key={option.optionTitle} index={i} image={option.image} title={option.optionTitle} description={option.optionDescription} selectedPlan={values[stepNumber-1]} setSelectedPlan={(value)=>setValues(values.with(stepNumber-1, value))} />)}
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

export default SingleSelect;