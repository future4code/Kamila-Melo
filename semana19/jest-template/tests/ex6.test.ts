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

    afterAll(async () => {
        await deletePostById("id do post");
        await destroyConnection();
      });
})