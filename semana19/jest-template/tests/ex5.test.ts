import { NACIONALITY, User, verifyAge, LOCATION, Casino } from "../src/ex3"

describe("Testing permissions", () => {
    test("Testing Brazilian user who can enter an establishment in Brazil", () => {
        const user: User = {
            name: "Kamila",
            age: 32,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Rivalo",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [user])

        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    })

    test("Testing American user who can enter an establishment in Brazil", () => {
        const user: User = {
            name: "Jhon",
            age: 18,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Rivalo",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [user])

        expect(result.americans.unallowed.length).toEqual(0)
    })

    test("Testing whether two Brazilians and two Americans, both aged 19, can enter an establishment in the EUA", () => {
        const user: User []= [
            {
                name: "Jack",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
                
            },
            {
                name: "Mary",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Andrezza",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Natty",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]

        const casino: Casino = {
            name: "Montana",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, user)

        expect(result.americans.unallowed).toContain("Jack")
        expect(result.brazilians.unallowed).toContain("Natty")
    })

    test("Testing whether two Brazilians (aged 19) and two Americans (aged 21) can enter an establishment in the EUA", () => {
        const user: User []= [
            {
                name: "Jack",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
                
            },
            {
                name: "Mary",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Andrezza",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Natty",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ]

        const casino: Casino = {
            name: "Montana",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, user)

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toBe(2)
    })

})