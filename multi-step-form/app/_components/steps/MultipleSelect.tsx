import React from 'react';
import Button from "@/app/_components/Button";
import AddOnSelector from "@/app/_components/AddOnSelector";
import {InitialValuesInterface, multipleSelectOption} from "@/app/interfaces"
import NavigationButtons from "@/app/_components/NavigationButtons";


interface MultipleSelectProps {
    values: InitialValuesInterface,
    setValues: React.Dispatch<React.SetStateAction<InitialValuesInterface>>,
    setStepNumber: React.Dispatch<React.SetStateAction<number>>,
    fields: multipleSelectOption[],
    stepNumber: number
}

function MultipleSelect({setValues, setStepNumber, values, fields, stepNumber} : MultipleSelectProps) {
    return (
        <div className="flex flex-col my-4 h-full justify-between">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 justify-between">
                    {fields.map((option: multipleSelectOption, i: number) => (<AddOnSelector index={i} key={option.optionTitle} title={option.optionTitle}
                                                                  primary={option.primary} description={option.optionDescription} setValues={setValues} values={values} stepNumber={stepNumber}/>))}
                </div>
            </div>
            <NavigationButtons step={stepNumber} setStepNumber={setStepNumber}/>
        </div>
    );
}

export default MultipleSelect;