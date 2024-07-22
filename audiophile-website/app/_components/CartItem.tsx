"use client"

import React from 'react';
import Numbers from "@/app/_components/Numbers";
import {useCart} from "@/app/_lib/contexts/CartContext";

function CartItem({item}: { item: CartItem }) {
    const {updateQuantity, removeFromCart} = useCart()

    return (
        <li key={item.name}
            className="grid grid-cols-[2fr_2fr_3fr] gap-2 items-center">
            <img className="w-16 h-16 rounded-lg" src={item.image.mobile} alt={`${item.name} preview`}/>
            <div className="flex flex-col">
                <p className="font-bold text-[15px] uppercase">{item.name.slice(0, 9)}</p>
                <p className="text-[14px] font-bold text-dark-grey">$ {item.pricePerUnit}</p>
            </div>
            <div className="justify-self-end">
                <Numbers max={10} count={item.quantity} plusFn={() => updateQuantity(item.name, item.quantity + 1
                )}
                         minusFn={item.quantity === 1 ? () => removeFromCart(item.name) : () => updateQuantity(item.name, item.quantity - 1)}/>
            </div>
        </li>
    );
}

export default CartItem;