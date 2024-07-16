import {AddFormAnswer} from "../_lib/actions";
import {expect, test} from "@jest/globals";

///////////////////////////////////////////////////
// FORM 123: [string[3], number, boolean[3]]

test("form 123", async () => {
    let result

    result = await AddFormAnswer(123, []);
    expect(result).toBe(false)

    result = await AddFormAnswer(123, [["Kacper", "Janus", "FrontendMentor"], 3, [false, false]])
    expect(result).toBe(false)

    result = await AddFormAnswer(123, [["Kacper", "kacperjanus8@gmail.com", "533900909"], 3, [false, false]])
    expect(result).toBe(false)

    result = await AddFormAnswer(123, [["Kacper", "kacperjanus8@gmail.com", "533900909"], 1, [false, false]])
    expect(result).toBe(false)

    result = await AddFormAnswer(123, [["Kacper", "kacperjanus8@gmail.com", "533900909"], 1, [false, false, false]])
    expect(result).toBe(true)
})

///////////////////////////////////////////////////
// FORM 234: [number, boolean[5], string[3], string[2]]

test("form 234", async () => {
    let result

    result = await AddFormAnswer(234, [])
    expect(result).toBe(false)

    result = await AddFormAnswer(234, [5, [false, false, true, true], ["Kacper", "Janus", "533900909"], ["Krolewska 48"]])
    expect(result).toBe(false)

    result = await AddFormAnswer(234, [-1, [false, false, true, true, false], ["Kacper", "kacper@gmail.com", "533900909"], ["Krolewska 48", "Aug 7 1999"]])
    expect(result).toBe(false)

    result = await AddFormAnswer(234, [0, [false, false, true, false], ["Kacper", "kacper@gmail.com", "533900909"], ["Krolewska 48", "Aug 7 1999"]])
    expect(result).toBe(false)

    result = await AddFormAnswer(234, [0, [false, false, true, true, false], ["Kacper", "Janus", "533900909"], ["Krolewska 48", "Aug 7 1999"]])
    expect(result).toBe(false)

    result = await AddFormAnswer(234, [0, [false, false, true, true, false], ["Kacper", "kacper@gmail.com", "533900909"], ["Krolewska 48", ""]])
    expect(result).toBe(false)

    result = await AddFormAnswer(234, [0, [false, false, true, true, false], ["Kacper", "kacper@gmail.com", "533900909"], ["Krolewska 48", "Aug 7 1999"]])
    expect(result).toBe(true)
})

///////////////////////////////////////////////////
// FORM 456: [number, boolean[3], string[3]]

test("form 456", async () => {
    let result

    result = await AddFormAnswer(456, [])
    expect(result).toBe(false)

    result = await AddFormAnswer(456, [3, [false, false], ["Kacper", "Janus", "FrontendMentor"]])
    expect(result).toBe(false)

    result = await AddFormAnswer(456, [3, [false, false, false], ["Kacper", "kacperjanus8@gmail.com", "533900909"]])
    expect(result).toBe(false)

    result = await AddFormAnswer(456, [1, [false, false, false], ["Kacper", "Janus", "533900909"]])
    expect(result).toBe(false)

    result = await AddFormAnswer(456, [1, [false, false, false], ["Kacper", "kacperjanus8@gmail.com", "533900909"]])
    expect(result).toBe(true)
})

///////////////////////////////////////////////////
// FORM 789: [number, boolean[3], string[2], string[3]]

test("form 789", async () => {
    let result

    result = await AddFormAnswer(789, [])
    expect(result).toBe(false)

    result = await AddFormAnswer(789, [3, [false, false], ["Kacper", "Janus", "FrontendMentor"], ["Palacowa", ""]])
    expect(result).toBe(false)

    result = await AddFormAnswer(789, [3, [false, false, false], ["Kacper", "kacperjanus8@gmail.com", "533900909"], ["Palacowa", "Aug 6 1999"]])
    expect(result).toBe(false)

    result = await AddFormAnswer(789, [1, [false, false], ["Kacper", "kacperjanus8@gmail.com", "533900909"], ["Palacowa", "Aug 6 1999"]])
    expect(result).toBe(false)

    result = await AddFormAnswer(789, [1, [false, false, false], ["Kacper", "Janus", "533900909"], ["Palacowa", "Aug 6 1999"]])
    expect(result).toBe(false)

    result = await AddFormAnswer(789, [1, [false, false, false], ["Kacper", "kacperjanus8@gmail.com", "533900909"], ["Palacowa", ""]])
    expect(result).toBe(false)

    result = await AddFormAnswer(789, [1, [false, false, false], ["Kacper", "kacperjanus8@gmail.com", "533900909"], ["Palacowa", "Aug 6 1999"]])
    expect(result).toBe(false)
})