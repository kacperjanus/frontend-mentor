import React from 'react';

function PageContainer({children}: { children: React.ReactNode }) {
    return (
        <div className="mx-6 tablet:mx-10 desktop:mx-auto desktop:max-w-[1110px]">
            {children}
        </div>
    );
}

export default PageContainer;