//@ts-nocheck
import {expect, test} from "@jest/globals";
import { matchersWithOptions } from 'jest-json-schema';
expect.extend(matchersWithOptions({verbose: true}));

///////////////////////////////////////////////////
// FORM 123: [string[3], number, boolean[3]]

test("form 123", async () => {
    const schema = {
        "$id": "form123",
        "title": "123 Form schema",
        "description": "Schema that validates answers submitted to form #123",
        "type": "array",
        "items": [
            {
                "type": "array",
                "items": [
                    {
                        "type": "string",
                        "minLength": 1
                    },
                    {
                        "type": "string",
                        "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2}[a-zA-Z]*$"
                    },
                    {
                        "type": "string",
                        "pattern": "^(\\+\\d{1,3}[- ]?)?\\d{5,12}$"
                    }
                ],
                "minItems": 3,
                "maxItems": 3
            },
            {
                "type": "number",
                "minimum": 0,
                "maximum": 2
            },
            {
                "type": "array",
                "items": {
                    "type": "boolean"
                },
                "minItems": 3,
                "maxItems": 3
            }
        ],
        "minItems": 3,
        "maxItems": 3
    }
    expect(schema).toBeValidSchema();

    expect([]).not.toMatchSchema(schema)
    expect([["Kacper", "Janus", "FrontendMentor"], 3, [false, false]]).not.toMatchSchema(schema)
    expect([["Kacper", "kacperjanus8@gmail.com", "533900909"], 3, [false, false]]).not.toMatchSchema(schema)
    expect([["Kacper", "kacperjanus8@gmail.com", "533900909"], 1, [false, false]]).not.toMatchSchema(schema)
    expect([["Kacper", "kacperjanus8@gmail.com", "533900909"], 1, [false, false, true]]).toMatchSchema(schema)
})

///////////////////////////////////////////////////
// FORM 234: [number, boolean[5], string[3], string[2]]

test("form 234", async () => {
    const schema = {
        "$id": "form234",
        "title": "234 Form schema",
        "description": "Schema that validates answers submitted to form #234",
        "type": "array",
        "items": [
            {
                "type": "number",
                "minimum": 0,
                "maximum": 4
            },
            {
                "type": "array",
                "items": {
                    "type": "boolean"
                },
                "minItems": 5,
                "maxItems": 5
            },
            {
                "type": "array",
                "items": [
                    {
                        "type": "string",
                        "minLength": 1
                    },
                    {
                        "type": "string",
                        "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2}[a-zA-Z]*$"
                    },
                    {
                        "type": "string",
                        "pattern": "^(\\+\\d{1,3}[- ]?)?\\d{5,12}$"
                    }
                ],
                "minItems": 3,
                "maxItems": 3
            },
            {
                "type": "array",
                "items": {
                    "type": "string",
                    "minLength": 1
                },
                "minItems": 2,
                "maxItems": 2
            }
        ],
        "minItems": 4,
        "maxItems": 4
    }

    expect([]).not.toMatchSchema(schema)
    expect([5, [false, false, true, true], ["Kacper", "Janus", "533900909"], ["Krolewska 48"]]).not.toMatchSchema(schema)
    expect([0, [false, false, true, false], ["Kacper", "kacper@gmail.com", "533900909"], ["Krolewska 48", "Aug 7 1999"]]).not.toMatchSchema(schema)
    expect([0, [false, false, true, true, false], ["Kacper", "Janus", "533900909"], ["Krolewska 48", "Aug 7 1999"]]).not.toMatchSchema(schema)
    expect([0, [false, false, true, true, false], ["Kacper", "kacper@gmail.com", "533900909"], ["Krolewska 48", ""]]).not.toMatchSchema(schema)
    expect([0, [false, false, true, true, false], ["Kacper", "kacper@gmail.com", "533900909"], ["Krolewska 48", "Aug 7 1999"]]).toMatchSchema(schema)
})

///////////////////////////////////////////////////
// FORM 456: [number, boolean[3], string[3]]

test("form 456", async () => {
    const schema = {
        "$id": "form456",
        "title": "123 Form schema",
        "description": "Schema that validates answers submitted to form #123",
        "type": "array",
        "items": [
            {
                "type": "number",
                "minimum": 0,
                "maximum": 2
            },
            {
                "type": "array",
                "items": {
                    "type": "boolean"
                },
                "minItems": 3,
                "maxItems": 3
            },
            {
                "type": "array",
                "items": [
                    {
                        "type": "string",
                        "minLength": 1
                    },
                    {
                        "type": "string",
                        "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2}[a-zA-Z]*$"
                    },
                    {
                        "type": "string",
                        "pattern": "^(\\+\\d{1,3}[- ]?)?\\d{5,12}$"
                    }
                ],
                "minItems": 3,
                "maxItems": 3
            }
        ],
        "minItems": 3,
        "maxItems": 3
    }

    expect([]).not.toMatchSchema(schema)
    expect([3, [false, false], ["Kacper", "Janus", "FrontendMentor"]]).not.toMatchSchema(schema)
    expect([3, [false, false, false], ["Kacper", "kacperjanus8@gmail.com", "533900909"]]).not.toMatchSchema(schema)
    expect([1, [false, false, false], ["Kacper", "Janus", "533900909"]]).not.toMatchSchema(schema)
    expect([1, [false, false, false], ["Kacper", "kacperjanus8@gmail.com", "533900909"]]).toMatchSchema(schema)
})

///////////////////////////////////////////////////
// FORM 789: [number, boolean[3], string[2], string[3]]

test("form 789", async () => {
    const schema = {
        "$id": "form789",
        "title": "789 Form schema",
        "description": "Schema that validates answers submitted to form #789",
        "type": "array",
        "items": [
            {
                "type": "number",
                "minimum": 0,
                "maximum": 2
            },
            {
                "type": "array",
                "items": {
                    "type": "boolean"
                },
                "minItems": 3,
                "maxItems": 3
            },
            {
                "type": "array",
                "items": [
                    {
                        "type": "string",
                        "minLength": 1
                    },
                    {
                        "type": "string",
                        "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2}[a-zA-Z]*$"
                    },
                    {
                        "type": "string",
                        "pattern": "^(\\+\\d{1,3}[- ]?)?\\d{5,12}$"
                    }
                ],
                "minItems": 3,
                "maxItems": 3
            },
            {
                "type": "array",
                "items": {
                    "type": "string",
                    "minLength": 1
                },
                "minItems": 2,
                "maxItems": 2
            }
        ],
        "minItems": 4,
        "maxItems": 4
    }

    expect([]).not.toMatchSchema(schema)
    expect([3, [false, false], ["Kacper", "Janus", "FrontendMentor"], ["Palacowa", ""]]).not.toMatchSchema(schema)
    expect([1, [false, false], ["Kacper", "kacperjanus8@gmail.com", "533900909"], ["Palacowa", "Aug 6 1999"]]).not.toMatchSchema(schema)
    expect([1, [false, false, false], ["Kacper", "Janus", "533900909"], ["Palacowa", "Aug 6 1999"]]).not.toMatchSchema(schema)
    expect([1, [false, false, false], ["Kacper", "kacperjanus8@gmail.com", "533900909"], ["Palacowa", ""]]).not.toMatchSchema(schema)
    expect([1, [false, false, false], ["Kacper", "kacperjanus8@gmail.com", "533900909"], ["Palacowa", "Aug 6 1999"]]).toMatchSchema(schema)
})