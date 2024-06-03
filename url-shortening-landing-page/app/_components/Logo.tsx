import React from 'react';

function Logo({className}: {className?: string}) {
    return (
        <div>
            <img className={className} src="/logo.svg" alt="logo" />
        </div>
    );
}

export default Logo;