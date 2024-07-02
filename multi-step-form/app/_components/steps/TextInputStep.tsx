import React, {useState} from 'react';
import Input from "@/app/_components/Input";
import {InitialValuesInterface, textInputField} from "@/app/interfaces";
import NavigationButtons from "@/app/_components/NavigationButtons";

interface TextInputStepProps {
    fields: textInputField[],
    setStepNumber: React.Dispatch<React.SetStateAction<number>>;
    values: string[]
    setValues: React.Dispatch<React.SetStateAction<InitialValuesInterface>>
    stepNumber: number
}

function TextInputStep({fields, setStepNumber, values, setValues, stepNumber}: TextInputStepProps) {
    const onClickButton = function () {
        setIsSubmitted(true)
    }

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isValid, setIsValid] = useState<boolean[]>(new Array(fields.length).fill(false))

    return (
        <div className="h-full mb-4 flex flex-col justify-between">
            <div className="md:overflow-y-auto md:h-[300px]">
                {fields.map((el: textInputField, i: number) => <Input
                    el={el}
                    index={i}
                    key={fields[i].label}
                    valid={isValid[i]}
                    value={values[i]}
                    isSubmitted={isSubmitted}
                    setIsValid={setIsValid}
                    onChange={(value) => setValues(s => s.with(stepNumber - 1, values.with(i, value as string)))}
                />)}
            </div>
            <NavigationButtons onClick={onClickButton} canGoNext={isValid.every(el => el)} step={stepNumber}
                               setStepNumber={setStepNumber}/>
        </div>
    );
}

export default TextInputStep;