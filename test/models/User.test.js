/*
Requerimiento 1: 
    Se necesita un modelo `User` para guardar la información de un usuario 
    de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 

Requerimiento 2: 
    Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que 
    guarden el momento en que se instancie un nuevo objeto de la clase `User`
*/

const User = require('./../../app/models/User')

describe("Unit Test for User class", () => {
    test('Create an User object', () => {
        //Aqui invocamos el código que se va a usar en la app
        const user = new User(1, "Luz", "Lucero","bio")

        // Aqui validas los resultao de este código
        expect(user.id).toBe(1)
        expect(user.username).toBe("Luz")
        expect(user.name).toBe("Lucero")
        expect(user.bio).toBe("bio")
        expect(user.dataCreated).not.toBeUndefined()
        expect(user.lastUpdate).not.toBeUndefined()
    })   
})