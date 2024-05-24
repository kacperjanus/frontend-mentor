import React from 'react';
import PlanPricingOption from "@/app/_components/PlanPricingOption";
import Button from "@/app/_components/Button";
import AddOnSelector from "@/app/_components/AddOnSelector";

function StepThree({isMonthly} : {isMonthly: boolean}) {
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
                    <p className="text-cool-gray">Go Back</p>
                </div>
                <div className="mb-4">

                    <Button content="Next Step"/>
                </div>
            </div>
        </div>
    );
}

export default StepThree;