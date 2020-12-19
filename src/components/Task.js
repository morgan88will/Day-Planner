import React, {useContext} from 'react'
import {TaskContext} from '../TaskContext'

export const Task = ({id, name, duration}) => {
    const [tasks, setTasks] = useContext(TaskContext)
    const onClick = () => { 
        setTasks(tasks.filter(task => task.id !== id))
    }
        
    return (
        <div className='card bg-light'>
            <h1>{name}</h1> <span>{duration} mins</span>
            <button className="btn btn-dark btn-sm" onClick={onClick} style={{float: 'right'}} >Complete Task</button>
        </div>
    )
}
