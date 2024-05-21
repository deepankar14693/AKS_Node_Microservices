const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const projects = {};

app.get('/projects', (req, res) => {
    res.send(projects);
});

app.post('/events', (req, res) => {

    const { type, data } = req.body;

    if (type === 'ProjectCreated') {
        const { id, title } = data;
        projects[id] = { id, title, tasks: [] }
    }

    if(type === 'TaskCreated' ) {
        const {id, task, projectId} = data;
        const project = projects[projectId];
        project.tasks.push({id, task});
    }

    console.log("projects>>>>>", projects);

    res.send({});

});

app.listen(4002, () => {
    console.log('Listening on 4002');
});
