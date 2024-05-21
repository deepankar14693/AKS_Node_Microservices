import React from "react";

const TaskList = ({tasks}) => {

    const renderTasks = tasks.map(task => {
        return <li key={task.id}>{task.task}</li>
    })

    return <ul>{renderTasks}</ul>
}

export default TaskList;
