// import the packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Configure body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());// Parse POST requests with JSON payloads

// Store names in an array
const names = [];
const tasks = [];

// Serve the index.html page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve POST request to add names
app.post('/submit-name', (req, res) => {
    const name = req.body.name;
    if (name) {
        names.push(name);
        console.log(`Name added: ${name}`);
        res.status(200).json({ message: 'Name added successfully', name: name });
    } else {
        res.status(400).json({ error: 'Name cannot be empty' });
    }
});

app.get('/get-names', (req, res) => {
    res.json({ names });
});

app.get('/wazzup', (req, res) => {
    const name = req.query.name;
    res.sendFile(path.join(__dirname, 'wazzup.html'));
});

app.post('/submit-task', (req, res) => {
    const task = req.body.task;
    if (task) {
        tasks.push(task);
        console.log(`Task added: ${task}`);
        res.status(200).json({ message: 'Task added successfully', task: task });
    }
    else {
        res.status(400).json({ error: 'Task cannot be empty' });
    }
});


app.get('/get-tasks', (req, res) => {
    res.json({ tasks });
});

app.post('/delete-task', (req, res) => {
    const taskToDelete = req.body.task;
    const index = tasks.indexOf(taskToDelete);

    if (index !== -1) {
        tasks.splice(index, 1);
        console.log(`Task deleted: ${taskToDelete}`);
        res.status(200).send('Task deleted successfully');
    } else {
        res.status(404).send('Task not found');
    }
});

app.put('/greet/:name', (req, res) => {
    const newName = req.params.name;

    if (newName) {
        // Only add non-empty names to the array
        names.push(newName);
        console.log(`Name added: ${newName}`);
        res.status(200).json({ message: 'Name added successfully', name: newName });
    } else {
        res.status(400).json({ error: 'Name cannot be empty' });
    }
});

// Server-Sent Events (SSE) for real-time updates
app.get('/stream', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    clients.push(res);

    req.on('close', () => {
        clients.splice(clients.indexOf(res), 1);
    });
});

const clients = [];

function sendUpdate(name) {
    clients.forEach(client => {
        client.write(`data: ${name}\n\n`);
    });
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`Display the app in http://localhost:${port}`);
});
