const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const tasksByProjectId = {};

app.get('/projects/:id/tasks', (req, res) => {
    res.send(tasksByProjectId[req.params.id] || []);
});

app.post('/projects/:id/tasks', async (req, res) => {
    const taskId = randomBytes(4).toString('hex');
    const { task } = req.body;
    const tasks = tasksByProjectId[req.params.id] || [];
    tasks.push({ id: taskId, task });
    tasksByProjectId[req.params.id] = tasks;

    await axios.post('http://localhost:4005/events', {
        type: 'TaskCreated',
        data: {
            id: taskId, task, projectId: req.params.id
        }
    })

    res.status(201).send(tasks);
});

app.post('/events', (req, res) => {
    console.log('Received Event', req.body);
    res.send({});
});

app.listen(4001, () => {
    console.log('Listening on 4001');
})
