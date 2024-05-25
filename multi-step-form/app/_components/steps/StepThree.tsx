import React from 'react';
import Button from "@/app/_components/Button";
import AddOnSelector from "@/app/_components/AddOnSelector";

function StepThree({isMonthly, setStepNumber} : {isMonthly: boolean, setStepNumber: React.Dispatch<React.SetStateAction<number>>}) {
    const increaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s+1)
    }

    const decreaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s-1)
    }

    return (
        <div className="flex flex-col mt-4 h-full justify-between">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 justify-between">
                    <AddOnSelector isMonthly={isMonthly}  title="Online services"
                                       price={{monthly: 9, yearly: 90}} description="Access to multiplayer online"/>
                    <AddOnSelector isMonthly={isMonthly} title="Larger storage"
                                       price={{monthly: 12, yearly: 120}} description="Extra 1TB on cloud save"/>
                    <AddOnSelector isMonthly={isMonthly} title="Customizable profile"
                                       price={{monthly: 15, yearly: 150}} description="Custom theme on your profile"/>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <Button setStepNumber={decreaseStep} content="Go Back" backButton={true}/>
                </div>
                <div className="mb-4">

                    <Button setStepNumber={increaseStep} content="Next Step"/>
                </div>
            </div>
        </div>
    );
}

export default StepThree;