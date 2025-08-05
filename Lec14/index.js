const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// Get all users
app.get('/users', (req, res) => {
    let allUsers = [];
    try {
        const data = fs.readFileSync('users.json', 'utf8');
        if (data) {
            allUsers = JSON.parse(data);
        }
    } catch (err) {
        console.error("Error reading users.json:", err);
    }
    res.json(allUsers);
});

// Add a new user
app.post('/adduser', (req, res) => {
    const { name, username } = req.body;

    if (!name || !username) {
        return res.status(400).json({ error: 'Name and username are required' });
    }

    const newUser = {
        id: Math.floor(Math.random() * 1000000),
        name,
        username,
        role: "user"
    };

    let allUsers = [];
    try {
        const data = fs.readFileSync('users.json', 'utf8');
        if (data) {
            allUsers = JSON.parse(data);
        }
    } catch (err) {
        console.error("Error reading users.json:", err);
    }

    allUsers.push(newUser);

    try {
        fs.writeFileSync('users.json', JSON.stringify(allUsers, null, 2), 'utf8');
        res.status(201).json({ message: 'User added successfully', user: newUser });
    } catch (err) {
        res.status(500).json({ error: 'Failed to write user data' });
    }
});

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});