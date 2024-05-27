import React from 'react';

function SideStep({title, no, active}: {title: string; no: number, active: number}) {
    return (
        <div className="flex items-center md:gap-6 md:mx-6">
            <div>
                <p className={`border-solid border-magnolia rounded-full font-semibold border-[1px] px-3 py-1 lg:px-4 lg:py-2 ${active===no ? "bg-pastel-blue text-marine-blue border-transparent":"text-magnolia border-magnolia"}`}>{no}</p>
            </div>
            <div className="flex flex-col">
                <div className="text-cool-gray font-semibold hidden md:block">
                    STEP {no}
                </div>
                <div className="font-bold text-magnolia hidden md:block">
                    {title}
                </div>
            </div>
        </div>
    );
}

export default SideStep;