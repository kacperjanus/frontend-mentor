import React from 'react';
import Button from "@/app/_components/Button";
import {Product} from "@/app/interfaces";

function YouMayAlsoLike({productData}: { productData: Product }) {
    return (
        <div className="flex flex-col gap-12 mb-12">
            <h3 className="heading-5 desktop:heading-3 uppercase text-center">you may also like</h3>
            <div className="flex flex-col tablet:flex-row gap-12">
                {productData.others.map((item) => <div key={item.name} className="flex flex-col items-center gap-8">
                    <img className="block tablet:hidden rounded-lg" src={item.image.mobile} alt={item.name}/>
                    <img className="hidden tablet:block desktop:hidden rounded-lg" src={item.image.tablet}
                         alt={item.name}/>
                    <img className="hidden desktop:block rounded-lg" src={item.image.desktop} alt={item.name}/>
                    <h4 className="heading-5">{item.name}</h4>
                    <Button link={item.slug} type="primary">See product</Button>
                </div>)}
            </div>
        </div>
    );
}

export default YouMayAlsoLike;