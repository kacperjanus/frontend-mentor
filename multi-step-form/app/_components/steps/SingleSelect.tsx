"use client"

import React, {SetStateAction} from 'react';
import Button from "@/app/_components/Button";
import PlanPricingOption from "@/app/_components/PlanPricingOption";
import {InitialValuesInterface, PlanOption, singleSelectOption} from "@/app/interfaces";
import NavigationButtons from "@/app/_components/NavigationButtons";
import {step} from "next/dist/experimental/testmode/playwright/step";

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
    return (
        <div className="flex flex-col my-4 h-full justify-between">
            <div className="flex flex-col gap-8">
                <div className="flex md:flex-row flex-col gap-3 md:gap-0 justify-between">
                    {fields.map((option: singleSelectOption, i: number)=> <PlanPricingOption key={option.optionTitle} index={i} image={option.image} title={option.optionTitle} description={option.optionDescription} selectedPlan={values[stepNumber-1]} setSelectedPlan={(value)=>setValues(values.with(stepNumber-1, value))} />)}
                </div>
            </div>
            <NavigationButtons step={stepNumber} setStepNumber={setStepNumber}/>
        </div>
    );
}

export default SingleSelect;