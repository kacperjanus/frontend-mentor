import {getFormSchema} from "@/app/_lib/data-service";
import {FormAnswers, InitialValuesInterface} from "@/app/interfaces";
import {validate} from "@hyperjump/json-schema";

//FUNCTION THAT BASED ON PROVIDED FORM ID WILL GET VALIDATION SCHEMA FROM THE DATABASE AND THEN CHECK ALL THE FIELDS BEFORE MAKING A MUTATION ON THE SUPABASE OBJECT
export async function AddFormAnswer(form_id: number, formAnswers: InitialValuesInterface): Promise<void> {

    // 1. Get JSON schema for the form
    const schema = await getFormSchema(form_id);

    // 2. Validate user's answers against the schema
    const output = await validate(schema, formAnswers);

    // 3. Create JSON out of user's values
    const answers: FormAnswers = {form_id, answers: formAnswers};

    // 4. If successful, post the values to form_answers table
    if(output.valid){
        //POST VALUES
    }else{
        throw new Error("Submitting answers unsuccessful!")
    }
}