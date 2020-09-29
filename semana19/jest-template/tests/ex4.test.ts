import { NACIONALITY, User, verifyAge, LOCATION, Casino } from "../src/ex3"

describe("Testing permissions", () => {
    test("Testing a Brazilian user who can enter an establishment in Brazil", () => {
        const user: User = {
            name: "Kamila",
            nacionality: NACIONALITY.BRAZILIAN,
            age: 32
        }

        const casino: Casino = {
            name: "Rivalo",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [user])

        expect(result.brazilians.allowed).toEqual(["Kamila"])
    })

    test("Testing a American user who can enter an establishment in Brazil", () => {
        const user: User = {
            name: "Paul",
            nacionality: NACIONALITY.AMERICAN,
            age: 19
        }

        const casino: Casino = {
            name: "Rivalo",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [user])

        expect(result.americans.allowed).toEqual(["Paul"])
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

        expect(result.americans.unallowed).toEqual(["Jack", "Mary"])
        expect(result.brazilians.unallowed).toEqual(["Andrezza", "Natty"])
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

        expect(result.americans.allowed).toEqual(["Jack", "Mary"])
        expect(result.brazilians.unallowed).toEqual(["Andrezza", "Natty"])
    })
})