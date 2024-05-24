import React from 'react';
import Input from "@/app/_components/Input";
import Button from "@/app/_components/Button";

function StepOne() {
    return (
        <form className="flex flex-col h-full justify-between">
            <div>
            <Input label="Name" placeholder="e.g. Stephen King"/>
            <Input label="Email Address" placeholder="e.g. stephenking@lorem.com"/>
            <Input label="Phone Number" placeholder="e.g. +1 234 567 890"/>
            </div>
            <div className="self-end">
                <Button content="Next Step"/>
            </div>
        </form>
    );
}

export default StepOne;