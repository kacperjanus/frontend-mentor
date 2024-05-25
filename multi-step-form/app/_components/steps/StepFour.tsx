import React from 'react';
import Button from "@/app/_components/Button";

interface StepFourProps {
    setStepNumber: React.Dispatch<React.SetStateAction<number>>,
    selectedPlan: string,
    selectedAddOns: number[],
    isMonthly: boolean
}

function StepFour({setStepNumber}: StepFourProps) {
    const increaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s+1)
    }

    const decreaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s-1)
    }

    return (
        <div className="flex flex-col mt-4 h-full justify-between">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col justify-between bg-magnolia rounded-lg p-5 divide-y divide-light-gray">
                    <div className="flex justify-between items-center pb-6">
                        <div>
                            <p className="text-marine-blue font-bold">Arcade (Monthly)</p>
                            <a className="text-cool-gray underline">Change</a>
                        </div>
                            <p className="text-marine-blue font-bold">$9/mo</p>
                    </div>
                    <div className="flex flex-col gap-4 pt-6">
                        <div className="flex justify-between items-center">
                            <p className="text-cool-gray">Online service</p>
                            <p className="text-marine-blue">+$1/mo</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-cool-gray">Larger service</p>
                            <p className="text-marine-blue">+$2/mo</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between px-6">
                    <p className="text-cool-gray">Total (per month)</p>
                    <p className="text-xl text-purplish-blue font-bold">+$12/mo</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <Button setStepNumber={decreaseStep} content="Go Back" backButton={true}/>
                </div>
                <div className="mb-4">

                    <Button setStepNumber={increaseStep} confirm={true} content="Confirm"/>
                </div>
            </div>
        </div>
    );
}

export default StepFour;