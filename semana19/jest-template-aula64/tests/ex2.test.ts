import { validateCharacter } from "../src/ex1"

describe("Testing function validateCharacter", () => {
    test("Testing the behavior of the function with a character with an empty name", () => {
        const character = {
            name: "",
            life: 1500,
            defense: 300,
            force: 500
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Testing the behavior of the function with a character with an empty life", () => {
        const character: any = {
            name: "Pikachu",
            life: undefined,
            defense: 300,
            force: 500
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Testing the behavior of the function with a character with an empty force", () => {
        const character: any = {
            name: "Pikachu",
            life: 1500,
            defense: 300,
            force: undefined
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Testing the behavior of the function with a character with an empty defense", () => {
        const character: any = {
            name: "Pikachu",
            life: 1500,
            defense: undefined,
            force: 500
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Testing the behavior of the role with a character with life or strength or defense with a negative value", () => {
        const character = {
            name: "Pikachu",
            life: -1500,
            defense: 300,
            force: 500
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Testing the behavior of the function with a character with the defense with a value of 0", () => {
        const character = {
            name: "Pikachu",
            life: 1500,
            defense: 0,
            force: 500
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Testing the behavior of the function with a character with the valid information", () => {
        const character = {
            name: "Pikachu",
            life: 1500,
            defense: 300,
            force: 500
        }

        const result = validateCharacter(character)

        expect(result).toBe(true)
    })


})