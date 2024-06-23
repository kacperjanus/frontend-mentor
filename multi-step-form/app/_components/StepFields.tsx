import React from 'react';
import {InitialValuesInterface, step} from "@/app/interfaces";
import TextInputStep from "@/app/_components/steps/TextInputStep";
import SingleSelect from "@/app/_components/steps/SingleSelect";
import MultipleSelect from "@/app/_components/steps/MultipleSelect";

interface StepFieldsProps {
    stepData: step,
    setStepNumber: React.Dispatch<React.SetStateAction<number>>
    values: InitialValuesInterface
    setValues: React.Dispatch<React.SetStateAction<InitialValuesInterface>>
    stepNumber: number
}

function StepFields({stepData, setStepNumber, values, setValues, stepNumber}: StepFieldsProps) {
    if(stepData.type === "textInput"){
        return <TextInputStep stepNumber={stepNumber} values={values[stepNumber-1] as string[]} setValues={setValues} fields={stepData.fields} setStepNumber={setStepNumber}/>
    }

    if(stepData.type === "singleSelect"){
        return <SingleSelect stepNumber={stepNumber} values={values[stepNumber-1] as number} setValues={setValues} fields={stepData.fields} setStepNumber={setStepNumber}/>
    }

    if(stepData.type === "multipleSelect"){
        return <MultipleSelect stepNumber={stepNumber} values={values[stepNumber-1] as boolean[]} setValues={setValues} fields={stepData.fields} setStepNumber={setStepNumber}/>
    }

    return (
        <div>
            Unsupported field
        </div>
    );
}

export default StepFields;