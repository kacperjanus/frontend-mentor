import React from 'react';

function PageHeader({children}: { children: React.ReactNode }) {
    return (
        <div className="h-[90px] tablet:h-[246px] bg-black flex items-center justify-center mb-20">
            <h1 className="heading-4 tablet:heading-2 text-white">{children}</h1>
        </div>
    );
}

export default PageHeader;