import React from 'react';
import {Technology} from "@/app/interfaces";

function TechnologyImage({curTechnology}: {curTechnology: Technology}) {
    return (
        <div className="w-full desktop:order-1 mx-auto my-8 desktop:mb-0">
            <img className="hidden desktop:block w-full" src={`/technology/image-${curTechnology}-portrait.jpg`}
                 alt="Technology used"/>
            <img className="desktop:hidden block w-full" src={`/technology/image-${curTechnology}-landscape.jpg`}
                 alt="Technology used"/>
        </div>
    );
}

export default TechnologyImage;