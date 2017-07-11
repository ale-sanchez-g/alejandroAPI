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
    
    - heroko login
    - heroku container:login || docker login --username=_ --password=$(heroku auth:token) registry.heroku.com
    - heroku create
    
    - heroku container:push --app <heroku_app_name>
      * heroku container:push immense-earth-98124
    or
    - docker tag <image> registry.heroku.com/<app>/<process-type>
    - docker push registry.heroku.com/<app>/<process-type>