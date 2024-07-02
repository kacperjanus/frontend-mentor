import {AddFormAnswer} from "@/app/_lib/actions";

export async function submitAnswerTests() {
    let result
    ///////////////////////////////////////////////////
    // FORM 123: [string["", email, phoneNumber], number, boolean[3]]

    result = await AddFormAnswer(123, [])
    if(result) console.error("Error 1")

    result = await AddFormAnswer(123, [["Kacper", "Janus", "FrontendMentor"], 3, [false, false]])
    if(result) console.error("Error 2")

    result = await AddFormAnswer(123, [["Kacper", "kacperjanus8@gmail.com", "533900909"], 3, [false, false]])
    if(result) console.error("Error 3")

    result = await AddFormAnswer(123, [["Kacper", "kacperjanus8@gmail.com", "533900909"], 1, [false, false]])
    if(result) console.error("Error 4")

    result = await AddFormAnswer(123, [["Kacper", "kacperjanus8@gmail.com", "533900909"], 1, [false, false, false]])
    if(!result) console.error("Error 5")

    ///////////////////////////////////////////////////
    // FORM 234: [number, boolean[5], string[3], string[2]]

    result = await AddFormAnswer(123, [])
    if(result) console.error("Error 6")

    result = await AddFormAnswer(234, [5, [false, false, true, true], ["Kacper", "Janus", "533900909"], ["Krolewska 48"]])
    if(result) console.error("Error 7")

    result = await AddFormAnswer(234, [-1, [false, false, true, true, false], ["Kacper", "kacper@gmail.com", "533900909"], ["Krolewska 48", "Aug 7 1999"]])
    if(result) console.error("Error 8")

    result = await AddFormAnswer(234, [0, [false, false, true, false], ["Kacper", "kacper@gmail.com", "533900909"], ["Krolewska 48", "Aug 7 1999"]])
    if(result) console.error("Error 9")

    result = await AddFormAnswer(234, [0, [false, false, true, true, false], ["Kacper", "Janus", "533900909"], ["Krolewska 48", "Aug 7 1999"]])
    if(result) console.error("Error 10")

    result = await AddFormAnswer(234, [0, [false, false, true, true, false], ["Kacper", "kacper@gmail.com", "533900909"], ["Krolewska 48", ""]])
    if(result) console.error("Error 11")

    result = await AddFormAnswer(234, [0, [false, false, true, true, false], ["Kacper", "kacper@gmail.com", "533900909"], ["Krolewska 48", "Aug 7 1999"]])
    if(!result) console.error("Error 12")

    ///////////////////////////////////////////////////
    // FORM 456: [number, boolean[3], string[3]]

    result = await AddFormAnswer(456, [])
    if(result) console.error("Error 13")

    result = await AddFormAnswer(456, [3, [false, false], ["Kacper", "Janus", "FrontendMentor"]])
    if(result) console.error("Error 14")

    result = await AddFormAnswer(456, [3, [false, false, false], ["Kacper", "kacperjanus8@gmail.com", "533900909"]])
    if(result) console.error("Error 17")

    result = await AddFormAnswer(456, [1, [false, false, false], ["Kacper", "Janus", "533900909"]])
    if(result) console.error("Error 18")

    result = await AddFormAnswer(456, [1, [false, false, false], ["Kacper", "kacperjanus8@gmail.com", "533900909"]])
    if(!result) console.error("Error 19")

    ///////////////////////////////////////////////////
    // FORM 789: [number, boolean[3], string[2], string[3]]

    result = await AddFormAnswer(789, [])
    if(result) console.error("Error 20")

    result = await AddFormAnswer(789, [3, [false, false], ["Kacper", "Janus", "FrontendMentor"], ["Palacowa", ""]])
    if(result) console.error("Error 21")

    result = await AddFormAnswer(789, [3, [false, false, false], ["Kacper", "kacperjanus8@gmail.com", "533900909"], ["Palacowa", "Aug 6 1999"]])
    if(result) console.error("Error 22")

    result = await AddFormAnswer(789, [1, [false, false], ["Kacper", "kacperjanus8@gmail.com", "533900909"], ["Palacowa", "Aug 6 1999"]])
    if(result) console.error("Error 23")

    result = await AddFormAnswer(789, [1, [false, false, false], ["Kacper", "Janus", "533900909"], ["Palacowa", "Aug 6 1999"]])
    if(result) console.error("Error 24")

    result = await AddFormAnswer(789, [1, [false, false, false], ["Kacper", "kacperjanus8@gmail.com", "533900909"], ["Palacowa", ""]])
    if(result) console.error("Error 25")

    result = await AddFormAnswer(789, [1, [false, false, false], ["Kacper", "kacperjanus8@gmail.com", "533900909"], ["Palacowa", "Aug 6 1999"]])
    if(!result) console.error("Error 26")
}