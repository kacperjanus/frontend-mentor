import React from 'react';

interface Feature {
    title: string,
    description: string,
    image: string,
}

function FeatureBox({feature, index} : {feature: Feature, index: number}) {
    return (
        <div className={`bg-white text-left pt-16 px-8 pb-8 relative z-10 ${index === 1 ? "mt-12" : ""} ${index === 2 ? "mt-24" : ""}`}>
            <div className="absolute top-[-2rem] bg-dark-violet p-4 rounded-full">
                <img src={feature.image} alt="Feature icon"/>
            </div>
            <h2 className="font-bold mb-4">{feature.title}</h2>
            <p className="text-gray text-sm">{feature.description}</p>
        </div>
    );
}

export default FeatureBox;