/*
Requerimiento 1: 
Se necesita un modelo `User` para guardar la información de un usuario 
de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
*/

const User = require('./../../app/models/User')

decribe("Unit Test for User class", () => {
    test('Create an User object', () => {
        //Aqui invoamos el código que se va a usar en la app
        const user = new User(1, "Luz", "Lucero","bio", "dataCreated", "lasUpdate")

        // Aqui validas los resultao de este código
        expect(user.id).toBe(1)
        expect(user.username).toBe("Luz")
        expect(user.name).toBe("Luceor")
        expect(user.bio).toBe("bio")
        expect(user.dataCreated).toBe("dataCreated")
        expect(user.lastUpdate).toBe("lastUpdate")
    })
})