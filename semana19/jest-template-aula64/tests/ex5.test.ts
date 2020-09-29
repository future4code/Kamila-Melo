import { Character } from "../src/ex1"
import { performAttack1 } from "../src/ex3"

describe("Testing function performAttack", () => {
    test("Should perform attack", () => {

        const validator = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Pikachu",
            life: 1500,
            force: 500,
            defense: 300
        }

        const defender: Character = {
            name: "Meowth",
            life: 1500,
            force: 400,
            defense: 200
        }

        performAttack1(attacker, defender, validator as any)

        expect(defender.life).toEqual(1200)
        expect(validator).toHaveBeenCalled()
        expect(validator).toHaveBeenCalledTimes(2)
        expect(validator).toReturnTimes(2)
    })

    test("Should return invalid character error", () => {
        expect.assertions(4)
        const validator = jest.fn(() => {
            return false
        })

        const attacker: Character = {
            name: "Pikachu",
            life: 1500,
            force: 0,
            defense: 300
        }

        const defender: Character = {
            name: "Meowth",
            life: 1500,
            force: 400,
            defense: 200
        }

        try {
            performAttack1(attacker, defender, validator as any)
        } catch (error) {
            expect(error.message).toBe("Invalid Character")
            expect(validator).toHaveBeenCalled()
            expect(validator).toHaveBeenCalledTimes(1)
            expect(validator).toReturnTimes(1)
        }
    })
})