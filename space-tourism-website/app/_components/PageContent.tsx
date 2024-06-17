import React, {ReactNode} from 'react';

function PageContent({children}: {children: ReactNode}) {
    return (
        <div className="flex flex-grow flex-col desktop:grid desktop:grid-cols-[1fr_1fr] desktop:gap-[32px] tablet:max-w-[512px] desktop:max-w-[1110px] desktop:items-center">
            {children}
        </div>
    );
}

export default PageContent;