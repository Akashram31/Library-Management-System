# Library Management System

A full stack MERN application developed for managing library books and user book transactions.

The system supports:
- User registration and login
- JWT authentication
- Role based authorization
- Book searching
- Book checkout and return
- Librarian book management

---

## Tech Stack

### Frontend
- React JS
- React Router DOM
- React Hook Form
- Bootstrap

### Backend
- Node JS
- Express JS
- MongoDB
- Mongoose
- JWT
- bcryptjs

---

## Main Features

### Authentication
- User Registration
- User Login
- Password Hashing
- JWT Token Authentication

### Authorization
Normal users can:
- View books
- Search books
- Checkout books
- Return books

Librarians can:
- Add books
- Delete books
- Manage library inventory

### Book Features
- Add Books
- View All Books
- Search by Title
- Search by Author
- Search by Genre
- Checkout Books
- Return Books
- Delete Books

---

## Database Features

- MongoDB indexing on:
  - title
  - author

- Concurrency handling during checkout using:
  - findOneAndUpdate()

---

## Project Structure

```
library-management-system/

## Project Structure

```
LIBRARYSYSTEM/

backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── bookController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── models/
│   ├── User.js
│   └── Book.js
│
├── routes/
│   ├── authRoutes.js
│   └── bookRoutes.js
│
├── package.json
└── server.js


frontend/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── AddBookForm.js
│   │   ├── BookList.js
│   │   ├── LoginForm.js
│   │   ├── Navbar.js
│   │   └── RegisterForm.js
│   │
│   ├── pages/
│   │   ├── AddBook.js
│   │   ├── Books.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   └── Register.js
│   │
│   ├── App.js
│   └── index.js
│
└── package.json
```

---

## Backend Setup

```
cd backend
npm init -y
npm install express mongoose cors dotenv bcryptjs jsonwebtoken
node server.js
```

---

## Frontend Setup

```
cd frontend
npm install
npm install react-router-dom react-hook-form bootstrap
npm start
```

---

## API Routes

### Authentication
- POST /api/auth/register
- POST /api/auth/login

### Books
- POST /api/books/addbook
- GET /api/books/getbooks
- PUT /api/books/checkout/:id
- PUT /api/books/return/:id
- DELETE /api/books/delete/:id
```

---

## Concepts Used

- REST API
- JWT Authentication
- Role Based Authorization
- CRUD Operations
- MongoDB Indexing
- Protected Routes
- Password Hashing
- React Hook Form

---

## Future Improvements

- Due date tracking
- Fine calculation
- Book issue history
- Pagination
- Admin dashboard

---

## Author

Shaik Madeena