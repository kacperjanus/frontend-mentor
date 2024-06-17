import React, {ReactNode} from 'react';

function HomePageContainer({children}: {children: ReactNode}) {
    return (
        <div className="p-6 tablet:px-[40x] tablet:py-[128px] desktop:py-[128px] desktop:max-w-[1110px] h-full desktop:mx-auto flex-grow flex desktop:items-end">
            <div className="flex flex-col desktop:grid desktop:grid-cols-2 desktop:items-end desktop:gap-[48px] flex-grow">
            {children}
            </div>
        </div>
    );
}

export default HomePageContainer;