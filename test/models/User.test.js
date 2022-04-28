const User = require('./../../app/models/User')

describe("Unit Test for User class", () => {
    test('Req 1 & 2: Create an User object', () => {
        const user = new User(1, "Luz", "Lucero","bio")        
    
        expect(user.id).toBe(1)
        expect(user.username).toBe("Luz")
        expect(user.name).toBe("Lucero")
        expect(user.bio).toBe("bio")
        expect(user.dataCreated).not.toBeUndefined()
        expect(user.lastUpdate).not.toBeUndefined()
    });   

    test("Req 3: Add a getters", () => {
        const user = new User(1, "Luz", "Lucero","bio")
        expect(user.getUsername).toBe("Luz")
        expect(user.getBio).toBe("bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdate).not.toBeUndefined()
    });

    test("Req 4: Add setters", () => {
        const user = new User(1, "Luz", "Lucero", "bio")
        
        user.setUsername = "Lucerito"
        expect(user.username).toBe("Lucerito")

        user.setBio = "Biography"        
        expect(user.bio).toBe("Biography")
    });
})