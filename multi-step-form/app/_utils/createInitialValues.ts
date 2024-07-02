import {FormData} from "@/app/interfaces"

export function createInitialValues({steps}: FormData) {
    const output = []

    for(let i = 0; i < steps.length; i++){
        if(steps[i].type === "textInput") output.push(new Array(steps[i].fields.length).fill(""))
        if(steps[i].type === "singleSelect") output.push(0);
        if(steps[i].type === "multipleSelect") output.push(new Array(steps[i].fields.length).fill(false))
    }

    return output
}