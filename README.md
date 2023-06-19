# Express.js and MongoDB RESTful API

This project is a simple RESTful API built with Express.js and MongoDB. It allows performing CRUD operations on a collection in a MongoDB database.

## Development

To set up the project for development, follow these steps:

1. Clone the repository: `git clone https://github.com/ravindrareddy12/Furation-Tech-Solutions`
2. Install the dependencies: `npm install`
3. Set up the MongoDB database:
   - Install MongoDB if you haven't already: [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/)
   - Create a new MongoDB database or use an existing one.
   - Update the MongoDB connection URL in `db.js` file to point to your MongoDB database.
4. Start the development server: `npm run dev`
   - This command starts the server using Nodemon, which automatically restarts the server on code changes. It's useful during development.
5. The API server will be running on `http://localhost:3000`.

## API Endpoints

The API provides the following endpoints for performing CRUD operations on the items collection:

- **GET /api/items**: Retrieve all items from the database.
- **GET /api/items/:id**: Retrieve a specific item by its ID.
- **POST /api/items**: Create a new item in the database.
- **PUT /api/items/:id**: Update an existing item by its ID.
- **DELETE /api/items/:id**: Delete an item by its ID.

## Error Handling

The API handles errors and provides meaningful error messages for each endpoint. If an error occurs during the API's execution, it will respond with an appropriate error status code and a JSON response containing an error message.

## Validation

Before performing database operations, the API ensures proper validation of data. It validates the required fields and data types to maintain data integrity.

## Logging

Basic error logging is implemented using the Winston logging library. Errors and server-related logs are recorded to provide visibility into the application's runtime behavior.

## Pagination (Bonus)

The API supports pagination for retrieving items. You can use the `page` and `limit` query parameters to control the pagination. For example, `/api/items?page=2&limit=10` will retrieve the second page with a limit of 10 items per page.

## Deployment

To deploy the API to a production environment, follow these steps:

1. Set up a production-ready MongoDB database or use an existing one.
2. Update the MongoDB connection URL in `db.js` file to point to your production MongoDB database.
3. Build the application: `npm install`
  
4. Start the production server: `npm run dev`
   - This command starts the server using the compiled JavaScript files in the index.js directory.

6. Optionally, configure a process manager (e.g., PM2) to manage the API process and keep it running continuously.




## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed

