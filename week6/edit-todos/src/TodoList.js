import Todo from "./Todo.js";

function TodoList({ todos, completeTodo, deleteTodo, editTodo }) {
  const todoItems = todos.map((todo) => {
    return (
      <Todo
        todo={todo}
        key={todo.id}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
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
