import React from 'react';
import Button from "@/app/_components/Button";
import {AddOn, Plan} from "@/app/interfaces";
import StepHeader from "@/app/_components/StepHeader";
import StepContainter from "@/app/_components/StepContainter";

interface StepFourProps {
    setStepNumber: React.Dispatch<React.SetStateAction<number>>,
    selectedPlan: string,
    selectedAddOns: boolean[],
    isMonthly: boolean
}

function Summary({setStepNumber, selectedAddOns, selectedPlan, isMonthly}: StepFourProps) {
    const increaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s+1)
    }

    const decreaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s-1)
    }

    const goToSelectPlan: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setStepNumber((s)=>s-2)
    }

    const addOns : AddOn[] = [{title: "Online services", description: "Access to multiplayer online", price: {monthly: 1, yearly: 10} },
        {title: "Larger storage", description: "Extra 1TB on cloud save", price: {monthly: 2, yearly: 20}},
        {title: "Customizable profile", description: "Custom theme on your profile", price: {monthly: 2, yearly: 20}},
    ]

    const plans : Plan[] = [{title: "Arcade", image: "/icon-arcade.svg", price: {monthly: 9, yearly: 90} },
        {title: "Advanced", image: "/icon-advanced.svg", price: {monthly: 12, yearly: 120}},
        {title: "Pro", image: "/icon-pro.svg", price: {monthly: 15, yearly: 150}},
    ]

    const addOnsPrice = selectedAddOns.reduce((acc, currentValue, index)=>{
        return acc + (currentValue ? addOns[index]["price"][isMonthly ? "monthly" : "yearly"] : 0)
    }, 0);
    const planPrice = plans.find(value=>value["title"]===selectedPlan)?.["price"][isMonthly ? "monthly" : "yearly"];
    const totalPrice = addOnsPrice + (planPrice ? planPrice : 0);

    return (
        <StepContainter>
            <StepHeader stepTitle={"Finishing up"} stepDescription={"Double check everything looks OK before confirming"}/>
        <div className="flex flex-col mt-4 h-full justify-between">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col justify-between bg-magnolia rounded-lg p-5 divide-y divide-light-gray">
                    <div className={`flex justify-between items-center ${selectedAddOns.find(value=>value) ?" pb-6" : ""}`}>
                        <div>
                            <p className="text-marine-blue font-bold">{selectedPlan} ({isMonthly ? "Monthly" : "Yearly"})</p>
                            <button onClick={goToSelectPlan} className="text-cool-gray underline hover:text-purplish-blue">Change</button>
                        </div>
                            <p className="text-marine-blue font-bold">${planPrice}/{isMonthly ? "mo" : "year"}</p>
                    </div>
                    {selectedAddOns.find(value=>value) ? <div className="flex flex-col gap-4 pt-6 ">
                        {selectedAddOns.map((item, index) => {
                            return item ? (<div key={addOns[index]["title"]} className="flex justify-between items-center">
                                <p className="text-cool-gray">{addOns[index]["title"]}</p>
                                <p className="text-marine-blue">+${isMonthly ? addOns[index]["price"]["monthly"] : addOns[index]["price"]["yearly"]}/{isMonthly ? "mo" : "year"}</p>
                            </div>) : ""
                        })}
                    </div>:""}
                </div>
                <div className="flex justify-between px-6">
                    <p className="text-cool-gray">Total (per {isMonthly ? "month" : "year"})</p>
                    <p className="text-xl text-purplish-blue font-bold">${totalPrice}/{isMonthly ? "mo" : "year"}</p>
                </div>
            </div>
            <div
                className="flex md:justify-between items-center fixed bg-white justify-center gap-24 md:static bottom-0 right-0 self-end md:bg-none w-full">
                <div>
                    <Button setStepNumber={decreaseStep} content="Go Back" backButton={true}/>
                </div>
                <div className="mb-4">

                    <Button setStepNumber={increaseStep} confirm={true} content="Confirm"/>
                </div>
            </div>
        </div>
        </StepContainter>
    );
}

export default Summary;