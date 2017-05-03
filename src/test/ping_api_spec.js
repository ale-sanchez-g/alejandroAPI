var frisby = require('frisby');

frisby.create('Ping API and returns API name')
    .get('http://localhost:3001')
    .expectStatus(200)
    .expectBodyContains("ALEJANDRO-API")
    .toss();