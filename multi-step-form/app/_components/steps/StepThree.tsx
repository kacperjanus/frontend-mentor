import React from 'react';
import Button from "@/app/_components/Button";
import AddOnSelector from "@/app/_components/AddOnSelector";
import {AddOn} from "@/app/interfaces"


interface StepThreeProps {
    isMonthly: boolean,
    setStepNumber: React.Dispatch<React.SetStateAction<number>>,
    addOns: AddOn[],
    selectedAddOns: boolean[]
    setSelectedAddOns: React.Dispatch<React.SetStateAction<boolean[]>>
}

function StepThree({isMonthly, setStepNumber, addOns, selectedAddOns, setSelectedAddOns} : StepThreeProps) {
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
                    {addOns.map((addOn: AddOn, i) => (<AddOnSelector index={i} key={addOn.title} isMonthly={isMonthly}  title={addOn.title}
                                                                  price={addOn.price} description={addOn.description} setSelectedAddOns={setSelectedAddOns} selectedAddOns={selectedAddOns}/>))}
                </div>
            </div>
            <div
                className="flex md:justify-between items-center fixed bg-white justify-center gap-24 md:static bottom-0 right-0 self-end md:bg-none w-full">
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