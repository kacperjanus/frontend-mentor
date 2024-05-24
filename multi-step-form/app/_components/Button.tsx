import React from 'react';

function Button({content, confirm} : {content: string, confirm?: boolean}) {
    return (
        <button className={`px-6 py-4 w-[7.56em] bg-marine-blue text-white rounded-lg ${confirm ? "bg-purplish-blue" : 'bg-marine-blue'}`}>{content}</button>
    );
}

export default Button;