# alejandroAPI

## Introduction
Simple API to return my details

## Prerequisite


## Running app locally

    - docker build -f Dockerfile -t morsisdivine:alejandroapi .
    - docker run --rm -it -p 80:3001  -d morsisdivine:alejandroapi

## Running tests


## Endpoints

    - / => give the name of the API
    - /password => provides a password
    - /palabras => provides a password in Spanish
    - /worts => provides a password in German
    - /giphy/:term => search the top 10 giphy of that kind

## Heroku load

    - heroku container:login
    - herokhu create
    - heroku container:push --app <heroku_app_name>
      * heroku container:push --app immense-earth-98124
