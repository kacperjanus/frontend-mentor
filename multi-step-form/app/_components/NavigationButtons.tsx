import React, {MouseEventHandler, SetStateAction} from 'react';
import Button from "@/app/_components/Button";

interface NavigationButtonsProps {
    step: number,
    setStepNumber: React.Dispatch<SetStateAction<number>>
    summary?: boolean
}

function NavigationButtons({step, setStepNumber, summary}: NavigationButtonsProps) {
    return (
        <div
            className="flex md:justify-between items-center fixed bg-white justify-center gap-24 md:static bottom-0 right-0 self-end md:bg-none w-full">
            <div>
                {step > 1 && <Button
                    setStepNumber={() => setStepNumber(step - 1) as unknown as MouseEventHandler<HTMLButtonElement>}
                    content="Go Back" backButton={true}/>}
            </div>
            <div className="mb-4">
                {summary ? <Button confirm={true} setStepNumber={()=>setStepNumber(step+1) as unknown as MouseEventHandler<HTMLButtonElement>} content="Confirm"/>: <Button  setStepNumber={()=>setStepNumber(step+1) as unknown as MouseEventHandler<HTMLButtonElement>} content="Next Step"/>}
            </div>
        </div>
    );
}

export default NavigationButtons;