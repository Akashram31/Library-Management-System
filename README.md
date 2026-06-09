# 📚 Library Management System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing library books and user transactions. The system provides secure authentication, role-based authorization, and efficient book management for both users and librarians.

---

## 🚀 Features

### Authentication & Security
- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcryptjs
- Protected Routes

### Authorization
#### Users
- View available books
- Search books
- Checkout books
- Return books

#### Librarians
- Add new books
- Delete books
- Manage inventory

### Book Management
- Add Books
- View All Books
- Search by Title
- Search by Author
- Search by Genre
- Checkout Books
- Return Books
- Delete Books

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- React Hook Form
- Bootstrap

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs

---

## 🗄️ Database Features

- MongoDB Indexing
  - Title
  - Author

- Concurrency Handling
  - Atomic updates using `findOneAndUpdate()`

---

## 📂 Project Structure

```text
LIBRARYSYSTEM/

├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── bookController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── roleMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Book.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── bookRoutes.js
│   │
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddBookForm.js
│   │   │   ├── BookList.js
│   │   │   ├── LoginForm.js
│   │   │   ├── Navbar.js
│   │   │   └── RegisterForm.js
│   │   │
│   │   ├── pages/
│   │   │   ├── AddBook.js
│   │   │   ├── Books.js
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   │
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
└── README.md
```

---

## ⚙️ Backend Setup

```bash
cd backend

npm install

npm start
```

### Required Packages

```bash
npm install express mongoose cors dotenv bcryptjs jsonwebtoken
```

---

## 🎨 Frontend Setup

```bash
cd frontend

npm install

npm start
```

### Additional Packages

```bash
npm install react-router-dom react-hook-form bootstrap
```

---

## 🔗 API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|------------|------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Books

| Method | Endpoint | Description |
|----------|------------|------------|
| POST | /api/books/addbook | Add Book |
| GET | /api/books/getbooks | Get All Books |
| PUT | /api/books/checkout/:id | Checkout Book |
| PUT | /api/books/return/:id | Return Book |
| DELETE | /api/books/delete/:id | Delete Book |

---

## 🧠 Concepts Implemented

- REST API Development
- JWT Authentication
- Role-Based Authorization
- CRUD Operations
- MongoDB Indexing
- Protected Routes
- Password Hashing
- React Hook Form
- Client-Server Architecture

---

## 🔮 Future Enhancements

- Due Date Tracking
- Fine Calculation System
- Book Issue History
- Pagination
- Admin Dashboard
- Email Notifications
- Advanced Search Filters

---

## 👨‍💻 Author

**Shaik Madeena**

GitHub: https://github.com/madeena1431

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.