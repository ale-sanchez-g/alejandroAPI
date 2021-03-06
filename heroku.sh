rm -rf node_modules
npm install heroku -g
which heroku || wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh
docker build -t registry.heroku.com/$APP_NAME/web .
docker push registry.heroku.com/$APP_NAME/web
heroku container:release -a $APP_NAME web