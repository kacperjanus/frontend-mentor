import React from 'react';
import {NewArticle} from "@/app/_components/Sidebar";

function SideArticle({title, preview}: NewArticle) {
    return (
        <div className="cursor-pointer group px-1">
            <div className="text-off-white group-hover:text-soft-orange">{title}</div>
            <div className="text-sm font-[300] text-grayish-blue ">{preview}</div>
        </div>
    );
}

export default SideArticle;