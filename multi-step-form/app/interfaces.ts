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

type singleSelect = {
    type: "singleSelect"
    stepTitle: string,
    stepDescription: string,
    fields: {
        image: string,
        optionTitle: string,
        optionDescription: string,
    }[]
}

type multipleSelect = {
    type: "multipleSelect",
    stepTitle: string,
    stepDescription: string,
    fields: {
        primary: string
        optionTitle: string,
        optionDescription: string,
    }[]
}

type textInput = {
    type: "textInput",
    stepTitle: string,
    stepDescription: string,
    fields: {
        label: string
        placeholder: string,
        regex: string,
    }[]
}

type step = singleSelect | multipleSelect | textInput

export interface FormData {
    form_id: number,
    steps: step[]
}