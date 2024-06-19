"use client"

import React, {useState} from 'react';
import Summary from "@/app/_components/steps/Summary";
import Confirmation from "@/app/_components/steps/Confirmation";
import {PlanOption, FormData, InitialValuesInterface} from "@/app/interfaces";
import StepContainter from "@/app/_components/StepContainter";
import StepHeader from "@/app/_components/StepHeader";
import StepFields from "@/app/_components/StepFields";

interface StepContentProps {
    stepNumber: number,
    setStepNumber: React.Dispatch<React.SetStateAction<number>>;
    formData: FormData
}

const initialValues: InitialValuesInterface = {
    name: "",
    email: "",
    phoneNumber: "",
    selectedAddOns: [false, false, false],
    selectedPlan: "Arcade" as PlanOption,
    isMonthly: false
}

function StepContent({stepNumber, setStepNumber, formData }: StepContentProps): JSX.Element {
    console.log(formData)
    const [values, setValues] = useState(initialValues)

    if(stepNumber === formData.steps.length+2) return <Confirmation/>
    if(stepNumber === formData.steps.length+1) return <Summary setStepNumber={setStepNumber} isMonthly={values.isMonthly} selectedPlan={values.selectedPlan} selectedAddOns={values.selectedAddOns}/>

    return (
        <StepContainter>
            <StepHeader stepTitle={formData.steps[stepNumber-1].stepTitle} stepDescription={formData.steps[stepNumber-1].stepDescription}/>
            <StepFields values={values} setValues={setValues} stepData={formData.steps[stepNumber-1]} setStepNumber={setStepNumber} />
        </StepContainter>)
}

export default StepContent;