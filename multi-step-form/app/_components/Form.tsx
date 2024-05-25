"use client"

import React, {useState} from 'react';
import Sidebar from "@/app/_components/Sidebar";
import StepContent from "@/app/_components/StepContent";

function Form() {
    const [stepNumber, setStepNumber] = useState(1);

    return (
        <div className="container bg-white max-w-5xl max-h-2xl h-fit rounded-2xl p-5 flex">
            <Sidebar stepNumber={stepNumber}/>
            <StepContent stepNumber={stepNumber} setStepNumber={setStepNumber}/>
        </div>
    );
}

export default Form;