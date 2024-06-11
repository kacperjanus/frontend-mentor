"use client"

import React, {useState} from 'react';
import Sidebar from "@/app/_components/Sidebar";
import StepContent from "@/app/_components/StepContent";

function Form() {
    const [stepNumber, setStepNumber] = useState(1);

    return (
        <div className="bg-white w-full md:w-[50rem] lg:w-[54.8rem] lg:h-[38rem] xl:w-[64rem] md:rounded-2xl md:p-5 flex-col flex md:flex-row relative mx-auto md:mx-none ">
            <Sidebar stepNumber={stepNumber}/>
            <StepContent stepNumber={stepNumber} setStepNumber={setStepNumber}/>
        </div>
    );
}

export default Form;