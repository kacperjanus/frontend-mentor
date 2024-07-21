import React from 'react';
import Button from "@/app/_components/Button";

function YouMayAlsoLike({productData}: { productData: Product }) {
    return (
        <div className="flex flex-col gap-12">
            <h3 className="heading-5 uppercase text-center">you may also like</h3>
            {productData.others.map((item) => <div className="flex flex-col items-center gap-8">
                <img className="rounded-lg" src={item.image.mobile} alt={item.name}/>
                <h4 className="heading-5">{item.name}</h4>
                <Button type="primary">See product</Button>
            </div>)}
        </div>
    );
}

export default YouMayAlsoLike;