import React from 'react';
import Button from "@/app/_components/Button";
import {FormData, InitialValuesInterface} from "@/app/interfaces";
import StepHeader from "@/app/_components/StepHeader";
import StepContainer from "@/app/_components/StepContainer";

interface StepFourProps {
    setStepNumber: React.Dispatch<React.SetStateAction<number>>,
    values: InitialValuesInterface
    formData: FormData
}

function Summary({setStepNumber, values, formData}: StepFourProps) {
    const increaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s+1)
    }

    const decreaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s-1)
    }

    const goToSelectPlan: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s-2)
    }

    return (
        <StepContainer>
            <StepHeader stepTitle={"Finishing up"} stepDescription={"Double check everything looks OK before confirming"}/>
            <div className="flex flex-col mt-4 h-full justify-between">
                <div>
                    {formData.steps.map((step, i)=>
                        <div className="mb-2" key={i}>
                            <h1 className="font-bold text-marine-blue">Step {i+1}</h1>
                            {step.type==="textInput" ? step.fields.map((el, j)=> <p key={j}>{el.label}: {values[i][j]}</p>) : ""}
                            {step.type==="singleSelect" ? <p>{step.stepTitle}: {step.fields[values[i]].optionTitle}</p> : ""}
                            {step.type==="multipleSelect" ? <p>{step.stepTitle}: {values[i].map((value: boolean, i: number)=> value ? step.fields[i].optionTitle + " (" + step.fields[i].primary + ")" + ", " : "")}</p> : ""}
                        </div>
                    )}
                </div>
                <div
                    className="flex md:justify-between items-center fixed bg-white justify-center gap-24 md:static bottom-0 right-0 self-end md:bg-none w-full">
                    <div>
                        <Button setStepNumber={decreaseStep} content="Go Back" backButton={true}/>
                    </div>
                    <div className="mb-4">

                        <Button setStepNumber={increaseStep} confirm={true} content="Confirm"/>
                    </div>
                </div>
            </div>
        </StepContainer>
    );
}

export default Summary;