import React from 'react';

function StepContainer({children}: {children: React.ReactNode}) {
    return (
        <div className="mx-auto md:p-0 md:shadow-none py-6 left-1/2 shadow-xl top-24 bg-alabaster md:bg-white w-[21rem] xl:mx-[6.6rem] rounded-2xl md:rounded-none lg:mx-[4rem] md:mx-[1rem] flex flex-col md:w-full">
            {children}
        </div>
    );
}

export default StepContainer;