#Grab the latest alpine image
FROM starefossen/ruby-node:2-6

# Add our code
ADD ./app /app
WORKDIR /app

RUN gem install unf_ext
RUN bundle install

# Run the app.
CMD ["npm", "start"]
