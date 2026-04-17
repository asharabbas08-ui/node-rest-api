# 🚀 Node REST API Project

## 📌 Description

This is a simple REST API built using Node.js and Express.
It performs basic CRUD operations (Create, Read, Update, Delete) for users.

---

## 🛠️ Technologies Used

* Node.js
* Express.js

---

## ⚙️ Installation & Setup

1. Clone the repository:

```
git clone https://github.com/asharabbas08-ui/node-rest-api.git
```

2. Navigate to project folder:

```
cd node-rest-api
```

3. Install dependencies:

```
npm install
```

4. Run the server:

```
node server.js
```

---

## 🌐 Server Runs On

```
http://localhost:3000
```

---

## 📡 API Endpoints

### 🔹 GET all users

```
GET /users
```

---

### 🔹 POST new user

```
POST /users
```

Body:

```
{
  "name": "Your Name"
}
```

---

### 🔹 PUT update user

```
PUT /users/:id
```

Body:

```
{
  "name": "Updated Name"
}
```

---

### 🔹 DELETE user

```
DELETE /users/:id
```

---

## 📬 Testing Tool

* Postman

---

## 👨‍💻 Author

Ashar
