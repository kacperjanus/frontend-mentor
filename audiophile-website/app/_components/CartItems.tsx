import React from 'react';
import Button from "@/app/_components/Button";
import CartItem from "@/app/_components/CartItem";
import {CartItem as CartItemInterface} from "@/app/interfaces";

function CartItems({cart}: { cart: CartItemInterface[] }) {
    if (cart.length === 0) return <div className="my-10 uppercase text-center font-medium text-dark-grey">
        Cart is empty
    </div>

    return (
        <>
            <ul className="flex flex-col gap-4 my-10">
                {cart.map((item: CartItem) => <CartItem key={item.name} item={item}/>)}
            </ul>

            <div className="flex justify-between mb-8 items-center">
                <span className="font-medium text-[15px] uppercase text-dark-grey">TOTAL</span>
                <span className="font-bold text-[18px]">$ {cart?.reduce((acc, item) => acc + item.pricePerUnit * item.quantity, 0).toLocaleString()}</span>
            </div>

            <Button className="w-full" type="primary" link="/checkout">Checkout</Button>
        </>
    );
}

export default CartItems;