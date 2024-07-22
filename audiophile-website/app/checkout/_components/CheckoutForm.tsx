import React from 'react';
import TextField from "@/app/_components/TextField";
import RadioSelectGroup from "@/app/_components/RadioSelectGroup";

function CheckoutForm() {
    return (
        <div className="bg-white rounded-lg p-8">
            <h1 className="heading-4 mb-10">checkout</h1>

            <h2 className="subtitle-element mb-6">billing details</h2>
            <TextField label={"Name"} placeholder={"Alexei Ward"}/>
            <TextField label={"Email Address"} placeholder={"alexei@mail.com"}/>
            <TextField label={"Phone Number"} placeholder={"+1 202-555-0136"}/>

            <h2 className="subtitle-element mb-6">shipping info</h2>
            <TextField label={"Your Address"} placeholder={"1137 Williams Avenue"}/>
            <TextField label={"ZIP Code"} placeholder={"10001"}/>
            <TextField label={"City"} placeholder={"New York"}/>
            <TextField label={"Country"} placeholder={"United States"}/>

            <h2 className="subtitle-element mb-6">payment details</h2>
            <RadioSelectGroup labels={["e-Money", "Cash on Delivery"]}/>

            <TextField label={"e-Money Number"} placeholder={"238521993"}/>
            <TextField label={"e-Money PIN"} placeholder={"6891"}/>
        </div>
    );
}

export default CheckoutForm;
