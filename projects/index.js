const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const projects = {};

app.get('/projects', (req, res) => {
    res.send(projects);
});

app.post('/projects', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;

    projects[id] = {
        id, title
    }

    await axios.post('http://localhost:4005/events', {
        type: 'ProjectCreated',
        data: {
            id, title
        }
    })

    res.status(201).send(projects[id]);
});

app.post('/events', (req, res) => {
    console.log('Received Event', req.body);
    res.send({});
});

app.listen(4000, () => {
    console.log('Listening on 4000');
});
