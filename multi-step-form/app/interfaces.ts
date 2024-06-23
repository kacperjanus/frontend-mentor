export type singleSelectOption = {
    image: string,
    optionTitle: string,
    optionDescription: string,
}

export type multipleSelectOption = {
    primary: string
    optionTitle: string,
    optionDescription: string,
}

export type textInputField = {
    label: string
    placeholder: string,
    regex: string,
}

interface FormStep {
    stepTitle: string,
    stepDescription: string,
    sidebarText: string,
}

interface multipleSelect extends FormStep {
    type: "multipleSelect",
    fields: multipleSelectOption[]
}

interface singleSelect extends FormStep {
    type: "singleSelect"
    fields: singleSelectOption[]
}

interface textInput extends FormStep {
    type: "textInput",
    fields: textInputField[]
}

export type step = singleSelect | multipleSelect | textInput

export interface FormData {
    form_id: number,
    steps: step[]
}

export type InitialValuesInterface = (string[] | number | boolean[])[]