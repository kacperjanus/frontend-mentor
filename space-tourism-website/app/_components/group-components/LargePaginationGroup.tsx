import React from 'react';
import LargePagination from "@/app/_components/single-components/LargePagination";

function LargePaginationGroup() {
    return (
        <div className="flex gap-4 desktop:flex-col desktop:gap-8">
            <LargePagination active={false}>1</LargePagination>
            <LargePagination active={true}>2</LargePagination>
            <LargePagination active={true}>3</LargePagination>
        </div>
    );
}

export default LargePaginationGroup;