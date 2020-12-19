import React, {useState, createContext} from 'react';

export const TaskContext = createContext(); 

export const TaskProvider = (props) => {
    const [tasks,setTask] = useState([

    ])
    return (
        <TaskContext.Provider 
        value={[tasks, setTask]}
        >
            {props.children} {/* renders all child components */}
        </TaskContext.Provider>
        );
}