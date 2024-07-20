import React from 'react';
import Button from "@/app/_components/Button";

function ProductDisplay({title, description, isNew, image}: {
    title: string,
    description: string,
    isNew?: boolean,
    image: string[]
}) {
    return (
        <div className="text-center flex flex-col gap-8 items-center mb-20">
            <img className="block tablet:hidden" alt={`${title} picture`} src={image[0]}/>
            <img className="hidden tablet:block desktop:hidden" alt={`${title} picture`} src={image[1]}/>
            <img className="hidden desktop:block" alt={`${title} picture`} src={image[2]}/>
            <div className="flex flex-col gap-8 tablet:max-w-[572px] items-center">
                {isNew && <span className="overline-element uppercase">new product</span>}
                <h2 className="heading-4 tablet:heading-2 w-80">{title}</h2>
                <p className="text-[#7D7D7D]">{description}</p>
                <Button type="primary">SEE PRODUCT</Button>
            </div>
        </div>
    );
}

export default ProductDisplay;