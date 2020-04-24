import React, { useState } from 'react';
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";
import { v4 as uuid } from 'uuid';

function ToDoList() {
  const [toDoList, setToDoList] = useState([]);

  const addToDo = newToDo => {
    setToDoList(toDoList => [...toDoList, newToDo]);
  }

  const handleRemove = removeToDo => {
    setToDoList(toDoList.filter(toDo => toDo !== removeToDo));
  }

  const renderToDos = () => {
    return (
    <ul>
    {toDoList.map(toDo => (
      <ToDo
        task={toDo}
        key={uuid()}
        handleRemove={handleRemove}
      />
    ))}
    </ul>
    );
  }

  return (
    <div>
      <NewToDoForm addToDo={addToDo}/>
      {renderToDos()}
    </div>
  )
}

export default ToDoList;