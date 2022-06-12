import "./App.css";
import TodoList from "./TodoList.js";
import { listOfTodos } from "./STORE.js";
import { useState } from "react";

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

  return (
    <TodoList
      todos={todos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
