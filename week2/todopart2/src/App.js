import "./App.css";
import TodoList from "./TodoList.js";
import todos from "./STORE.js";

function App() {
  return <TodoList items={todos} />;
}

export default App;





/* ***************************************************************************************
 * In App, import the data file:
 * Reference the array of todo objects and pass as a prop to the TodoList component
 * *************************************************************************************** */
