import React from 'react';

function InTheBox({productData}: { productData: Product }) {
    return (
        <div className="flex flex-col gap-8 mb-16">
            <h3 className="heading-5 uppercase">in the box</h3>
            <ul>
                {productData.includes.map((item, index) => <li className="grid grid-cols-[1fr_7fr]">
                    <span className="text-earthy font-bold">{item.quantity}x </span>
                    <span className="font-medium text-dark-grey text-[15px]">{item.item}</span>
                </li>)}
            </ul>
        </div>
    );
}

export default InTheBox;