import React, {MouseEventHandler, SetStateAction} from 'react';
import Button from "@/app/_components/Button";

interface NavigationButtonsProps {
    step: number,
    decreaseStep: React.Dispatch<SetStateAction<number>>,
    increaseStep: React.Dispatch<SetStateAction<number>>
}

function NavigationButtons({increaseStep, decreaseStep}: NavigationButtonsProps) {
    return (
        <div
            className="flex md:justify-between items-center fixed bg-white justify-center gap-24 md:static bottom-0 right-0 self-end md:bg-none w-full">
            <div>
                <Button setStepNumber={decreaseStep as unknown as MouseEventHandler<HTMLButtonElement>} content="Go Back" backButton={true}/>
            </div>
            <div className="mb-4">

                <Button setStepNumber={increaseStep as unknown as MouseEventHandler<HTMLButtonElement>} content="Next Step"/>
            </div>
        </div>
    );
}

export default NavigationButtons;