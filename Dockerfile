FROM alpine:3.4

RUN apk add --update nodejs bash git
COPY package.json /www/package.json
RUN cd /www; npm install
COPY src/ /www/src/
WORKDIR /www
ENV PORT 8080
EXPOSE  8080

CMD ["npm", "start"]
