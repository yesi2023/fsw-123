import "./App.css";

function TodoList({ items }) {
  return (
    <>
      <h1>List of Todos</h1>
      <ul>
        {items.map((item, index) => (
          <div className="items">
            <input type="checkbox" />
            <li key={index}>{item.text}</li>
          </div>
        ))}
      </ul>
    </>
  );
}

export default TodoList;

/* ******************************************************************************
 * In TodoList, use the todos props passed from App and render the list of todos
 * Use the .map() method to iterate through each object (todo).
 * Set the key attribute to the index argument of map.
 * The rendered output will look the same as the Week 1 Todo App assignment.
 * Use the React Developer Tools to troubleshoot as your build your application:
 * Develop and test your React application with the npm start script.
 * ******************************************************************************** */
