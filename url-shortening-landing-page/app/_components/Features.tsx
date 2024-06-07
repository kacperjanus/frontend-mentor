import React from 'react';
import FeatureBox from "@/app/_components/FeatureBox";

interface Feature{
    title: string,
    description: string,
    image: string,
}

function Features() {
    const features: Feature[] = [{title: "Brand Recognition", description: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links helps instil confidence in your content", image: "/icon-brand-recognition.svg"},
        {title: "Detailed Records", description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions", image: "/icon-detailed-records.svg"},
        {title: "Fully Customizable", description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." , image: "/icon-fully-customizable.svg"},]

    return (
        <div className="w-full bg-[#F0F1F7] pt-24 pb-32 px-4">
            <div className="md:max-w-5xl max-w-lg text-center mx-auto">
                <div>
                    <h1 className="text-3xl font-bold">Advanced statistics</h1>
                    <p className="text-lg text-gray">Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 mt-20 relative items-start">
                    {features.map((feature: Feature, i) => <FeatureBox key={feature.title} feature={feature} index={i}/>)}
                    <span className="bg-cyan absolute text-cyan z-0 rotate-90 md:rotate-0 w-full text-[0.5rem] top-1/2 ">span</span>
                </div>
            </div>
        </div>
    );
}

export default Features;