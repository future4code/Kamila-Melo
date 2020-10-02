### Exercício 1

a)
```
export interface character {
    name: string,
    life: number,
    defense: number,
    force: number
}
```

b)
```
export function validateCharacter(character: Character): boolean{
    if(!character.name || !character.life || !character.defense || !character.force){
        return false
    }

    if(character.life <= 0 || character.defense <= 0 || character.force <=0){
        return false
    }

    return true
}
```

### Exercício 2

a)
```
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
})
```

b)
```
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
```

c)
```
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
```

d)
```
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
```

e)
```
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
```

f)
```
test("Testing the behavior of the function with a character with an empty defense", () => {
        const character = {
            name: "Pikachu",
            life: 1500,
            defense: 0,
            force: 500
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })
```

g)
```
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
```

### Exercício 3

a)
```
import { Character, validateCharacter } from "./ex1";

export function performAttack(attacker: Character, defender: Character){
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error("Invalid Character")
    }

    if(attacker.force > defender.defense){
        defender.life = attacker.force - defender.defense
    }
}
```

b)
```
export const performAttack1 = (attacker: Character, defender: Character, validator: (character: Character) => boolean) => {
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error("Invalid Character")
    }

    if(attacker.force > defender.defense){
        defender.life = attacker.force - defender.defense
    }
}
```

c) A diferença é que o parâmetro de uma função é passado dentro do parâmetro de outra.

### Exercício 4

a) Na função performAttack, pois ela utiliza a função validateCharacter.

b)
```
describe("Testing create Mock", () => {
    test("Testing the creation of a Mock that represents the successful exit of your behavior", () => {
        const validator = jest.fn(() => {
            return true
        })
    })
})
```

c)
```
test("Testing the creation of a Mock that represents the error / failure output of its behavior", () => {
        const validator = jest.fn(() => {
            return false
        })
    })
```

### Exercício 5

a)
```
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
})
```

b)
```
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
```

### Exercício 6

```
import { Character } from "../src/ex1"
import { performAttack1 } from "../src/ex3"

describe("Testing function performAttack", () => {
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
            name: "",
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

        expect(defender.life).not.toEqual(1500)
        expect(validator).toHaveBeenCalled()
        expect(validator).toHaveBeenCalledTimes(2)
        expect(validator).toReturnTimes(2)
    })

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

        expect(defender.life).not.toEqual(1500)
        expect(validator).toHaveBeenCalled()
        expect(validator).not.toHaveBeenCalledTimes(4)
        expect(validator).toReturnTimes(2)
    })

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

        expect(defender.life).not.toEqual(1500)
        expect(validator).toHaveBeenCalled()
        expect(validator).not.toHaveBeenCalledTimes(4)
        expect(validator).not.toReturnTimes(3)
    })
})
```