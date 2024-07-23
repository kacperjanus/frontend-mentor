import React from 'react';

function PaymentInfo({cart}: { cart: CartItem[] }) {
    const shippingCost = 50
    const cartValue = cart.reduce((acc, item) => acc + item.quantity * item.pricePerUnit, 0)
    const tax = 0.2 * cartValue

    return (
        <div className="flex flex-col gap-2 mb-8">
            <div className="flex justify-between items-center">
                <span className="uppercase text-dark-grey text-[15px] font-medium">total</span>
                <span className="font-bold text-[18px]">$ {cartValue.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="uppercase text-dark-grey text-[15px] font-medium">shipping</span>
                <span className="font-bold text-[18px]">$ {shippingCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="uppercase text-dark-grey text-[15px] font-medium">vat (included)</span>
                <span className="font-bold text-[18px]">$ {tax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span className="uppercase text-dark-grey text-[15px] font-medium">grand total</span>
                <span
                    className="font-bold text-[18px] text-earthy">$ {(cartValue + shippingCost).toLocaleString()}</span>
            </div>
        </div>
    );
}

export default PaymentInfo;