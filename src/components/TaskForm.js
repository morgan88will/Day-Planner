import React, {useEffect, useState, useContext} from 'react';
import {TaskContext} from '../TaskContext'

export const TaskForm = () => {
    const [tasks, setTasks] = useContext(TaskContext)
    const [num, setNum] = useState(Math.floor(Math.random()*10000))
    const [task, setTask] = useState('')
    const [duration, setDuration] = useState(0)
    


    const handleTaskChange = (e) => {
        setTask(e.target.value)
    }
    const handleDurationChange = (e) => {
        setDuration(e.target.value)
    }

    const onSubmit = (e) => {

        e.preventDefault();
        const id = Math.floor(Math.random()*10000000)
        const data = {id: id, name: task, duration: duration}
        
        setTasks([data, ...tasks])
       
    }
    return (
            <form onSubmit={onSubmit} className="container">
                <h1>Add Task</h1>
                <input name="task" type="text" placeholder="Name of task" value={task} onChange={handleTaskChange}/>
                <input name="duration" type="number" placeholder="Estimated duration of task (mins)" value={duration} onChange={handleDurationChange}/>
                <button type="submit" className="btn btn-dark btn-block">Add Task</button>
            </form>
        
    )
}
