"use client"

import {createContext, ReactNode, useContext, useState} from "react";
import {CartItem} from "@/app/interfaces";

interface CartContextType {
    cart: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (product: string) => void
    clearCart: () => void
    updateQuantity: (item: string, newQuantity: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({children}: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([])

    const removeFromCart = (product: string) => setCart((prevCart) => prevCart.filter(item => item.name !== product))

    const addToCart = (item: CartItem) => {
        const productInCart = cart.find(product => product.name === item.name)

        if (productInCart) {
            updateQuantity(item.name, item.quantity + productInCart.quantity)
        } else {
            setCart((prevCart) => [...prevCart, item])
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const updateQuantity = (item: string, newQuantity: number) => {
        const productInCart = cart.find(product => product.name === item)

        if (productInCart) {
            removeFromCart(item);
            setCart((prevCart) => [...prevCart, {
                ...productInCart,
                quantity: newQuantity
            }])
        }
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, updateQuantity}}>
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