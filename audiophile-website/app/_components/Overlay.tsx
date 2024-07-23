import React from 'react';

function Overlay({onClick}: { onClick?: () => void }) {
    return (
        <div onClick={onClick}
             className="fixed top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.5)]"></div>
    );
}

export default Overlay;