import React from 'react';

function StepHeader({stepTitle, stepDescription}: {stepTitle: string, stepDescription: string}) {
    return (
        <div className="md:pt-2 lg:pt-10 xl:pt-12 lg:pb-6">
            <div className="pb-3">
                <h1 className="text-3xl font-extrabold text-marine-blue">
                    {stepTitle}
                </h1>
            </div>
            <div>
                <p className="text-cool-gray text-md xl:text-lg">
                    {stepDescription}
                </p>
            </div>
        </div>
    );
}

export default StepHeader;