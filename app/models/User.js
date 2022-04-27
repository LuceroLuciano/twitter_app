class User {
    constructor(id, username, name, bio, dataCreated, lastUpdate){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dataCreated = new Date()
        this.lastUpdate = new Date()
    }
    get getUsername(){
        return this.username
    }
}

// Exportando la clase 
module.exports = User