describe("Testing create Mock", () => {
    test("Testing the creation of a Mock that represents the successful exit of your behavior", () => {
        const validator = jest.fn(() => {
            return true
        })
    })

    test("Testing the creation of a Mock that represents the error / failure output of its behavior", () => {
        const validator = jest.fn(() => {
            return false
        })
    })
})