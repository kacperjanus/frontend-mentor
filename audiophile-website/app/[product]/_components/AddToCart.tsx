"use client"

import React, {useState} from 'react';
import Numbers from "@/app/_components/Numbers";
import Button from "@/app/_components/Button";
import {useCart} from "@/app/_lib/contexts/CartContext";

function AddToCart({productData}: { productData: Product }) {
    const [count, setCount] = useState(1)

    const {addToCart} = useCart()

    const addToCartFunction = () => {
        const item = {
            image: productData.image,
            name: productData.slug,
            quantity: count,
            pricePerUnit: productData.price
        }
        addToCart(item)
    }

    return (
        <div className="flex gap-4">
            <Numbers count={count} setCount={setCount} max={10}/>
            <Button fn={addToCartFunction}
                    type="primary">Add to cart</Button>
        </div>
    );
}

export default AddToCart;