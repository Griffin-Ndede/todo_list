import React, {useState} from 'react'


function Todo() {
    const [tasks, setTasks] = useState("")
    const [list, setList] = useState([])

    function handleInputChange(e){
       setTasks(e.target.value)
    }
    function handleAddTask(todo){
        const newTask ={
            id: Math.random(),
            task : todo
        }
        setList([...list, newTask])
        setTasks("")
    }
    console.log(list)
  return (
    <>
        <section>
            <h1>To do list</h1>
            <input type='text' placeholder='add item ...'value={tasks} onChange={handleInputChange}/> 
            <button type='submit' onClick={() => handleAddTask(tasks)}>Add Item</button>
            <div>
                {list.map((listitem) =>(
                    <p>{listitem.task}</p>
                ))}
            </div>
        </section>
    </>
  )
}

export default Todo