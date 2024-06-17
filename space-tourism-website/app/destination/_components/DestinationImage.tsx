import React from 'react';
import {Destination} from "@/app/interfaces";

function DestinationImage({curDestination}: {curDestination: Destination}) {
    return (
        <div className="h-[150px] w-[150px] tablet:h-[300px] tablet:w-[300px] desktop:h-[480px] desktop:w-[480px] mx-auto my-12">
            <img src={`/destination/image-${curDestination}.png`} alt="Destination planet"/>
        </div>
    );
}

export default DestinationImage;