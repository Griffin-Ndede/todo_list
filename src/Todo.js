import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert

function Todo() {
  const [tasks, setTasks] = useState("");
  const [list, setList] = useState([]);

  function handleInputChange(e) {
    setTasks(e.target.value);
  }

  function handleAddTask(todo) {
    const newTask = {
      id: Math.random(),
      task: todo,
    };
    setList([...list, newTask]);
    setTasks("");
  }

  function handleDeleteTodo(id) {
    // Use SweetAlert for confirmation
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this task!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
        Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
      }
    });
  }

  return (
    <>
      <section id='todo'>
        <h1>To do list</h1>
        <div id='input'>
          <input
            type='text'
            placeholder='add item ...'
            value={tasks}
            onChange={handleInputChange}
          />
          <button type='submit' onClick={() => handleAddTask(tasks)}>
            Add Item
          </button>
        </div>
        <div>
          {list.map((listitem) => (
            <div key={listitem.id} id='todolist'>
              <h2>{listitem.task}</h2>
              <p>{new Date().toLocaleString()}</p>
              <button
                onClick={() => handleDeleteTodo(listitem.id)}
                id='delete'
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Todo;
