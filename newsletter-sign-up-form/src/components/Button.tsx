import React from 'react';

interface ButtonProps {
    children: string
    onClick?: (event: React.MouseEvent) => void
}

function Button({children, onClick} : ButtonProps) {
    return (
        <div>
            <button onClick={onClick} className="bg-darkslategray hover:bg-gradient-to-r from-[#FF5379] to-tomato hover:shadow-2xl hover:shadow-tomato/50 text-white px-2 py-4 rounded-lg font-semibold w-full"
                    type="submit">{children}
            </button>
        </div>
    );
}

export default Button;