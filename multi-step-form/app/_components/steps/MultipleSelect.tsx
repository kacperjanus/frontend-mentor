import React from 'react';
import Button from "@/app/_components/Button";
import AddOnSelector from "@/app/_components/AddOnSelector";
import {InitialValuesInterface, multipleSelectOption} from "@/app/interfaces"


interface MultipleSelectProps {
    values: InitialValuesInterface,
    setValues: React.Dispatch<React.SetStateAction<InitialValuesInterface>>,
    setStepNumber: React.Dispatch<React.SetStateAction<number>>,
    fields: multipleSelectOption[],
    stepNumber: number
}

function MultipleSelect({setValues, setStepNumber, values, fields, stepNumber} : MultipleSelectProps) {
    const increaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s+1)
    }

    const decreaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s-1)
    }

    return (
        <div className="flex flex-col my-4 h-full justify-between">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 justify-between">
                    {fields.map((option: multipleSelectOption, i: number) => (<AddOnSelector index={i} key={option.optionTitle} title={option.optionTitle}
                                                                  primary={option.primary} description={option.optionDescription} setValues={setValues} values={values} stepNumber={stepNumber}/>))}
                </div>
            </div>
            <div
                className="flex md:justify-between items-center fixed bg-white justify-center gap-24 md:static bottom-0 right-0 self-end md:bg-none w-full">
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

export default MultipleSelect;