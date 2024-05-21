import axios from "axios";
import React, { useState } from "react";

const ProjectCreate = () => {

    const [projectTitle, setProjectTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/projects', {
            title: projectTitle
        })
        setProjectTitle('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Project Title</label>
                    <input
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary" disabled={!projectTitle.length}>Submit</button>
            </form>
        </div>
    )
}

export default ProjectCreate;
