import React, { useState } from "react";

function NewToDoForm({addToDo}) {
  const INITIAL_STATE = "";
  const [toDo, setToDo] = useState(INITIAL_STATE);

  // handle form submission
  const handleSubmit = evt => {
    evt.preventDefault();
    addToDo(toDo);
    setToDo(INITIAL_STATE);
  }

  const handleChange = evt => {
    setToDo(evt.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Todo</label>
      <input
        id="todo"
        name="todo"
        value={toDo}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  )
}

export default NewToDoForm;