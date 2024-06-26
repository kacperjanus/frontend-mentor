import React from 'react';

function About() {
    return (
        <div className="mx-6 text-center flex flex-col gap-10 mb-20">
            <img className="rounded-lg" src="/assets/shared/mobile/image-best-gear.jpg" alt="Person wearing headphones"/>
            <h4>Bringing you the <span className="text-earthy">best</span> audio gear</h4>
            <p className="text-[#7D7D7D]">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
    );
}

export default About;