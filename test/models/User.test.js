/*
Requerimiento 1: 
    Se necesita un modelo `User` para guardar la información de un usuario 
    de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 

Requerimiento 2: 
    Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que 
    guarden el momento en que se instancie un nuevo objeto de la clase `User`

 Requerimiento 3: 
    Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, 
    `getDateCreated`, `getLastUpdated`. Solución: Agrega los getters 
    regresando la propiedad indicada, no olvides usar `this`.


Requerimiento 4: 
    Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.
    Solución: Agrega los setters usando la palabra `set` y modificando el atributo indicado.
*/

const User = require('./../../app/models/User')

describe("Unit Test for User class", () => {
    test('Req 1 & 2: Create an User object', () => {
        //Aqui invocamos el código que se va a usar en la app
        const user = new User(1, "Luz", "Lucero","bio")
        
        // Aqui validas los resultao de este código
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