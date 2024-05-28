import React, {FormEventHandler, useState} from 'react';
import Input from "@/app/_components/Input";
import Button from "@/app/_components/Button";

function StepOne({setStepNumber}: {setStepNumber: React.Dispatch<React.SetStateAction<number>>}) {
    const increaseStep: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        if(name!=="" && email!=="" && phoneNumber!=="") setStepNumber((s)=>s+1)
    }

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit: FormEventHandler<HTMLFormElement> = function(e){
        e.preventDefault();
        setIsSubmitted((s)=>!s)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between" noValidate>
            <div>
            <Input value={name} onChange={setName} isSubmitted={isSubmitted} label="Name" placeholder="e.g. Stephen King"/>
            <Input value={email} onChange={setEmail} isSubmitted={isSubmitted} label="Email Address" placeholder="e.g. stephenking@lorem.com"/>
            <Input value={phoneNumber} onChange={setPhoneNumber} isSubmitted={isSubmitted} label="Phone Number" placeholder="e.g. +1 234 567 890"/>
            </div>
            <div className="md:static w-full fixed bg-white top-[31em] bottom-0 right-0 justify-center md:justify-end flex py-4 pr-4 md:py-0 md:pr-0 self-end md:bg-none ">
                <div className="ml-[10.7rem] md:ml-0">
                <Button setStepNumber={increaseStep} content="Next Step"/>
                </div>
            </div>
        </form>
    );
}

export default StepOne;