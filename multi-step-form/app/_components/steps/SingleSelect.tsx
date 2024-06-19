"use client"

import React from 'react';
import Button from "@/app/_components/Button";
import PlanPricingOption from "@/app/_components/PlanPricingOption";
import {InitialValuesInterface, PlanOption, singleSelectOption} from "@/app/interfaces";

interface SingleSelectProps {
    isMonthly?: boolean,
    setIsMonthly?: React.Dispatch<React.SetStateAction<boolean>>,
    setStepNumber: React.Dispatch<React.SetStateAction<number>>,
    selectedPlan?: string,
    setSelectedPlan?: React.Dispatch<React.SetStateAction<PlanOption>>,
    fields: any,
    values: any,
    setValues: any
}

function SingleSelect({isMonthly, setIsMonthly, setStepNumber, selectedPlan, setSelectedPlan, fields, values, setValues}: SingleSelectProps) {

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
                {fields.map((option: singleSelectOption)=> <PlanPricingOption key={option.optionTitle} isMonthly={values.isMonthly} image={option.image} title={option.optionTitle} description={option.optionDescription} selectedPlan={values.selectedPlan} setSelectedPlan={(value)=>setValues({...values, selectedPlan: value})} />)}
            </div>
                <div className={`${isMonthly ? "md:mt-[1.25rem] mt-[3.75rem]" : ""} bg-magnolia rounded-lg h-12 flex justify-center items-center gap-6`}>
                    <p className={`${isMonthly ? "font-bold text-marine-blue" : "text-cool-gray"} w-16`}>Monthly</p>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={values.isMonthly} onChange={() => setValues((s: InitialValuesInterface)=> {
                            return {...s, "isMonthly": !s.isMonthly}
                        })} className="sr-only peer" />
                        <input type="checkbox" checked={values.isMonthly} className="sr-only peer" readOnly />
                        <div
                            className="relative w-9 h-5 bg-marine-blue rounded-full peer peer-checked:after:translate-x-[-150%] after:content-[''] after:absolute after:top-1 after:start-[21px] after:bg-white  after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
                    </label>
                    <p className={`${!values.isMonthly ? "font-bold text-marine-blue" : "text-cool-gray"} w-16`}>Yearly</p>
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