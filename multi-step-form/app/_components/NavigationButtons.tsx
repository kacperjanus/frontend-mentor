import React, {MouseEventHandler, SetStateAction} from 'react';
import Button from "@/app/_components/Button";

interface NavigationButtonsProps {
    step: number,
    setStepNumber: React.Dispatch<SetStateAction<number>>
    summary?: boolean
    onClick?: ()=>void;
    canGoNext?: boolean
}

function NavigationButtons({step, setStepNumber, summary, onClick, canGoNext}: NavigationButtonsProps) {
    function onClickNext() {
        onClick && onClick();
        if (canGoNext) setStepNumber(step + 1)
    }

    return (
        <div
            className="flex md:justify-between items-center fixed bg-white justify-center gap-24 md:static bottom-0 right-0 self-end mt-auto md:bg-none w-full">
            <div>
                {step > 1 && <Button
                    setStepNumber={() => setStepNumber(step - 1) as unknown as MouseEventHandler<HTMLButtonElement>}
                    content="Go Back" backButton={true}/>}
            </div>
            <div>
                {summary ? <Button confirm={true} setStepNumber={ onClickNext as unknown as MouseEventHandler<HTMLButtonElement>} content="Confirm"/>: <Button setStepNumber={ onClickNext as unknown as MouseEventHandler<HTMLButtonElement>} content="Next Step"/>}
            </div>
        </div>
    );
}

export default NavigationButtons;