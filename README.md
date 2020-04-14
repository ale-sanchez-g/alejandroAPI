# alejandroAPI

Live Demo: 

[API home](https://guarded-scrubland-78590.herokuapp.com/)

[API Password](https://guarded-scrubland-78590.herokuapp.com/password)

[API Spanish Password](https://guarded-scrubland-78590.herokuapp.com/palabras)

[API German Password](https://guarded-scrubland-78590.herokuapp.com/worts)

[API Flexy Password](https://guarded-scrubland-78590.herokuapp.com/api/password?number=5&language=palabras&special=true)

[API Hash Password](https://guarded-scrubland-78590.herokuapp.com/api/hash?password=mypassword)


[API Password Help](https://guarded-scrubland-78590.herokuapp.com/help)

[API Trump Giphy](https://guarded-scrubland-78590.herokuapp.com/giphy/trump)



## Introduction
Simple API to return my details

## Prerequisite


## Running app locally
```bash
docker build -f Dockerfile -t morsisdivine:alejandroapi .
docker run --rm -it -p 8080:8080  -d morsisdivine:alejandroapi
```

## Run app from dockerimage

```bash
docker run --rm -it -p 8080:8080  -d morsisdivine/alejandroapi
```

## Running tests

Local

```bash
newman run Guarded\ Scrubland\ Password\ API.postman_collection.json --env-var url='http://localhost:8080'
```

Production

```bash
newman run Guarded\ Scrubland\ Password\ API.postman_collection.json --env-var url='https://guarded-scrubland-78590.herokuapp.com'
```

Karate Run

```bash
cd alejandroapi
mvn clean test
```

Performance test

```bash
cd k6
k6 run --vus 10 --duration 30s perf.spec.js
```

## Endpoints

    - / => give the name of the API
    - /words => provides a password
    - /palabras => provides a password in Spanish
    - /worts => provides a password in German
    - /giphy/:term => search the top 10 giphy of that kind
    - /api/password?number=5&language=palabras&special=true => provides a password in spanish with special characters
    - /api/hash?password=mypassword => provides a SHA512 password created with mkpasswd
   

## Heroku load
    
    - heroku login
    - heroku container:login || docker login --username=_ --password=$(heroku auth:token) registry.heroku.com
    - heroku create
    
    - heroku container:push web --app <heroku_app_name>
      * heroku container:push web --app guarded-scrubland-78590
    or
    - docker tag <image> registry.heroku.com/<app>/<process-type>
    - docker push registry.heroku.com/<app>/<process-type>