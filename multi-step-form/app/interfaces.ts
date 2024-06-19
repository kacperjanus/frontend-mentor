export type PlanOption = "Pro" | "Arcade" | "Advanced"

export interface AddOn {
    title: string,
    description: string,
    price: {monthly: number, yearly: number}
}

export interface Plan {
    title: PlanOption,
    image: string,
    price: {monthly: number, yearly: number}
}

export type singleSelectOption = {
    image: string,
    optionTitle: string,
    optionDescription: string,
}

type singleSelect = {
    type: "singleSelect"
    stepTitle: string,
    stepDescription: string,
    sidebarText: string,
    fields: singleSelectOption[]
}

export type multipleSelectOption = {
    primary: string
    optionTitle: string,
    optionDescription: string,
}

type multipleSelect = {
    type: "multipleSelect",
    stepTitle: string,
    stepDescription: string,
    sidebarText: string,
    fields: multipleSelectOption[]
}

export type textInputField = {
    label: string
    placeholder: string,
    regex: string,
}

type textInput = {
    type: "textInput",
    stepTitle: string,
    stepDescription: string,
    sidebarText: string,
    fields: textInputField[]
}

export type step = singleSelect | multipleSelect | textInput

export interface FormData {
    form_id: number,
    steps: step[]
}

export interface InitialValuesInterface{
    name: string,
    email: string,
    phoneNumber: string,
    selectedAddOns: boolean[],
    selectedPlan: PlanOption,
    isMonthly: boolean
}