import Numbers from "@/app/_components/Numbers";
import Button from "@/app/_components/Button";
import React from "react";

function ProductOverview({productData}: { productData: Product }) {
    return <div className="flex flex-col tablet:grid tablet:grid-cols-[2fr_3fr] tablet:gap-16 gap-8 mb-16">
        <img className="rounded-lg block tablet:hidden" src={productData.image.mobile} alt={productData.name}/>
        <img className="rounded-lg hidden tablet:block desktop:hidden" src={productData.image.tablet}
             alt={productData.name}/>
        <img className="rounded-lg hidden desktop:block" src={productData.image.desktop} alt={productData.name}/>
        <div className="flex flex-col gap-6 tablet:justify-center">
            {productData.new && <span className="overline-element uppercase">new product</span>}
            <h2 className="heading-4">{productData.name}</h2>
            <p className="text-dark-grey text-[15px] leading-[25px]">{productData.description}</p>
            <span className="font-bold text-[18px] tracking-[1.29px]">{`$ ${productData.price.toLocaleString()}`}</span>
            <div className="flex gap-4">
                <Numbers max={10}/>
                <Button type="primary">Add to cart</Button>
            </div>
        </div>
    </div>;
}

export default ProductOverview