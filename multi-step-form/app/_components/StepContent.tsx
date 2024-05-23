import React from 'react';
import Input from "@/app/_components/Input";
import Button from "@/app/_components/Button";

interface StepContentProps {
    title: string,
    description: string,
}

function StepContent({ title, description }: StepContentProps): JSX.Element {
    return (
        <div className="mx-auto flex flex-col">
            <div className="pt-12 pb-6">
                <div className="pb-3">
                    <h1 className="text-3xl font-extrabold text-marine-blue">
                        {title}
                    </h1>
                </div>
                <div>
                    <p className="text-cool-gray text-lg">
                        {description}
                    </p>
                </div>
            </div>
            <div>
                <form className="flex flex-col">
                    <Input label="Name" placeholder="e.g. Stephen King"/>
                    <Input label="Email Address" placeholder="e.g. stephenking@lorem.com"/>
                    <Input label="Phone Number" placeholder="e.g. +1 234 567 890"/>
                    <div className="self-end mt-16">
                        <Button content="Next Step"/>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default StepContent;