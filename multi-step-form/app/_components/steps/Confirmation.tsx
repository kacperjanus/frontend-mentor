import React, {MouseEventHandler, SetStateAction, useEffect, useState} from 'react';
import StepContainer from "@/app/_components/StepContainer";
import {InitialValuesInterface} from "@/app/interfaces";
import {AddFormAnswer} from "@/app/_lib/actions";
import Spinner from "@/app/_components/Spinner";
import Button from "@/app/_components/Button";

function Confirmation({values, formId, setStepNumber}: {values: InitialValuesInterface, formId: number, setStepNumber: React.Dispatch<SetStateAction<number>>}) {

    const [submitSuccessful, setSubmitSuccessful] = useState<boolean | null>(null)
    useEffect( ()=>{
        const submitAnswers = async () => {
            const result = await AddFormAnswer(formId, values)
            setSubmitSuccessful(result)
        }

        submitAnswers();
    }, [formId, values])

    return (
        <StepContainer>
            <div className="flex flex-col md:mt-4 h-full gap-6 items-center justify-center px-8 pt-8 pb-6">
            {submitSuccessful === null ? <Spinner/> : submitSuccessful ? <>
                <img height="80rem" width="80rem" src="/icon-thank-you.svg" alt="Thank You icon"/>
                <h1 className="text-center font-bold text-marine-blue text-2xl md:text-3xl">Thank you!</h1>
                <p className="text-center md:text-base text-sm text-cool-gray">Thanks for confirming your subscription!
                    We hope you have fun using our platform. If you ever need support, please feel free to email us at
                    support@loremgaming.com</p>
            </> : <>
                <h1 className="text-center font-bold text-marine-blue text-2xl md:text-3xl">Error</h1>
                <p className="text-center md:text-base text-sm text-cool-gray">An error ocurred when submitting your answers.
                Please check if all fields have been filled correctly and try again</p>
                <Button
                    setStepNumber={() => setStepNumber(1) as unknown as MouseEventHandler<HTMLButtonElement>}
                    content="Go Back" backButton={true}/></>}
            </div>
        </StepContainer>
    );
}

export default Confirmation;