import React from 'react';
import MultipleSelectOption from "@/app/_components/MultipleSelectOption";
import {InitialValuesInterface, multipleSelectOption} from "@/app/interfaces"
import NavigationButtons from "@/app/_components/NavigationButtons";


interface MultipleSelectProps {
    values: boolean[],
    setValues: React.Dispatch<React.SetStateAction<InitialValuesInterface>>,
    setStepNumber: React.Dispatch<React.SetStateAction<number>>,
    fields: multipleSelectOption[],
    stepNumber: number
}

function MultipleSelect({setValues, setStepNumber, values, fields, stepNumber} : MultipleSelectProps) {
    return (
        <div className="flex flex-col my-4 h-full justify-between">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 justify-between md:h-[300px] md:overflow-y-auto">
                    {fields.map((option: multipleSelectOption, i: number) => (<MultipleSelectOption index={i}
                                                                                                    key={option.optionTitle}
                                                                                                    title={option.optionTitle}
                                                                                                    primary={option.primary}
                                                                                                    description={option.optionDescription}
                                                                                                    setValues={setValues} values={values}
                                                                                                    stepNumber={stepNumber}/>))}
                </div>
            </div>
            <NavigationButtons canGoNext={true} step={stepNumber} setStepNumber={setStepNumber}/>
        </div>
    );
}

export default MultipleSelect;