import React from 'react';

function PageContainter({children}: {children: React.ReactNode}) {
    return (
        <div className="text-white p-6 flex flex-col items-center flex-grow text-center gap-[16px] desktop:max-w-[1110px] desktop:mx-auto">
            {children}
        </div>
    );
}

export default PageContainter;