FROM ruby:3.2-alpine
RUN apk add --no-cache build-base && gem install 'jekyll:~> 3.9' kramdown-parser-gfm && apk del build-base
WORKDIR /site
EXPOSE 4000
CMD ["jekyll", "serve", "--host", "0.0.0.0", "--watch", "--force_polling"]
