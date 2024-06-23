import React, {ReactNode} from 'react';

function Button({type, children}: {type: string, children?: ReactNode}) {
    if(type === "primary") return <button className="w-40 h-12 bg-earthy hover:bg-earthy-light"><span className="uppercase text-[13px] font-bold text-white">{children}</span></button>
    if(type === "secondary") return <button className="w-40 h-12 bg-transparent border-2 border-solid border-black hover:bg-black group"><span className="uppercase text-[13px] group-hover:text-white font-bold text-black">{children}</span></button>
    if(type === "tertiary") return <button className="w-[58px] h-[18px] group flex items-center gap-[13px]"><span className="uppercase text-[13px] font-bold text-[#808080] group-hover:text-earthy">{children}</span><span className="inline-block"><img src="/assets/shared/desktop/icon-arrow-right.svg"/></span></button>
}

export default Button;