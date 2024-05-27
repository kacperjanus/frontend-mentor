"use client"

import React, {useState} from 'react';
import Sidebar from "@/app/_components/Sidebar";
import StepContent from "@/app/_components/StepContent";

function Form() {
    const [stepNumber, setStepNumber] = useState(1);

    return (
        <div className="bg-white md:w-[50rem] lg:w-[54.8rem] xl:w-[64rem] rounded-2xl p-5 flex">
            <Sidebar stepNumber={stepNumber}/>
            <StepContent stepNumber={stepNumber} setStepNumber={setStepNumber}/>
        </div>
    );
}

export default Form;