import React, {useState} from 'react';
import StepOne from "@/app/_components/steps/StepOne";
import StepThree from "@/app/_components/steps/StepThree";
import StepTwo from "@/app/_components/steps/StepTwo";
import StepFour from "@/app/_components/steps/StepFour";
import ThankYou from "@/app/_components/steps/ThankYou";

interface StepContentProps {
    stepNumber: number
}

function StepContent({stepNumber }: StepContentProps): JSX.Element {
    const stepsContent = [{title: "Personal info", description: "Please provide your name, email address, and phone number." },
        {title: "Select your plan", description: "You have the option of monthly or yearly billing"},
        {title: "Pick add-ons", description: "Add-ons help enhance your gaming experience"},
        {title: "Finishing up", description: "Double check everything looks OK before confirming"},
        ]

    const [isMonthly, setIsMonthly] = useState(true)

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
                {stepNumber === 1 && <StepOne/>}
                {stepNumber === 2 && <StepTwo isMonthly={isMonthly} setIsMonthly={setIsMonthly} />}
                {stepNumber === 3 && <StepThree isMonthly={isMonthly}/>}
                {stepNumber === 4 && <StepFour/>}
            </div>
        </div>)
}

export default StepContent;