import React from 'react';

function HomeDescription() {
    return (
        <div className="text-white text-center desktop:text-start">
            <h2 className="uppercase mobile-heading-xs tablet:heading-xs text-light-blue mb-6">So, you want to
                travel to</h2>
            <h1 className="mobile-heading-xl tablet:heading-xl mb-6">SPACE</h1>
            <p className="mobile-body text-light-blue">Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we’ll give you a truly out of this world experience!</p>
        </div>
    );
}

export default HomeDescription;