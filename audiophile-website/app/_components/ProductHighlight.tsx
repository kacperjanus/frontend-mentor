import React from 'react';
import Button from "@/app/_components/Button";

function ProductHighlight({name, description, image, type}: {name: string; description?: string; image: string[]; type: string}) {
    if(type === "primary") return <div className="relative h-[600px] bg-earthy mx-6 mt-6 text-center flex flex-col justify-center items-center rounded-lg gap-6 p-6">
        <img className="w-[173px] z-10" src={image[0]} alt="Product highlight photo"/>
        <img className="absolute top-1 z-5" src="/assets/home/desktop/pattern-circles.svg" alt="Circles"/>
        <h1 className="text-white text-[36px] tracking-[1.29px]">{name}</h1>
        <p className="text-white">{description}</p>
        <Button type="secondary">see product</Button>
    </div>

    if(type === "secondary") return <div className="relative h-[320px] mx-6 mt-6 rounded-lg overflow-hidden">
        <img className="absolute -z-10" src={image[0]} alt="Product highlight photo"/>
        <div className="h-full flex flex-col justify-center gap-6 ml-4">
            <h4>{name}</h4>
            <Button type="secondary">see product</Button>
        </div>
    </div>

    if (type === "tertiary") return <>
        <div className="h-[200px] mx-6 mt-6 rounded-lg overflow-hidden">
            <img src={image[0]} alt="Product highlight photo"/>
        </div>
        <div className="h-[200px] bg-grey mx-6 mt-6 rounded-lg overflow-hidden p-4 flex flex-col justify-center gap-6">
            <h4>{name}</h4>
            <Button type="secondary">see product</Button>
        </div>
    </>
}

export default ProductHighlight;