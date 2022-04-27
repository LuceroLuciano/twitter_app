class User {
    constructor(id, username, name, bio, dataCreated, lastUpdate){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dataCreated = dataCreated
        this.lastUpdate = lastUpdate
    }
}

// Exportando la clase 
module.exports = User