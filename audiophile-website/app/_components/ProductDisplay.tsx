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
            <img alt={`${title} picture`}
                 src={image[0]}/>
            {isNew && <span className="overline-element uppercase">new product</span>}
            <h2 className="heading-4">{title}</h2>
            <p className="text-[#7D7D7D]">{description}</p>
            <Button type="primary">SEE PRODUCT</Button>
        </div>
    );
}

export default ProductDisplay;