import React from 'react';

function Button({content, confirm, setStepNumber, backButton} : {content: string, confirm?: boolean, setStepNumber: React.MouseEventHandler<HTMLButtonElement>, backButton?: boolean}) {

    if (backButton) return <button onClick={setStepNumber} className="text-cool-gray hover:text-marine-blue">{content}</button>

    return <button onClick={setStepNumber} className={`px-6 py-4 w-[7.56rem] bg-marine-blue text-white rounded-lg ${confirm ? "bg-purplish-blue" : 'bg-marine-blue'}`}>{content}</button>
}

export default Button;