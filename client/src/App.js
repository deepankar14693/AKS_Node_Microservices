import React from 'react';
import ProjectCreate from './ProjectCreate';
import ProjectList from './ProjectList';

const App = () => {
    return (
        <div className='container'> 
            <h1>Create Project</h1>
            <ProjectCreate />
            <hr />
            <h1>Projects</h1>
            <ProjectList />
        </div>
    )
};

export default App;
