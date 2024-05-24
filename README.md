# Pet-Expo back-end application

This project is a simple CRUD REST API application for managing pets by type (Cats, Dogs, Birds). It is build in Node.js, Express and MongoDB. The application also includes authentication features such as signup and login.

` Project API Endpoints Requirements `

Create a new pet
Get all pets
Update a pet
Delete a pet
Search pets by name for each type

` Technologies `

Frontend: HTML, CSS, JavaScript (Bonus: ReactJS).(Included in my back-end app is only Javascript)
Backend: Node.js, Express, M- Dotenv to save our environment variables
ongoDB

` API Endpoints `

`Auth Routes
 -POST /auth/signup: Sign up a new user
 -POST /auth/login: Log in an excisting user

`Pet Routes
 - POST/pets: Create a new pet
 - GET/pets: Get all pets
 - PUT/pets/:id: Update a pet by ID
 - DELETE/pets/:id: Delete a pet by ID
 - GET/pets/search?name=sdfghjk: Search pets by name

`Cat Routes
 - POST/cats: Create a new cat
 - GET/cats/?name=sdfghjk: Get all cats 
 - PUT/cats/:id: Update a cat by ID
 - DELETE/cats/:id: Delete a cat by ID

 `For dog and bird routes will be exactly the same routes as upside for cats, but now in routs we eill replace cats keyword with dogs, in dogs routes, and will replace cats keyword with birds, in birds routes. 

` Packages used `

- Express and Node.js to run in the server
- Nodemon to save the changes and make auto-run the app everytime save changes we have done in our app.
- Mongoose to connect with MongoDB
- Jsonwebtoken to create and verify tokens
- Bcrypt to encrypt our passwords
- Body-parser to parse the request body
- Express-Validator for validation in query params

` Project Structe `

- `app.js`: the main entry point of application, is the file which handle all the logic behind apllication, is run top to bottom, and is the file we use to run the application(npm run start --> app.js).
- `routes`: Contains route definitions for different entities (auth, pets, cats, dogs, birds).
- `controllers`: Contains controller ogic to handle requests
- `services`: Contains the logic in server and also here we interact with database, in our case with MongoDB.
- `models`: Defines data schema for user and pets, in our app are Monfoose models.
- `middleware`: Contains authentication middleware, I have used jwt token in it, which I use to protect routes.If you are not logged in, you can't do any action in our app.
- Also have included an error handling middleware in entrypoint.

` npm run start ` --> is the command which runs the app, where the start file is app.js.Server is listening on ort 3000.  

## How to setup

- Prerequisites: Docker, nodejs. Make sure you have them installed in your machine.

- Build the Docker containers --> docker-compose build
- Start the Docker containers --> docker-compose up
`

- If you want to run the backend without docker, comment the 'backend' config in docker-compose.yaml and run
`
nvm install
nvm use
npm install
npm run start
`

`If you want to test the routes in Postman, Postman requests are available in collection.json file under the postman folder `


