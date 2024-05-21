import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskCreate from "./TaskCreate";
import TaskList from "./TaskList";

const ProjectList = () => {

    const [projects, setProjects] = useState({});

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const res = await axios.get('http://localhost:4002/projects');
        setProjects(res.data);
    }
 
    const renderProjects = Object.values(projects).map(project => {
        return (
            <div className="card" style={{ width: "30%", marginBottom: "20px" }} key={project.id}>
                <div className="card-body">
                    <h3>{project.title}</h3>
                    <TaskList tasks={project.tasks} />
                    <TaskCreate projectId={project.id} />
                </div>
            </div>
        )
    })

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderProjects}
        </div>
    )
}

export default ProjectList;
