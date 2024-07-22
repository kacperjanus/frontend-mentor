"use client"

import {createContext, ReactNode, useContext, useState} from "react";

interface CartContextType {
    cart: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (product: string) => void
    clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({children}: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([])

    const removeFromCart = (product: string) => setCart((prevCart) => prevCart.filter(item => item.name !== product))

    const addToCart = (item: CartItem) => {
        const productInCart = cart.find(product => product.name === item.name)

        if (productInCart) {
            removeFromCart(item.name);
            setCart((prevCart) => [...prevCart, {
                ...item,
                quantity: item.quantity + productInCart.quantity
            }])
        } else {
            setCart((prevCart) => [...prevCart, item])
        }
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const cartContext = useContext(CartContext)
    if (!cartContext) {
        throw new Error("useCart must be inside a CartProvider")
    }
    return cartContext;
}