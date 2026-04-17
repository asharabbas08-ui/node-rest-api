const express = require('express');
const app = express();

app.use(express.json());

// Dummy data (starting users)
let users = [
    { id: 1, name: "Ashar" },
    { id: 2, name: "Ali" }
];

// GET → sab users dikhaye
app.get('/users', (req, res) => {
    res.json(users);
});

// POST → naya user add kare
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.json(newUser);
});

// PUT → user update kare
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.send("User not found");
    }
});

// DELETE → user delete kare
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.send("User deleted");
});

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});