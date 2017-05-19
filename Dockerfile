#Grab the latest alpine image
FROM mhart/alpine-node:6.1.0

# install curl
RUN apk add --update curl && \
    rm -rf /var/cache/apk/*

# Add our code
ADD ./app /app
WORKDIR /app

# Run the image as a non-root user
RUN adduser -D myuser
USER myuser

EXPOSE 3001

# Run the app.  CMD is required to run on Heroku
# $PORT is set by Heroku
CMD ["cd src"]
CMD ["npm", "start"]
