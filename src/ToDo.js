import React from 'react';

// render new todo item
function ToDo({task, handleRemove}) {

  // remove selected todo
  const remove = () => handleRemove(task);

  return (
    <li>{task} <button onClick={remove}>X</button><br/>
    </li>
  );
}

export default ToDo;