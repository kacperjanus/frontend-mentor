import React from "react";
import AddToCart from "@/app/[product]/_components/AddToCart";
import {Product} from "@/app/interfaces";

function ProductOverview({productData}: { productData: Product }) {
    return <div className="flex flex-col tablet:grid tablet:grid-cols-[2fr_3fr] desktop:grid-cols-2 tablet:gap-16 desktop:gap-32 gap-8 mb-16 desktop:mb-32">
        <img className="rounded-lg block tablet:hidden" src={productData.image.mobile} alt={productData.name}/>
        <img className="rounded-lg hidden tablet:block desktop:hidden" src={productData.image.tablet}
             alt={productData.name}/>
        <img className="rounded-lg hidden desktop:block" src={productData.image.desktop} alt={productData.name}/>
        <div className="flex flex-col gap-6 desktop:gap-10 tablet:justify-center">
            {productData.new && <span className="overline-element uppercase desktop:-mb-4">new product</span>}
            <h1 className="heading-4 desktop:heading-2">{productData.name}</h1>
            <p className="text-dark-grey text-[15px] leading-[25px]">{productData.description}</p>
            <span className="font-bold text-[18px] tracking-[1.29px]">{`$ ${productData.price.toLocaleString()}`}</span>
            <AddToCart productData={productData}/>
        </div>
    </div>;
}

export default ProductOverview