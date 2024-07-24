import React from "react";
import {Product} from "@/app/interfaces";

function Features(props: { productData: Product }) {
    return <div className="flex flex-col gap-8 mb-16">
        <h3 className="heading-5 desktop:heading-3 uppercase">features</h3>
        <p className="text-dark-grey font-medium text-[15px]">{props.productData.features}</p>
    </div>;
}

export default Features