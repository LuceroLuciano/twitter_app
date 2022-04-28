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

    get getBio(){
        return this.bio
    }

    get getDateCreated(){
        return this.dataCreated
    }

    get getLastUpdate(){
        return this.lastUpdate
    }

    set setUsername(newUsername){
        this.username = newUsername
    }

    set setBio(newBio){
        this.bio = newBio
    }
}

// Exportando la clase 
module.exports = User