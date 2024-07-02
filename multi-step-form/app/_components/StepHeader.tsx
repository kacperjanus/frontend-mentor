import React from 'react';

function StepHeader({stepTitle, stepDescription}: {stepTitle: string, stepDescription: string}) {
    return (
        <div className="md:pt-2 lg:pt-10 xl:pt-12 lg:pb-6 transition-all duration-500">
            <div className="pb-3">
                <h1 className="text-3xl font-extrabold text-marine-blue transition-all duration-500">
                    {stepTitle}
                </h1>
            </div>
            <div>
                <p className="text-cool-gray text-md xl:text-lg transition-all duration-500">
                    {stepDescription}
                </p>
            </div>
        </div>
    );
}

export default StepHeader;