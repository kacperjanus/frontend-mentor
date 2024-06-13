import React from 'react';

function SmallPagination({active}: {active: boolean}) {
    return (
        <button className={`h-[10px] w-[10px] desktop:h-[15px] desktop:w-[15px] rounded-full ${active ? "bg-white" : "bg-[#36373F] hover:bg-grey"}`}></button>
    );
}

export default SmallPagination;