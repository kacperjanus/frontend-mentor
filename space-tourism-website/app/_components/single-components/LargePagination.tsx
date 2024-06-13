import React, {ReactNode} from 'react';

function LargePagination({children, active}: {children: ReactNode, active: boolean}) {
    return (
        <div className={`h-10 w-10 tablet:h-14 tablet:w-14 desktop:h-20 desktop:w-20 rounded-full font-bellefair border-[1px] border-grey hover:border-white ${active? "bg-white text-black": "bg-transparent text-white"} flex items-center justify-center transition-all duration-200"`}>
            <span className="mobile-heading-s tablet:tablet-heading-s desktop:heading-s">
                {children}
            </span>
        </div>
    );
}

export default LargePagination;