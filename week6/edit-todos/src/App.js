import "./App.css";
import TodoList from "./TodoList.js";
import { listOfTodos } from "./STORE.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm.js";

function App() {
  const [todos, selectTodos] = useState(listOfTodos);

  const completeTodo = (id) => {
    const tempTodos = [...todos];
    const todoID = tempTodos.find((todo) => todo.id === id);
    todoID.isCompleted = true;
    selectTodos(tempTodos);
  };

  const deleteTodo = (id) => {
    const tempTodos = [...todos];
    const targetTodos = tempTodos.filter((todo) => todo.id !== id);
    selectTodos(targetTodos);
  };

  const addTodo = (text) => {
    const newTodo = { id: uuidv4(), text: text, isCompleted: false };
    const addedTodos = [...todos, newTodo];
    selectTodos(addedTodos);
  };

  const editTodo = (object, updates) => {
    const tempTodos = [...todos];
    const adoItem = tempTodos.find((todo) => todo.id === object.id);
    adoItem.text = updates;
    selectTodos(tempTodos);
  };

  return (
    <>
      <h1>Todo App</h1>
      <h3>Add new todos via the input field:</h3>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  );
}

export default App;
