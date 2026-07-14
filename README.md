# 📚 Book Store REST API

A RESTful Book Store API developed using **Node.js**, **Express.js**, **Drizzle ORM**, and **PostgreSQL** following the **MVC (Model-View-Controller)** architecture. The API provides endpoints to manage books and authors with clean project organization, proper error handling, and PostgreSQL Full-Text Search.

---

## 🚀 Features

- CRUD Operations for Books
- CRUD Operations for Authors
- PostgreSQL Full-Text Search
- UUID Primary Keys
- Foreign Key Relationships
- MVC Architecture
- RESTful API Design
- PostgreSQL Integration using Drizzle ORM
- Request Validation
- Proper HTTP Status Codes
- Error Handling
- JSON Request & Response

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL

### ORM
- Drizzle ORM

### API Testing
- Postman
- Thunder Client

### Tools
- Git
- GitHub
- VS Code
- Docker (PostgreSQL)

---

# 📂 Project Structure

```
Task-Express
│
├── controllers
│   ├── author.controller.js
│   └── book.controller.js
│
├── DB
│   └── index.js
│
├── drizzle
│   ├── migrations
│   └── meta
│
├── middleware
│
├── models
│   ├── author.model.js
│   └── book.model.js
│
├── routes
│   ├── author.routes.js
│   └── book.routes.js
│
├── views
│
├── .env
├── docker-compose.yml
├── drizzle.config.js
├── index.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/rockstarsiraj/Book-Store-using-API.git
```

Navigate to the project

```bash
cd Book-Store-using-API
```

Install dependencies

```bash
npm install
```

Start PostgreSQL using Docker

```bash
docker compose up -d
```

Run database migrations

```bash
npx drizzle-kit migrate
```

Start the server

```bash
npm run dev
```

or

```bash
npm start
```

---

# 🔑 Environment Variables

Create a **.env** file.

```env
DATABASE_URL=postgres://username:password@localhost:5432/bookstore
PORT=5000
```

---

# 📖 API Endpoints

## Authors

### Get All Authors

```
GET /authors
```

### Get Author By ID

```
GET /authors/:id
```

### Create Author

```
POST /authors
```

Request Body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com"
}
```

---

## Books

### Get All Books

```
GET /books
```

### Get Book By ID

```
GET /books/:id
```

### Create Book

```
POST /books
```

Request Body

```json
{
  "title": "Node.js Guide",
  "description": "Learning Express.js",
  "authorId": "author_uuid"
}
```

### Delete Book

```
DELETE /books/:id
```

### Search Books

```
GET /books?search=node
```

---

# 🗄 Database Schema

## Authors Table

| Column | Type |
|---------|------|
| id | UUID |
| firstName | VARCHAR(55) |
| lastName | VARCHAR(55) |
| email | VARCHAR(55) UNIQUE |

---

## Books Table

| Column | Type |
|---------|------|
| id | UUID |
| title | VARCHAR(85) |
| description | TEXT |
| authorId | UUID (Foreign Key) |

---

# 🔍 Full-Text Search

Search books by title using PostgreSQL Full-Text Search.

Example:

```
GET /books?search=node
```

---

# 🏗 MVC Architecture

### Models

Define database tables and relationships using Drizzle ORM.

### Controllers

Contain business logic and handle incoming requests.

### Routes

Define API endpoints and map requests to controllers.

### Database

Handles PostgreSQL connection and query execution.

### Middleware

Provides reusable request-processing functionality such as validation or authentication (extendable).

---

# 📌 Project Highlights

- MVC Folder Structure
- PostgreSQL Database
- Drizzle ORM
- UUID Primary Keys
- Foreign Key Relationships
- PostgreSQL Full-Text Search
- RESTful APIs
- Docker Support
- Clean Code Organization
- Error Handling
- API Testing with Postman & Thunder Client

---

# 📸 Sample API Response

```json
{
  "id": "2803e14c-d34f-4507-8334-affaa89bc34d",
  "title": "Learn Node.js",
  "description": "Node.js runtime environment",
  "authorId": "1fb1be7e-9fa8-4d5a-a96f-c0698125a1cc"
}
```

---

# 🔮 Future Improvements

- Update Book API
- Update Author API
- Pagination
- Sorting & Filtering
- Authentication (JWT)
- Authorization
- Role-Based Access Control
- Swagger API Documentation
- Unit Testing
- Deployment on Render/Railway

---

# 👨‍💻 Author

Siraz Shaik

- 📧 sksiraz29@gmail.com
- 💼 LinkedIn: https://www.linkedin.com/in/siraz-shaik
- 💻 GitHub: https://github.com/rockstarsiraj

---

## ⭐ If you found this project helpful, consider giving it a star on GitHub!
