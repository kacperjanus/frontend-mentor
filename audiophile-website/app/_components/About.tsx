import React from 'react';

function About() {
    return (
        <div
            className="text-center desktop:text-start flex flex-col desktop:flex-row gap-10 desktop:gap-[125px] my-20">
            <img className="rounded-lg block tablet:hidden" src="/assets/shared/mobile/image-best-gear.jpg"
                 alt="Person wearing headphones"/>
            <img className="rounded-lg hidden tablet:block desktop:hidden"
                 src="/assets/shared/tablet/image-best-gear.jpg" alt="Person wearing headphones"/>
            <img className="rounded-lg hidden desktop:block desktop:order-1"
                 src="/assets/shared/desktop/image-best-gear.jpg"
                 alt="Person wearing headphones"/>
            <div className="flex flex-col gap-10 tablet:w-[573px] tablet:mx-auto desktop:justify-center">
                <h1 className="heading-4 tablet:heading-2 text-[40px]">Bringing you the <span
                    className="text-earthy">best</span> audio
                    gear</h1>
                <p className="text-dark-grey">Located at the heart of New York City, Audiophile is the premier store for
                    high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury
                    demonstration rooms available for you to browse and experience a wide range of our products. Stop by
                    our store to meet some of the fantastic people who make Audiophile the best place to buy your
                    portable audio equipment.</p>
            </div>
        </div>
    );
}

export default About;