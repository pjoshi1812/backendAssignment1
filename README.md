# Task Manager REST API

This is a simple **RESTful API** for managing tasks (to-do items), built using **Node.js**, **Express.js**, and **Joi** for validation.  
Data is stored **in memory**, meaning it resets every time the server restarts.


##  Tech Stack
- **Node.js**
- **Express.js**
- **Joi** (for request validation)
- **Body-Parser** (for parsing incoming requests)


##  Getting Started
- git clone https://github.com/pjoshi1812/backendAssignment1.git
- cd backendAssignment1
- npm install
- node app.js
- Server will start on http://localhost:3000.

## API Endpoints
- POST /tasks/create
- GET /tasks/getAll
- GET /tasks/getOne/:id
- PUT /tasks/update/:id
- DELETE /tasks/delete/:id
  
## Validation Rules
- All requests for creating and updating a task are validated using Joi:
  - title – string, min 3 characters, required
  - desc – string, min 3 characters, required

## Testing
You can test the API using tools like:
 - Postman

## Notes
- This API does not use a database. Tasks are stored in-memory.
- Data will reset every time the server restarts.

## Thank You !!
