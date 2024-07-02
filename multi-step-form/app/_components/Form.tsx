"use client"

import React, {useState} from 'react';
import Sidebar from "@/app/_components/Sidebar";
import StepContent from "@/app/_components/StepContent";
import {FormData} from "@/app/interfaces"

function Form({formData}: {formData: FormData | string}) {
    const [stepNumber, setStepNumber] = useState(1);
    if (typeof formData === "string") return <div
        className="bg-light-blue w-full h-screen items-center justify-center flex">
            {formData}
    </div>
    if (stepNumber > formData.steps.length + 2) throw new Error("Accessed step is outside the scope of this form")

    const stepsData = formData.steps.map((el) => el.sidebarText)

    return (
        <div className="bg-white md:bg-light-blue w-full h-screen md:items-center md:justify-center md:flex">
            <div
                className="bg-white w-full md:w-[50rem] lg:w-[54.8rem] md:h-[32rem] lg:h-[38rem] xl:w-[64rem] md:rounded-2xl md:p-5 flex-col flex md:flex-row relative mx-auto md:mx-none transition-all duration-500 ">
                <Sidebar stepNumber={stepNumber} stepsData={stepsData}/>
                <StepContent stepNumber={stepNumber} setStepNumber={setStepNumber} formData={formData}/>
            </div>
        </div>
    );
}

export default Form;