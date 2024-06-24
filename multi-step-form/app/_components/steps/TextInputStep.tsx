import React, {FormEventHandler} from 'react';
import Input from "@/app/_components/Input";
import {InitialValuesInterface, textInputField} from "@/app/interfaces";
import NavigationButtons from "@/app/_components/NavigationButtons";

interface StepOneProps {
    fields: textInputField[],
    setStepNumber: React.Dispatch<React.SetStateAction<number>>;
    values: string[]
    setValues: React.Dispatch<React.SetStateAction<InitialValuesInterface>>
    stepNumber: number
}

function TextInputStep({fields, setStepNumber, values, setValues, stepNumber}: StepOneProps) {
    const handleSubmit: FormEventHandler<HTMLFormElement> = function(e){
        e.preventDefault();
    }

    return (
        <div className="h-full mb-4">
        <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between" noValidate>
            <div className="md:overflow-y-auto md:h-[300px]">
                {fields.map((el: textInputField, i: number)=><Input
                    el={el}
                    index={i}
                    key={fields[i].label}
                    label={fields[i].label}
                    placeholder={fields[i].placeholder}
                    value={values[i]}
                    onChange={(value)=>setValues(s=> s.with(stepNumber-1, values.with(i, value as string)))}
                />)}
            </div>
            <NavigationButtons step={stepNumber} setStepNumber={setStepNumber}/>
        </form>
        </div>
    );
}

export default TextInputStep;