# Task Manager API 🚀

A scalable backend system with authentication and role-based access, along with a basic frontend UI to interact with APIs.

---

## 🔧 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* React.js (Frontend)
* Postman (API Testing)

---

## ✨ Features

### 🔐 Authentication

* User Registration
* User Login
* Password Hashing using bcrypt
* JWT-based Authentication

### 👥 Role-Based Access

* User & Admin roles
* Protected routes using middleware

### 📝 Task Management (CRUD)

* Create Task
* Get All Tasks
* Update Task
* Delete Task

### ⚙️ Additional Features

* API Versioning (`/api/v1`)
* Input Validation
* Error Handling
* Modular Folder Structure

---

## 📁 Project Structure

```
backend/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/

frontend/
 ├── src/

Task Manager API.postman_collection.json
```

---

## 🚀 Setup Instructions

### 1️⃣ Backend Setup

```
cd backend
npm install
node server.js
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

---

### 2️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 📌 API Endpoints

### 🔐 Auth Routes

* POST `/api/v1/auth/register`
* POST `/api/v1/auth/login`

### 📝 Task Routes

* POST `/api/v1/tasks`
* GET `/api/v1/tasks`
* PUT `/api/v1/tasks/:id`
* DELETE `/api/v1/tasks/:id`

---

## 🔑 Authentication

Use Bearer Token in headers:

```
Authorization: Bearer <your_token>
```

---

## 📬 API Documentation

Postman Collection included:

```
Task Manager API.postman_collection.json
```

---

## 📈 Scalability

* Modular architecture (MVC pattern)
* Easily extendable for microservices
* Can integrate Redis caching
* Suitable for horizontal scaling using load balancers

---

## ✅ Status

✔ Backend Completed
✔ Frontend Integrated
✔ API Tested using Postman


---
