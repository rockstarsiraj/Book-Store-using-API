📚 Book Store REST API

A simple RESTful Book Store API built using Node.js and Express.js. This project demonstrates CRUD operations, Express routing, middleware, HTTP status codes, and JSON data handling using an in-memory data store.

🚀 Features

- View all books
- Get a book by ID
- Add a new book
- Delete a book
- Input validation
- Proper HTTP status codes
- Express Router
- Middleware support
- JSON request and response handling

 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript
- REST API
- Thunder Client / Postman

 📂 Project Structure

```
Book-Store-using-API/
│── DB/
│   └── book.js
│
│── middleware/
│   └── middleware.js
│
│── routes/
│   └── book.routes.js
│
│── app.js
│── package.json
│── log.txt
│── README.md
```

📌 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /books | Get all books |
| GET | /books/:id | Get a book by ID |
| POST | /books | Create a new book |
| DELETE | /books/:id | Delete a book |

📥 Sample POST Request

```json
{
    "title": "Java Programming",
    "author": "James Gosling"
}
```

 📤 Sample Response

```json
{
    "message": "book created success",
    "id": 3
}
```

 ▶️ Run Locally

Clone the repository

```bash
git clone https://github.com/rockstarsiraj/Book-Store-using-API.git
```

Install dependencies

```bash
npm install
```
Start the server

```bash
node app.js
```

The server will run on:

```
http://localhost:8000
```
 🧪 API Testing

You can test the API using:

- Postman
- Thunder Client

 📖 Concepts Covered

- RESTful APIs
- CRUD Operations
- Express.js Routing
- Middleware
- HTTP Methods
- HTTP Status Codes
- JSON Handling
- Request Parameters
- Modular Folder Structure

👨‍💻 Author

Siraz Shaik

GitHub: https://github.com/rockstarsiraj

LinkedIn: https://linkedin.com/in/siraz-shaik-25108a28b

---
⭐ If you found this project useful, don't forget to star the repository!
