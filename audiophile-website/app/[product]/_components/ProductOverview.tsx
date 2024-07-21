import Numbers from "@/app/_components/Numbers";
import Button from "@/app/_components/Button";
import React from "react";

function ProductOverview({productData}: { productData: Product }) {
    return <div className="flex flex-col gap-8 mb-16">
        <img className="rounded-lg" src={productData.image.mobile} alt={productData.name}/>
        {productData.new && <span className="overline-element uppercase">new product</span>}
        <h2 className="heading-4">{productData.name}</h2>
        <p className="text-dark-grey text-[15px] leading-[25px]">{productData.description}</p>
        <span className="font-bold text-[18px] tracking-[1.29px]">{`$ ${productData.price.toLocaleString()}`}</span>
        <div className="flex gap-4">
            <Numbers max={10}/>
            <Button type="primary">Add to cart</Button>
        </div>
    </div>;
}

export default ProductOverview