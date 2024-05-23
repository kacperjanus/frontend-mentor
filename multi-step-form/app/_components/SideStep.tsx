import React from 'react';

function SideStep({title, no, active}: {title: string; no: number, active?: boolean}) {
    return (
        <div className="flex items-center gap-6 mx-6">
            <div>
                <p className={`border-solid border-magnolia rounded-full font-semibold border-[1px] px-4 py-2 ${active ? "bg-pastel-blue text-marine-blue border-transparent":"text-magnolia border-magnolia"}`}>{no}</p>
            </div>
            <div className="flex flex-col">
                <div className="text-cool-gray font-semibold">
                    STEP {no}
                </div>
                <div className="font-bold text-magnolia">
                    {title}
                </div>
            </div>
        </div>
    );
}

export default SideStep;