import React from 'react';

function Overlay({onClick, className}: { onClick?: () => void, className?: string }) {
    return (
        <div onClick={onClick}
             className={`fixed top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.5)] ${className}`}></div>
    );
}

export default Overlay;