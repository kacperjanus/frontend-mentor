import React from 'react';
import StepContainter from "@/app/_components/StepContainter";

function Confirmation() {
    return (
        <StepContainter>
        <div className="flex flex-col md:mt-4 h-full gap-6 items-center justify-center px-8 pt-8 pb-6">
                <img height="80rem" width="80rem" src="/icon-thank-you.svg" alt="Thank You icon" />
                <h1 className="text-center font-bold text-marine-blue text-2xl md:text-3xl">Thank you!</h1>
                <p className="text-center md:text-base text-sm text-cool-gray">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>
        </StepContainter>
    );
}

export default Confirmation;