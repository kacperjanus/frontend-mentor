import React from 'react';
import Button from "@/app/_components/Button";

function ProductDisplay({title, description, isNew, image, index, slug}: {
    title: string,
    description: string,
    isNew: boolean,
    image: { mobile: string, tablet: string, desktop: string }
    index: number,
    slug: string
}) {
    return (
        <div className="text-center flex flex-col desktop:flex-row gap-8 items-center mb-20 desktop:basis-0">
            <div className={`desktop:order-${index % 2}`}>
                <img className="block tablet:hidden" alt={`${title} picture`} src={image.mobile}/>
                <img className="hidden tablet:block desktop:hidden" alt={`${title} picture`} src={image.tablet}/>
                <img className="hidden desktop:block" alt={`${title} picture`} src={image.desktop}/>
            </div>
            <div className="flex flex-col gap-8 tablet:max-w-[572px] items-center desktop:items-start desktop:p-20">
                {isNew && <span className="overline-element uppercase">new product</span>}
                <h2 className="heading-4 tablet:heading-2 w-80 desktop:w-auto desktop:text-start">{title}</h2>
                <p className="text-dark-grey desktop:text-start">{description}</p>
                <Button link={slug} type="primary">SEE PRODUCT</Button>
            </div>
        </div>
    );
}

export default ProductDisplay;