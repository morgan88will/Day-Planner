import React, {useState, useContext} from 'react'
import {TaskContext} from '../TaskContext'
import {Task} from './Task'

export const TaskList = () => {
    const [tasks, setTasks] = useContext(TaskContext)
   
    return (
        <div className="container">
            <h1>My tasks for today:</h1>
            <p>{tasks.length === 1 ? tasks.length + ' task left today' :
                tasks.length + ' tasks left today'

            } </p>
            <p style={{color: 'red'}}>{tasks.length === 0 && 'Add a task'}</p>
            <ul>
            {

                tasks.map(task => 
                    <Task name={task.name} duration={task.duration} id={task.id} />
                    )
            }
            </ul>
        </div>
    )
}
