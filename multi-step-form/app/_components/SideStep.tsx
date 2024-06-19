import React from 'react';

function SideStep({title, no, active}: {title: string; no: number | number[], active: number}) {

    const isActive = ()=>{
        if(typeof no === "number"){
            return no===active ? "bg-pastel-blue text-marine-blue border-transparent" : "text-magnolia border-magnolia"
        }

        return no[0] === active || no[1] === active ? "bg-pastel-blue text-marine-blue border-transparent" : "text-magnolia border-magnolia"
    }

    return (
        <div className="flex items-center md:gap-6 md:mx-6">
            <div>
                <p className={`border-solid border-magnolia rounded-full font-semibold border-[1px] px-3 py-1 lg:px-4 lg:py-2 ${isActive()}`}>{typeof no === "number" ? no+1 : no[0]+1}</p>
            </div>
            <div className="flex flex-col">
                <div className="text-cool-gray font-semibold hidden md:block">
                    STEP {typeof no === "number" ? no+1 : no[0]+1}
                </div>
                <div className="font-bold text-magnolia hidden md:block uppercase">
                    {title}
                </div>
            </div>
        </div>
    );
}

export default SideStep;