"use client"

import React, {useState} from 'react';
import Summary from "@/app/_components/steps/Summary";
import Confirmation from "@/app/_components/steps/Confirmation";
import {FormData, InitialValuesInterface} from "@/app/interfaces";
import StepContainer from "@/app/_components/StepContainer";
import StepHeader from "@/app/_components/StepHeader";
import StepFields from "@/app/_components/StepFields";
import {createInitialValues} from "@/app/_utils/createInitialValues";

interface StepContentProps {
    stepNumber: number,
    setStepNumber: React.Dispatch<React.SetStateAction<number>>;
    formData: FormData
}

function StepContent({stepNumber, setStepNumber, formData }: StepContentProps): JSX.Element {
    const initialValues: InitialValuesInterface = createInitialValues(formData)

    const [values, setValues] = useState(initialValues)

    if(stepNumber === formData.steps.length+2) return <Confirmation/>
    if(stepNumber === formData.steps.length+1) return <Summary stepNumber={stepNumber} formData={formData} setStepNumber={setStepNumber} values={values}/>

    return (
        <StepContainer>
            <StepHeader stepTitle={formData.steps[stepNumber-1].stepTitle} stepDescription={formData.steps[stepNumber-1].stepDescription}/>
            <StepFields stepNumber={stepNumber} values={values} setValues={setValues} stepData={formData.steps[stepNumber-1]} setStepNumber={setStepNumber} />
        </StepContainer>)
}

export default StepContent;