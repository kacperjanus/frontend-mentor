"use client"

import React, {useState} from 'react';
import StepOne from "@/app/_components/steps/StepOne";
import StepThree from "@/app/_components/steps/StepThree";
import StepTwo from "@/app/_components/steps/StepTwo";
import StepFour from "@/app/_components/steps/StepFour";
import ThankYou from "@/app/_components/steps/ThankYou";
import {AddOn} from "@/app/interfaces";

interface StepContentProps {
    stepNumber: number,
    setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}

function StepContent({stepNumber, setStepNumber }: StepContentProps): JSX.Element {
    const stepsContent = [{title: "Personal info", description: "Please provide your name, email address, and phone number." },
        {title: "Select your plan", description: "You have the option of monthly or yearly billing"},
        {title: "Pick add-ons", description: "Add-ons help enhance your gaming experience"},
        {title: "Finishing up", description: "Double check everything looks OK before confirming"},
        ]

    const addOns : AddOn[] = [{title: "Online services", description: "Access to multiplayer online", price: {monthly: 1, yearly: 10} },
        {title: "Larger storage", description: "Extra 1TB on cloud save", price: {monthly: 2, yearly: 20}},
        {title: "Customizable profile", description: "Custom theme on your profile", price: {monthly: 2, yearly: 20}},
    ]

    const [isMonthly, setIsMonthly] = useState(true)
    const [selectedAddOns, setSelectedAddOns] = useState([false,false,false])
    const [selectedPlan, setSelectedPlan] = useState("Arcade")

    return stepNumber === 5 ? <div className="h-full mb-4"><ThankYou/></div> : (
        <div className="mx-[6.6rem] flex flex-col w-full">
            <div className="pt-12 pb-6">
                <div className="pb-3">
                    <h1 className="text-3xl font-extrabold text-marine-blue">
                        {stepsContent[stepNumber-1].title}
                    </h1>
                </div>
                <div>
                    <p className="text-cool-gray text-lg">
                        {stepsContent[stepNumber-1].description}
                    </p>
                </div>
            </div>
            <div className="h-full mb-4">
                {stepNumber === 1 && <StepOne setStepNumber={setStepNumber} />}
                {stepNumber === 2 && <StepTwo setStepNumber={setStepNumber} isMonthly={isMonthly} setIsMonthly={setIsMonthly} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />}
                {stepNumber === 3 && <StepThree setStepNumber={setStepNumber} isMonthly={isMonthly} addOns={addOns} selectedAddOns={selectedAddOns} setSelectedAddOns={setSelectedAddOns}/>}
                {stepNumber === 4 && <StepFour setStepNumber={setStepNumber} isMonthly={isMonthly} selectedPlan={selectedPlan} selectedAddOns={selectedAddOns}/>}
            </div>
        </div>)
}

export default StepContent;