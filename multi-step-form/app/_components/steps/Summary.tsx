import React from 'react';
import {FormData, InitialValuesInterface} from "@/app/interfaces";
import StepHeader from "@/app/_components/StepHeader";
import StepContainer from "@/app/_components/StepContainer";
import NavigationButtons from "@/app/_components/NavigationButtons";

interface StepFourProps {
    setStepNumber: React.Dispatch<React.SetStateAction<number>>,
    values: InitialValuesInterface
    formData: FormData
    stepNumber: number
}

function Summary({setStepNumber, values, formData, stepNumber}: StepFourProps) {
    const goToSelectPlan = (i: number) => setStepNumber(i + 1)

    return (
        <StepContainer>
            <StepHeader stepTitle={"Finishing up"}
                        stepDescription={"Double check everything looks OK before confirming"}/>
            <div className="flex flex-col my-4 h-full justify-between">
                <div className="md:h-[300px] md:overflow-y-auto">
                    {formData.steps.map((step, i) =>
                        <div className="mb-2" key={i}>
                            <div className="flex items-center gap-1">
                                <h1 className="font-bold text-marine-blue">Step {i + 1}</h1>
                                <p className="text-cool-gray text-sm underline cursor-pointer"
                                   onClick={() => goToSelectPlan(i)}>(Change)</p>
                            </div>
                            {/*@ts-ignore*/}
                            {step.type === "textInput" && Array.isArray(values[i]) ? step.fields.map((el, j) => <p key={j}>{el.label}: {values[i][j]}</p>) : ""}
                            {/*@ts-ignore*/}
                            {step.type === "singleSelect" && typeof values[i] === "number" ? <p>{step.stepTitle}: {step.fields[values[i]].optionTitle}</p> : ""}
                            {/*@ts-ignore*/}
                            {step.type === "multipleSelect" && Array.isArray(values[i]) ? <p>{step.stepTitle}: {values[i].map((value: boolean, i: number) => value ? step.fields[i].optionTitle + " (" + step.fields[i].primary + ")" + ", " : "")}</p> : ""}
                        </div>
                    )}
                </div>
                <NavigationButtons summary={true} canGoNext={true} step={stepNumber} setStepNumber={setStepNumber}/>
            </div>
        </StepContainer>
    );
}

export default Summary;