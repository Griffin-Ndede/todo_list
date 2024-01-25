import React, {useState} from 'react'


function Todo() {
    const [tasks, setTasks] = useState([
        {
        id: 1,
        text: 'Doctor Appointment',
        completed: true
        },
        {
        id: 2,
        text: 'Meeting at School',
        completed: false
        }
        ]);
  return (
    <>
        <div>{tasks.map((task) => (
            <div key={task.id}>
                <h1>{task.text}</h1>
                <input type='checkbox' checked={task.completed}/>
            </div>
        ))}</div>
    </>
  )
}

export default Todo