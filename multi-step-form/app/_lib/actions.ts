import {InitialValuesInterface} from "@/app/interfaces";
import {registerSchema, unregisterSchema, validate} from "@hyperjump/json-schema/draft-2020-12";
import {supabase} from "@/app/_lib/supabase";

//FUNCTION THAT BASED ON PROVIDED FORM ID WILL GET VALIDATION SCHEMA FROM THE DATABASE AND THEN CHECK ALL THE FIELDS BEFORE MAKING A MUTATION ON THE SUPABASE OBJECT
export async function AddFormAnswer(form_id: number, formAnswers: InitialValuesInterface): Promise<boolean> {
    // Handling default case where there is no form number and the answers don't have to be stored
    if(form_id === -1) return true

    // 1. Get JSON schema for the form
    const link = `${window.location.origin}/api/schemas/${form_id}`

    const response = await fetch(link);
    if(!response.ok) {
        throw new Error("Failed to fetch schema")
    }

    const schema = await response.json();

    // 2. Validate user's answers against the schema
    unregisterSchema(link);
    registerSchema(schema, link)

    const output = await validate(link, formAnswers);

    // 3. If successful, post the values to form_answers table
    if(output.valid){
        await supabase
            .from('form_answers')
            .insert([
                { form_id , answers: JSON.parse(JSON.stringify(formAnswers)) },
            ])
            .select()
        return true
    }else{
        console.warn("Submitting answers unsuccessful!")
        return false
    }
}