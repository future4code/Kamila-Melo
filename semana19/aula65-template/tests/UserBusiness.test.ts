import { UserBusiness } from "../src/business/UserBusiness"
import { User, UserRole } from "../src/model/User"

const userDatabase = {createUser: jest.fn(
    async (user: User) => {}
),
getUserByEmail: jest.fn(
    (email: string) => undefined
),
getUserById: jest.fn()} as any
const idGenerator = {
    generate: jest.fn(() => "id mock")
} as any
const hashGenerator = {
    hash: jest.fn((password: string) => "cypher password" ),
    compareHash: jest.fn(async (s: string, hash: string) => false)
} as any
const tokenGenerator = {
    generate: jest.fn((payload: {id: string, role: UserRole}) => "token")
} as any

const userBusiness: UserBusiness = new UserBusiness(
    userDatabase,
    idGenerator,
    hashGenerator,
    tokenGenerator
)

describe("Testa o método de cadastro", () => {
    test("Deve retornar erro quando o nome não for passado", async () => {
        expect.assertions(2)
        try {
            await userBusiness.signup("", "astrodev@labenu.com", "bananinha", "ADMIN")
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.statusCode).toBe(422)
        }
    })

    test("Deve retornar erro quando o e-mail não for passado", async () => {
        expect.assertions(2)
        try {
            await userBusiness.signup("Astrodev", "", "bananinha", "ADMIN")
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.statusCode).toBe(422)
        }
    })

    test("Deve retornar erro quando a senha não for passada", async () => {
        expect.assertions(2)
        try {
            await userBusiness.signup("Astrodev", "astrodev@labenu.com", "", "ADMIN")
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.statusCode).toBe(422)
        }
    })

    test("Deve retornar erro quando o role não for passado", async () => {
        expect.assertions(2)
        try {
            await userBusiness.signup("Astrodev", "astrodev@labenu.com", "bananinha", "")
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.statusCode).toBe(422)
        }
    })

    test("Deve retornar erro quando o email for inválido", async () => {
        expect.assertions(2)
        try {
            await userBusiness.signup("Astrodev", "astrodevlabenu.com", "bananinha", "ADMIN")
        } catch (error) {
            expect(error.message).toBe("Invalid email")
            expect(error.statusCode).toBe(422)
        }
    })

    test("Deve retornar erro quando a senha for incorreta", async () => {
        expect.assertions(2)
        try {
            await userBusiness.signup("Astrodev", "astrodev@labenu.com", "uva", "ADMIN")
        } catch (error) {
            expect(error.message).toBe("Invalid password")
            expect(error.statusCode).toBe(422)
        }
    })

    test("Deve retornar erro quando o role for inválido", async () => {
        //NÃO É TESTE UNITÁRIO
        expect.assertions(2)
        try {
            await userBusiness.signup("Astrodev", "astrodev@labenu.com", "bananinha", "ADM")
        } catch (error) {
            expect(error.message).toBe("Invalid user role")
            expect(error.statusCode).toBe(422)
        }
    })

    test("Deve retornar um token de acesso", async () => {
        const result = await userBusiness.signup("Astrodev", "astrodev@labenu.com", "bananinha", "ADMIN")
        
        expect(result.accessToken).toBe("token")
        
    })
})

describe("Testa o método de login",() => {
    test("Deve retornar erro quando o e-mail não for passado", async () => {
        expect.assertions(2)
        try {
            await userBusiness.login("", "bananinha")
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.statusCode).toBe(422)
        }
    })

    test("Deve retornar erro quando a senha não for passada", async () => {
        expect.assertions(2)
        try {
            await userBusiness.login("astrodev@labenu.com", "")
        } catch (error) {
            expect(error.message).toBe("Missing input")
            expect(error.statusCode).toBe(422)
        }
    })

    test("Deve retornar erro quando o usuário não for encontrado", async () => {
        expect.assertions(2)
        try {
            await userBusiness.login("astrodev@labenu.com", "bananinha")
        } catch (error) {
            expect(error.message).toBe("User not found")
            expect(error.statusCode).toBe(404)
        }
    })

    test("Deve retornar erro quando a senha estiver incorreta", async () => {
        expect.assertions(2)

        userDatabase.getUserByEmail = (email: string) => {
            return new User(
                "id",
                "Astrodev",
                "astrodev@labenu.com",
                "bananinha",
                UserRole.ADMIN
            )
        }
        try {
            await userBusiness.login("astrodev@labenu.com", "bananinha")
        } catch (error) {
            expect(error.message).toBe("Invalid password")
            expect(error.statusCode).toBe(422)
        }
    })

    test("Deve retornar um token de acesso", async () => {
        hashGenerator.compareHash = jest.fn(async(s: string, hash: string) => true)
        const result = await userBusiness.login("astrodev@labenu.com", "bananinha")
       
        expect(result.accessToken).toBe("token")
    })
})

describe("Testa o método de getUserById", () => {
    test("Deve retornar um erro para o usuário inexistente", async() => {
        expect.assertions(2)
        try {
            await userBusiness.getUserById("id inexistente")
        } catch (error) {
            expect(error.message).toBe("User not found")
            expect(error.statusCode).toBe(422)
        }
    })

    test("Deve retornar resposta de sucesso", async () => {
        userDatabase.getUserById = jest.fn(async(id: string) => 
            new User(
                "id",
                "Astrodev",
                "astrodev@labenu.com",
                "cypher password",
                UserRole.ADMIN
            )
        )
        
        const user = await userBusiness.getUserById("id")

        expect(userDatabase.getUserById).toHaveBeenCalledWith("id")
        expect(user).toEqual({
            id: "id",
            name: "Astrodev",
            email: "astrodev@labenu.com",
            role: UserRole.ADMIN,
        })
    })
})

describe("Testa o método de getAllUsers", () => {
    test("Deve retornar erro se o usuário não for um administrador", async () => {
        expect.assertions(2)
        try {
            await userBusiness.getAllUsers(UserRole.NORMAL)
        } catch (error) {
            expect(error.statusCode).toBe(401);
            expect(error.message).toBe("Administrator access only");
        }
    })

    test("Deve retornar resposta de sucesso", async () => {
        userDatabase.getAllUsers = jest.fn(() => [
            new User(
                "id",
                "Astrodev",
                "astrodev@labenu.com",
                "cypher password",
                UserRole.ADMIN
            )
        ])
        
        const result = await userBusiness.getAllUsers(UserRole.ADMIN)

        expect(userDatabase.getAllUsers).toHaveBeenCalledTimes(1)
        expect(result).toContainEqual({
            id: "id",
            name: "Astrodev",
            email: "astrodev@labenu.com",
            role: UserRole.ADMIN,
        })
    })

})

describe("Testa o método de getProfile", () => {
    test("Deve retornar resposta de sucesso", async () => {
        userDatabase.getProfile = jest.fn(async(id: string) => 
            new User(
                "id",
                "Astrodev",
                "astrodev@labenu.com",
                "cypher password",
                UserRole.ADMIN
            )
        )
        
        const result = await userBusiness.getProfile("id")

        expect(result).toEqual({
            id: "id",
            name: "Astrodev",
            email: "astrodev@labenu.com",
            role: UserRole.ADMIN,
        })
    })

})