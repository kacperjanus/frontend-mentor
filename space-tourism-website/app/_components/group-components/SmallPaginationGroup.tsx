import React from 'react';
import SmallPagination from "@/app/_components/single-components/SmallPagination";

function SmallPaginationGroup() {
    return (
        <div className="flex gap-4 desktop:gap-10">
            <SmallPagination active={true}/>
            <SmallPagination active={false}/>
            <SmallPagination active={true}/>
            <SmallPagination active={true}/>
        </div>
    );
}

export default SmallPaginationGroup;