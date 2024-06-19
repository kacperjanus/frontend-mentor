import React from 'react';
import {step} from "@/app/interfaces";
import TextInputStep from "@/app/_components/steps/TextInputStep";
import SingleSelect from "@/app/_components/steps/SingleSelect";
import MultipleSelect from "@/app/_components/steps/MultipleSelect";

interface StepFieldsProps {
    stepData: step,
    setStepNumber: React.Dispatch<React.SetStateAction<number>>
    values: any
    setValues: React.Dispatch<React.SetStateAction<any>>
}

function StepFields({stepData, setStepNumber, values, setValues}: StepFieldsProps) {
    if(stepData.type === "textInput"){
        return <TextInputStep values={values} setValues={setValues} fields={stepData.fields} setStepNumber={setStepNumber}/>
    }

    if(stepData.type === "singleSelect"){
        return <SingleSelect values={values} setValues={setValues} fields={stepData.fields} setStepNumber={setStepNumber}/>
    }

    if(stepData.type === "multipleSelect"){
        return <MultipleSelect values={values} setValues={setValues} fields={stepData.fields} setStepNumber={setStepNumber}/>
    }
    return (
        <div>
            Unsupported field
        </div>
    );
}

export default StepFields;