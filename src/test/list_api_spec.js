var frisby = require('frisby');

frisby.create('Get API list')
    .get('http://localhost:3001/listUsers')
    .expectStatus(200)
    .expectJSON({
        "user1" : {
            "name" : "mahesh",
            "password" : "password1",
            "profession" : "teacher",
            "id": 1
        },
        "user2" : {
            "name" : "suresh",
            "password" : "password2",
            "profession" : "librarian",
            "id": 2
        },
        "user3" : {
            "name" : "ramesh",
            "password" : "password3",
            "profession" : "clerk",
            "id": 3
        }
    })
    .toss();