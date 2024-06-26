"use client"

import React, {useState} from 'react';
import StepOne from "@/app/_components/steps/StepOne";
import StepThree from "@/app/_components/steps/StepThree";
import StepTwo from "@/app/_components/steps/StepTwo";
import StepFour from "@/app/_components/steps/StepFour";
import ThankYou from "@/app/_components/steps/ThankYou";
import {AddOn, PlanOption} from "@/app/interfaces";

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

    const addOns : AddOn[] = [{title: "Online services", description: "Access to multiplayer games", price: {monthly: 1, yearly: 10} },
        {title: "Larger storage", description: "Extra 1TB on cloud save", price: {monthly: 2, yearly: 20}},
        {title: "Customizable profile", description: "Custom theme on your profile", price: {monthly: 2, yearly: 20}},
    ]

    const [isMonthly, setIsMonthly] = useState(true)
    const [selectedAddOns, setSelectedAddOns] = useState([false,false,false])
    const [selectedPlan, setSelectedPlan] = useState("Arcade" as PlanOption)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    return stepNumber === 5 ? <div className="mx-auto md:p-0 md:shadow-none py-6 left-1/2 shadow-xl top-24 bg-alabaster md:bg-white w-[21rem] xl:mx-[6.6rem] rounded-2xl md:rounded-none lg:mx-[4rem] md:mx-[1rem] flex flex-col md:w-full"><ThankYou/></div> : (
        <div className="mx-auto md:p-0 md:shadow-none p-6 shadow-xl top-24 bg-alabaster md:bg-white w-[21rem] xl:mx-[6.6rem] rounded-2xl md:rounded-none lg:mx-[4rem] md:mx-[1rem] flex flex-col md:w-full">
            <div className="md:pt-2 lg:pt-10 xl:pt-12 lg:pb-6">
                <div className="pb-3">
                    <h1 className="text-3xl font-extrabold text-marine-blue">
                        {stepsContent[stepNumber-1].title}
                    </h1>
                </div>
                <div>
                    <p className="text-cool-gray text-md xl:text-lg">
                        {stepsContent[stepNumber-1].description}
                    </p>
                </div>
            </div>
            <div className="h-full mb-4">
                {stepNumber === 1 && <StepOne name={name} email={email} phoneNumber={phoneNumber} setName={setName} setEmail={setEmail} setPhoneNumber={setPhoneNumber} setStepNumber={setStepNumber} />}
                {stepNumber === 2 && <StepTwo setStepNumber={setStepNumber} isMonthly={isMonthly} setIsMonthly={setIsMonthly} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />}
                {stepNumber === 3 && <StepThree setStepNumber={setStepNumber} isMonthly={isMonthly} addOns={addOns} selectedAddOns={selectedAddOns} setSelectedAddOns={setSelectedAddOns}/>}
                {stepNumber === 4 && <StepFour setStepNumber={setStepNumber} isMonthly={isMonthly} selectedPlan={selectedPlan} selectedAddOns={selectedAddOns}/>}
            </div>
        </div>)
}

export default StepContent;