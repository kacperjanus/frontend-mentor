import React from 'react';

interface ButtonProps {
    children: string
}

function Button({children} : ButtonProps) {
    //TODO add button glow in active state
    return (
        <div>
            <button className="bg-darkslategray hover:bg-tomato text-white px-2 py-4 rounded-lg font-semibold w-full"
                    type="submit">{children}
            </button>
        </div>
    );
}

export default Button;