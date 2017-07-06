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
    - /listUsers => list of users test

## Heroku load

    - heroku container:login
    - heroku create
    - heroku container:push --app <heroku_app_name>