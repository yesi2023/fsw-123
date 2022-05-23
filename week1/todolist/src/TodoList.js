import "./App.css";

function CreateList() {
  return (
    <>
      <h1>List of Todos</h1>
      <ul>
        <li>
          <input type="checkbox" />
          goto gym
        </li>
        <li>
          <input type="checkbox" />
          do laundry
        </li>
        <li>
          <input type="checkbox" />
          food shopping
        </li>
        <li>
          <input type="checkbox" />
          do homework
        </li>
      </ul>
    </>
  );
}

export default CreateList;
