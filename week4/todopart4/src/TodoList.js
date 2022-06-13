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
      <ul>
        <div className="divItems">{todoItems}</div>
      </ul>
    </>
  );
}

export default TodoList;
