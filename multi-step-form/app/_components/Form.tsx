import React, {useState} from 'react';
import Sidebar from "@/app/_components/Sidebar";
import StepContent from "@/app/_components/StepContent";

function Form() {
    const [stepNumber, setStepNumber] = useState();

    return (
        <div className="container bg-white max-w-5xl max-h-2xl h-fit rounded-2xl p-5 flex ">
            <Sidebar/>
            <StepContent title="Personal info" description="Please provide your name, email address, and phone number."/>
        </div>
    );
}

export default Form;