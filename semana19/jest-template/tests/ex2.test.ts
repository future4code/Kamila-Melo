import { performPurchase, User } from "../src/ex1"

describe("Testing balance", () => {
    test("Balance greater than the purchase price", () => {
        const user: User = {
            name: "Kamila",
            balance: 200,
        }

        const result = performPurchase(user, 100)

        expect(result).toEqual({...user, balance: 100})
    })

    test("Balance equal to the purchase price", () => {
        const user: User = {
            name: "Kamila",
            balance: 100
        }

        const result = performPurchase(user, 100)

        expect(result).toEqual({...user, balance: 0})
    })

    test("Balance less than the purchase amount", () => {
        const user: User = {
            name: "Kamila",
            balance: 50
        }

        const result = performPurchase(user, 100)

        expect(result).toEqual(undefined)
    })
})