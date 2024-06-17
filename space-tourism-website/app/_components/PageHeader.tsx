import React from 'react';

function PageHeader({children}: {children: string}) {
    const number = children.slice(0, 2)
    return (
        <h2 className="mobile-heading-xs tablet:tablet-heading-xs desktop:heading-xs mb-6 mt-6 tablet:self-start ">
            <span className="text-grey font-bold">{number}</span> {children.slice(2)}
        </h2>
    );
}

export default PageHeader;