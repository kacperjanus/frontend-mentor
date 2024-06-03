import React from 'react';

function Cta() {
    return (
        <div className="bg-dark-violet relative">
            <img src="/bg-boost-desktop.svg"/>
            <div className="absolute w-96 flex flex-col gap-4 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] items-center">
                <h2 className="text-3xl font-bold text-white">Boost your links today</h2>
                <button className="bg-cyan px-6 py-2 rounded-full text-white hover:bg-[#9AE2E2]">Get Started</button>
            </div>
        </div>
    );
}

export default Cta;