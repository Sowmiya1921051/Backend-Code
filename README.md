
# Blogging Platform API✨

This is a RESTful API for managing blog posts in a blogging platform. It allows users to create, read, update, and delete blog posts, as well as add, view, and delete comments on blog posts.

## Setup

1. **Clone the repository:**

git clone https://github.com/Sowmiya1921051/Backend-Code


2. **Install dependencies:**

cd Backend-Code

cd server 

npm install


3. **Start the server:**

The server will start running at `http://localhost:3001`.

## API Endpoints

### Authentication

- **POST /signup**: Register a new user.
- Request body:
 ```json
 {
   "email": "example@example.com",
   "password": "password123"
 }
 ```
- **POST /login**: Authenticate a user.
- Request body:
 ```json
 {
   "email": "example@example.com",
   "password": "password123"
 }
 ```

### Users

- **GET /users**: Get all users.

### Blog Posts

- **POST /posts**: Create a new blog post.
- Request body:
 ```json
 {
   "title": "Post Title",
   "body": "Post Content",
   "author": "Author Name"
 }
 ```
- **GET /posts**: Get all blog posts.
- **PUT /posts/:id**: Update a blog post by ID.
- Request body (fields to update):
 ```json
 {
   "title": "Updated Post Title",
   "body": "Updated Post Content"
 }
 ```
- **DELETE /posts/:id**: Delete a blog post by ID.

### Comments

- **POST /posts/:postId/comments**: Add a comment to a blog post.
- Request body:
 ```json
 {
   "text": "Comment Text",
   "author": "Comment Author"
 }
 ```
- **GET /posts/:postId/comments**: Get all comments for a blog post.
- **DELETE /posts/:postId/comments/:commentId**: Delete a comment by ID.

## Additional Features

- Pagination for blog posts list
- Rate limiter to prevent abuse of the API
- Unit tests for various components
- Integration tests for API endpoints

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

