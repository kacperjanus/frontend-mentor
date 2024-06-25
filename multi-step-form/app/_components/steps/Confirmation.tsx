import React, {useEffect} from 'react';
import StepContainer from "@/app/_components/StepContainer";
import {InitialValuesInterface} from "@/app/interfaces";
import {AddFormAnswer} from "@/app/_lib/actions";

function Confirmation({values, formId}: {values: InitialValuesInterface, formId: number}) {
    useEffect( ()=>{
        const submitAnswers = async () => {
            await AddFormAnswer(formId, values)
        }

        submitAnswers();
    }, [])

    return (
        <StepContainer>
            <div className="flex flex-col md:mt-4 h-full gap-6 items-center justify-center px-8 pt-8 pb-6">
                <img height="80rem" width="80rem" src="/icon-thank-you.svg" alt="Thank You icon" />
                <h1 className="text-center font-bold text-marine-blue text-2xl md:text-3xl">Thank you!</h1>
                <p className="text-center md:text-base text-sm text-cool-gray">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
            </div>
        </StepContainer>
    );
}

export default Confirmation;