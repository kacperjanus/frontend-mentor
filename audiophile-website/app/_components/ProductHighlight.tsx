import React from 'react';
import Button from "@/app/_components/Button";

function ProductHighlight({name, description, image, type}: {name: string; description?: string; image: string[]; type: string}) {
    if(type === "primary") return <div className="relative h-[600px] tablet:h-[720px] bg-earthy mt-6 text-center flex flex-col justify-center items-center rounded-lg gap-6 tablet:gap-24 p-6 overflow-hidden">
        <img className="w-[173px] z-20 block tablet:hidden" src={image[0]} alt="Product highlight photo"/>
        <img className="w-[173px] z-20 hidden tablet:block" src={image[1]} alt="Product highlight photo"/>
        <img className="absolute top-1 z-10 tablet:-top-56 tablet:scale-150" src="/assets/home/desktop/pattern-circles.svg" alt="Circles"/>
        <div className="flex flex-col items-center gap-6 tablet:gap-10 z-20 tablet:max-w-[349px]">
            <h1 className="heading-1 text-white text-[36px] tablet:text-[56px] tracking-[1.29px]">{name}</h1>
            <p className="paragraph text-white">{description}</p>
            <Button type="secondary">see product</Button>
        </div>
    </div>

    if(type === "secondary") return <div className="relative h-[320px] mt-6 rounded-lg overflow-hidden">
        <img className="absolute -z-10 block tablet:hidden" src={image[0]} alt="Product highlight photo"/>
        <img className="absolute -z-10 hidden tablet:block" src={image[1]} alt="Product highlight photo"/>
        <div className="h-full flex flex-col justify-center gap-6 ml-4 tablet:ml-16">
            <h4 className="heading-4">{name}</h4>
            <Button type="secondary">see product</Button>
        </div>
    </div>

    if (type === "tertiary") return <div className="flex my-6 flex-col tablet:flex-row">
        <div className="h-[200px] tablet:h-80 rounded-lg overflow-hidden tablet:w-[50%]">
            <img className="block tablet:hidden" src={image[0]} alt="Product highlight photo"/>
            <img className="hidden tablet:block" src={image[1]} alt="Product highlight photo"/>
        </div>
        <div className="h-[200px] tablet:h-80 tablet:w-[50%] bg-grey rounded-lg overflow-hidden p-4 tablet:p-12 flex flex-col justify-center gap-6">
            <h4 className="heading-4">{name}</h4>
            <Button type="secondary">see product</Button>
        </div>
    </div>
}

export default ProductHighlight;