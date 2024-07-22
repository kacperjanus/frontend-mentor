import React from 'react';

function InTheBox({productData}: { productData: Product }) {
    return (
        <div className="flex flex-col tablet:grid tablet:grid-cols-2 desktop:flex desktop:flex-col gap-8 mb-16">
            <h3 className="heading-5 desktop:heading-3 uppercase">in the box</h3>
            <ul>
                {productData.includes.map((item, index) => <li key={index} className="grid grid-cols-[1fr_7fr] mb-2">
                    <span className="text-earthy font-bold">{item.quantity}x </span>
                    <span className="font-medium text-dark-grey text-[15px]">{item.item}</span>
                </li>)}
            </ul>
        </div>
    );
}

export default InTheBox;