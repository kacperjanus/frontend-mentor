import {InitialValuesInterface} from "@/app/interfaces";
import {registerSchema, validate} from "@hyperjump/json-schema/draft-2020-12";
import {supabase} from "@/app/_lib/supabase";

//FUNCTION THAT BASED ON PROVIDED FORM ID WILL GET VALIDATION SCHEMA FROM THE DATABASE AND THEN CHECK ALL THE FIELDS BEFORE MAKING A MUTATION ON THE SUPABASE OBJECT
export async function AddFormAnswer(form_id: number, formAnswers: InitialValuesInterface): Promise<void> {

    // 1. Get JSON schema for the form
    const link = `http://localhost:3000/api/schemas/${form_id}`

    // 2. Validate user's answers against the schema
    registerSchema({
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "type": "string"
    }, link)

    const output = await validate(link, JSON.stringify(formAnswers));

    console.log(output)

    // 3. If successful, post the values to form_answers table
    if(output.valid){
        const { data, error } = await supabase
            .from('form_answers')
            .insert([
                { form_id , answers: JSON.parse(JSON.stringify(formAnswers)) },
            ])
            .select()
    }else{
        throw new Error("Submitting answers unsuccessful!")
    }
}