import React from 'react';

interface Feature {
    title: string,
    description: string,
    image: string,
}

function FeatureBox({feature, index} : {feature: Feature, index: number}) {
    return (
        <div className={`bg-white text-left pt-16 px-8 pb-8 relative z-10 mt-10 ${index === 0 ? "md:mt-0" : ""}  ${index === 1 ? "md:mt-12" : ""} ${index === 2 ? "md:mt-24" : ""}`}>
            <div className="absolute top-[-2rem] bg-dark-violet left-1/2 md:left-0 p-4 translate-x-[-50%] md:translate-x-0 rounded-full">
                <img src={feature.image} alt="Feature icon"/>
            </div>
            <h2 className="font-bold mb-4 text-center text-xl md:text-base md:text-left">{feature.title}</h2>
            <p className="text-gray text-sm text-center md:text-left">{feature.description}</p>
        </div>
    );
}

export default FeatureBox;