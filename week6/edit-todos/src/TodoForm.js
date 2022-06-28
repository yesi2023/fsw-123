import { useState } from "react";

export default function TodoForm(props) {
  const [userInput, setUserInput] = useState("");
  const changeInput = () => {
    setUserInput(document.querySelector("#inputValue").value);
  };

  return (
    <div id="inputOpts">
      <input
        type="text"
        placeholder=""
        id="inputValue"
        onChange={() => changeInput()}
      ></input>
      <button
        className="add"
        onClick={() => {
          if (document.querySelector("#inputValue").value !== "") {
            props.addTodo(userInput);
          } else if (document.querySelector("#inputValue").value === "") {
            const moveError = () => {
              document.querySelector("#errorReported").remove();
            };
            const errorReported = document.createElement("h2");
            errorReported.textContent = "todo is empty";
            errorReported.style = "color: red";
            errorReported.setAttribute("id", "errorReported");
            document.querySelector("#inputOpts").appendChild(errorReported);
            setTimeout(moveError, 4500);
          }
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
