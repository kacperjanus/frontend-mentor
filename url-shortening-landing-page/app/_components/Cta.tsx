import React from 'react';

function Cta() {
    return (
            <div className="w-full flex flex-col gap-4 items-center bg-boost-mobile mobile:bg-boost-desktop h-60 bg-dark-violet py-10 bg-cover">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white">Boost your links today</h2>
                <button className="bg-cyan px-6 py-2 rounded-full text-white hover:bg-[#9AE2E2]">Get Started</button>
            </div>
    );
}

export default Cta;