### Exercício 1

a)
```
interface User{
    name: string,
    balance: number
}
```

b)
```
function performPurchase(user: User, value: number): User | undefined{
    if(user.balance >= value){
        return{
            ...user,
            balance: user.balance - value
        }
    }
    return undefined
}
```

### Exercício 2

a)
```
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
})
```

b)
```
test("Balance equal to the purchase price", () => {
        const user: User = {
            name: "Kamila",
            balance: 100
        }

        const result = performPurchase(user, 100)

        expect(result).toEqual({...user, balance: 0})
    })
```

c)
```
test("Balance less than the purchase amount", () => {
        const user: User = {
            name: "Kamila",
            balance: 50
        }

        const result = performPurchase(user, 100)

        expect(result).toEqual(undefined)
    })
})
```

### Exercício 3

b)
```
function verifyAge(casino: Casino, users: User[]): Result{

    const allowed: User[] = []
    const unallowed: User[] = []

    for(const user of users){
        if(casino.location === LOCATION.EUA){
            if(user.age >= 21){
                allowed.push(user)
            }else{
                unallowed.push(user)
            }
        }else if(casino.location === LOCATION.BRAZIL){
            if(user.age >=18){
                allowed.push(user)
            }else{
                unallowed.push(user)
            }
            break
        }
    }
    return {
        brazilians:{
            allowed: allowed.filter((user) => user.nacionality === NACIONALITY.BRAZILIAN).map((user) => user.name),
            unallowed: unallowed.filter((user) => user.nacionality === NACIONALITY.BRAZILIAN).map((user) => user.name)
        },
        americans: {
            allowed: allowed.filter((user) => user.nacionality === NACIONALITY.AMERICAN).map((user) => user.name),
            unallowed: unallowed.filter((user) => user.nacionality === NACIONALITY.AMERICAN).map((user) => user.name)
        }
    }
}

enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}
  
enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}
  
interface User {
    name: string;
    age: number;
    nacionality: NACIONALITY;
}
  
interface Casino {
    name: string;
    location: LOCATION;
}

interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}
  
interface ResultItem {
    allowed: string[];
    unallowed: string[];
}
```

c) Pensar na lógica a ser usada. Se não fosse a dica não conseguiria.

### Exercício 4

a)
```
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
})
```

b)
```
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
```

c)
```
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
```

d)
```
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
```

### Exercício 5

a)
```
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

})
```

b)
```
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
```

c)
```
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
```

d)
```
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
```

### Exercício 6

a)
```
import { PostDatabase, POST_ROLES } from "../src/ex6"

describe("Testing create post", () => {
    test("Create post", async () => {
        const post = {
            id: "123",
            photo: "sdafas.jpg",
            description: "post legal",
            createdAt: "2020-09-28",
            role: POST_ROLES.NORMAL,
            userId: "e3ec98f0-7742-4f4e-8ccc-fe76923fb279"
        }

        const postDatabase = new PostDatabase()
        await postDatabase.createPost(post.id, post.photo, post.description, post.createdAt, post.role, post.userId)

        const postFromDb = await postDatabase.getFeed(post.id)

        expect(postFromDb).not.toBe(undefined)
        expect(postFromDb).toEqual({
            id: "123",
            photo: "sdafas.jpg",
            description: "post legal",
            createdAt: "2020-09-28",
            role: POST_ROLES.NORMAL,
            userId: "e3ec98f0-7742-4f4e-8ccc-fe76923fb279"
        })
    })
```

b)
```
afterAll(async () => {
        await deletePostById("id do post");
        await destroyConnection();
      });
```

### Exercício 7

a)
```
test("Create post duplicate", async () => {
        try {
            const post = {
                id: "123",
                photo: "sdafas.jpg",
                description: "post legal",
                createdAt: "2020-09-28",
                role: POST_ROLES.NORMAL,
                userId: "e3ec98f0-7742-4f4e-8ccc-fe76923fb279"
            }
    
            const postDatabase = new PostDatabase()
            await postDatabase.createPost(post.id, post.photo, post.description, post.createdAt, post.role, post.userId)
            await postDatabase.createPost(post.id, post.photo, post.description, post.createdAt, post.role, post.userId)
            
            
        } catch (error) {
            expect(error).not.toBe(undefined)
        }
    })
```