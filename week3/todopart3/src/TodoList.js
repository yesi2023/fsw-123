import Todo from "./Todo.js";

function TodoList({ todos, completeTodo, deleteTodo }) {
  const todoItems = todos.map((todo) => {
    return (
      <Todo
        todo={todo}
        key={todo.id}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    );
  });
  return (
    <>
      <h1>List of Todos</h1>
      <ul>
        <div className="divItems">{todoItems}</div>
      </ul>
    </>
  );
}

export default TodoList;
