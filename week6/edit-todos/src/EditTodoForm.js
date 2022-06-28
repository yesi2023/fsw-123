import { useState } from "react";

function EditTodoForm({ id, todo, editTodo, cancelBtn }) {
  const [userInput, setInput] = useState(todo.text);

  const validatingForm = (event) => {
    event.preventDefault();
    if (userInput !== "") {
      editTodo(todo, userInput);
    }

    const cancel = cancelBtn;
    cancel();
  };

  const changeState = (event) => {
    setInput(event.target.value);
  };

  return (
    <form id={id} onSubmit={validatingForm}>
      <label>Edit Todo: </label>
      <input
        id={`todoText ${id}`}
        value={userInput}
        onChange={changeState}
        required
      ></input>
      {userInput.length > 0 && userInput.charAt(0) !== " " ? (
        <button id={`updateFor${id}`}>Update</button>
      ) : (
        <button type="button" disabled>
          Update
        </button>
      )}
      <button onClick={cancelBtn}>Cancel</button>
    </form>
  );
}

export default EditTodoForm;
