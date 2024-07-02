"use client"

import React, {SetStateAction} from 'react';
import SingleSelectOption from "@/app/_components/SingleSelectOption";
import {InitialValuesInterface, singleSelectOption} from "@/app/interfaces";
import NavigationButtons from "@/app/_components/NavigationButtons";

interface SingleSelectProps {
    setStepNumber: React.Dispatch<React.SetStateAction<number>>,
    fields: singleSelectOption[],
    values: number,
    setValues: React.Dispatch<SetStateAction<InitialValuesInterface>>,
    stepNumber: number
}

function SingleSelect({setStepNumber, fields, values, setValues, stepNumber}: SingleSelectProps) {
    return (
        <div className="flex flex-col my-4 h-full justify-between">
            <div className="flex flex-col gap-8">
                <div className="flex md:flex-row content-start flex-col gap-3 md:gap-5 flex-wrap md:overflow-y-auto md:h-[300px]">
                    {fields.map((option: singleSelectOption, i: number)=> <SingleSelectOption key={option.optionTitle} index={i} image={option.image} title={option.optionTitle}
                                                                                              description={option.optionDescription} selectedOption={values}
                                                                                              setValues={setValues} stepNumber={stepNumber} />)}
                </div>
            </div>
            <NavigationButtons canGoNext={true} step={stepNumber} setStepNumber={setStepNumber}/>
        </div>
    );
}

export default SingleSelect;