# alejandroAPI

Live Demo: 

[API home](https://guarded-scrubland-78590.herokuapp.com/)

[API Password](https://guarded-scrubland-78590.herokuapp.com/password)
[API Spanish Password](https://guarded-scrubland-78590.herokuapp.com/palabras)
[API German Password](https://guarded-scrubland-78590.herokuapp.com/worts)
[API Password Help](https://guarded-scrubland-78590.herokuapp.com/help)

[API Trump Giphy](https://guarded-scrubland-78590.herokuapp.com/giphy/trump)



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
      * heroku container:push guarded-scrubland-78590
    or
    - docker tag <image> registry.heroku.com/<app>/<process-type>
    - docker push registry.heroku.com/<app>/<process-type>