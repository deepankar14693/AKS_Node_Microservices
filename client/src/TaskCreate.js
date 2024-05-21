import axios from "axios";
import React,{ useState } from "react";

const TaskCreate = ({projectId}) => {
    const [task, setTask] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://localhost:4001/projects/${projectId}/tasks`, {
            task
        })
        setTask('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>New Task</label>
                    <input value={task} onChange={e => setTask(e.target.value) } className="form-control" />
                </div>
                <button className="btn-btn-primary" disabled={!task.length}>Add Task</button>
            </form>
        </div>
    )
}

export default TaskCreate;
