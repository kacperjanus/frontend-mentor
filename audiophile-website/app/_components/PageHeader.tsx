import React from 'react';

function PageHeader({children}: { children: React.ReactNode }) {
    return (
        <div className="h-[90px] bg-black flex items-center justify-center">
            <h1 className="heading-4 text-white">{children}</h1>
        </div>
    );
}

export default PageHeader;