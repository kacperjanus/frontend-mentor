import React from 'react';
import Button from "@/components/Button";

interface ThanksProps {
    email : string
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>
    setEmail: React.Dispatch<React.SetStateAction<string>>
}

function Thanks({email, setSuccess, setEmail}: ThanksProps) {
    const handleClick = ()=>{
        setEmail("");
        setSuccess(false);
    }
    return (
        <div className="div sm:h-[28rem] h-screen sm:w-[28rem] bg-white sm:rounded-3xl flex justify-center">
            <div className="flex flex-col justify-between py-10 px-12 gap-7 sm:justify-center mt-40 sm:mt-0">
                <div className="flex flex-col gap-7">
                <img className="w-14 mb-2" src="/images/icon-success.svg"/>
                <h1 className="text-darkslategray font-bold text-5xl">Thanks for subscribing!</h1>
                <p className="text-sm">A confirmation email has been sent to <span className="font-bold">{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
                </div>
                <Button onClick={handleClick}>Dismiss message</Button>
            </div>
        </div>
    );
}

export default Thanks;