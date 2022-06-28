import { useState } from "react";
import EditTodoForm from "./EditTodoForm";

function Todo({ todo, deleteTodo, editTodo }) {
  const [checked, isChecked] = useState(todo.isCompleted);
  const [editing, isEdited] = useState(false);

  const handleChange = (text) => {
    todo.isCompleted = !checked;
    !checked
      ? (document.getElementById(text).disabled = true)
      : (document.getElementById(text).disabled = false);
    isChecked(!checked);
  };

  const handleEdit = () => {
    isEdited(!editing);
  };

  return editing ? (
    <EditTodoForm
      todo={todo}
      id={`editForm ${todo.id}`}
      cancelBtn={handleEdit}
      editTodo={editTodo}
    />
  ) : (
    <li key={todo.id} id={todo.id}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleChange(`editButton ${todo.text}`)}
      />
      <span style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.text}
      </span>
      <button
        id={`deleteBtnFor ${todo.text}`}
        onClick={() => deleteTodo(todo.id)}
      >
        X
      </button>
      <button id={`editButton ${todo.text}`} onClick={handleEdit}>
        Edit
      </button>
    </li>
  );
}

export default Todo;
