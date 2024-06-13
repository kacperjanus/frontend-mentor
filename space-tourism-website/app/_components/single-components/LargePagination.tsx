import React, {ReactNode} from 'react';

type technology = "launch-vehicle" | "spaceport" | "space-capsule";

function LargePagination({children, active, onClick}: {children: ReactNode, active: boolean, onClick: ()=>void}) {
    return (
        <div onClick={onClick} className={`h-10 w-10 tablet:h-14 tablet:w-14 desktop:h-20 desktop:w-20 cursor-pointer rounded-full font-bellefair border-[1px] border-grey ${active? "bg-white text-black": " hover:border-white bg-transparent text-white"} flex items-center justify-center transition-all duration-200"`}>
            <span className="mobile-heading-s tablet:tablet-heading-s desktop:heading-s">
                {children}
            </span>
        </div>
    );
}

export default LargePagination;