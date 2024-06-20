"use client"

import React, {SetStateAction} from 'react';
import SingleSelectOption from "@/app/_components/SingleSelectOption";
import {InitialValuesInterface, singleSelectOption} from "@/app/interfaces";
import NavigationButtons from "@/app/_components/NavigationButtons";

interface SingleSelectProps {
    setStepNumber: React.Dispatch<React.SetStateAction<number>>,
    fields: singleSelectOption[],
    values: InitialValuesInterface,
    setValues: React.Dispatch<SetStateAction<InitialValuesInterface>>,
    stepNumber: number
}

function SingleSelect({setStepNumber, fields, values, setValues, stepNumber}: SingleSelectProps) {
    return (
        <div className="flex flex-col my-4 h-full justify-between">
            <div className="flex flex-col gap-8">
                <div className="flex md:flex-row flex-col gap-3 md:gap-0 justify-between">
                    {fields.map((option: singleSelectOption, i: number)=> <SingleSelectOption key={option.optionTitle} index={i} image={option.image} title={option.optionTitle} description={option.optionDescription} selectedOption={values[stepNumber-1]} setSelectedOption={(value)=>setValues(values.with(stepNumber-1, value))} />)}
                </div>
            </div>
            <NavigationButtons step={stepNumber} setStepNumber={setStepNumber}/>
        </div>
    );
}

export default SingleSelect;