# Consultants API -- For educational and discussion Purposes.


A RESTful API for storing consultants. This application is implemented in Node.js/Express.
A Consultant sells products. A consultant is sponsored by another consultant.


# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server
PORT=8080 npm start

# Build a docker image

```
npm run image
```

Builds a docker image with the tag "consultants-api"

# Run the docker image
```
npm run container
```

A docker container will start and the express server will listen on port 8080.

# Consultant representation
JSON is used to serialize the resource representation.

The representation of a Consultant has the following form:

```
{ 
  'id': <int>, // Integer id of the consultant; assigned by server upon creation
  'firstName': <string>, // first name of the consultant
  'lastName': <string>, // last name of the consultant
  'consultantCode': <string> // alphanumeric code of the consultant
  'sponsorId' : <int> // (optional) id of the sponsoring consultant 
}

```
# API Method summary

| METHOD | URL | ACTION | RESPONSE STATUS CODE | 
|--------|-----|--------|----------------------|
| GET    | /api/consultants | returns a JSON array of consultants | 200 or 404 |
| GET    | /api/consultants/:id | returns the consultant with id :id | 200 or 404 |
| POST   | /api/consultants/ | creates a new consultant | 201 or 422 |
| PUT    | /api/consultants/:id | updates a consultant with id :id | 200 or 422 |
| DELETE | /api/consultants/:id | deletes the consultant with id :id | 204 or 404|

# Example requests

# Create a new consultant

The new id will be returned in the response body. 
```
curl -X POST -H "Content-Type: application/json" -d '{ "consultantCode": "AQWERTY", "firstName": "Asdf", "lastName": "Qwerty" }' 'http://localhost:8080/api/consultants'
--> 200 OK {"consultantCode":"AQWERTY","firstName":"Asdf","lastName":"Qwerty","id":"44"}
```

# Delete a consultant

```
curl -X DELETE 'http://localhost:8080/api/consultants'
-->  204``` 
