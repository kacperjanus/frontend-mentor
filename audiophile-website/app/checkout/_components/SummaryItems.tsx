import React from 'react';

function SummaryItems({cart}: { cart: CartItem[] }) {
    return (
        <ul className="flex flex-col gap-4 my-10">
            {cart.map((item: CartItem) => <li key={item.name}
                                              className="grid grid-cols-[auto_2fr_2fr] tablet:grid-cols-[auto_10fr_1fr] desktop:grid-cols-[4fr_10fr_1fr] gap-2 items-center">
                <img className="w-16 h-16 rounded-lg" src={item.image.mobile} alt={`${item.name} preview`}/>
                <div className="flex flex-col">
                    <p className="font-bold text-[15px] uppercase">{item.name}</p>
                    <p className="text-[14px] font-bold text-dark-grey">$ {item.pricePerUnit}</p>
                </div>
                <span className="justify-self-end">x{item.quantity}</span>
            </li>)}
        </ul>
    );
}

export default SummaryItems;