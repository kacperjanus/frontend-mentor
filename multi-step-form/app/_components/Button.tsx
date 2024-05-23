import React from 'react';

function Button({content} : {content: string}) {
    return (
        <button className="px-6 py-4 bg-marine-blue text-white rounded-lg">{content}</button>
    );
}

export default Button;