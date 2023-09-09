import { useContext, useState } from "react";
import "./AddTodo.css";
import TodoContext from "../../context/TodoContext";
function AddTodo() {
  const { dispatch } = useContext(TodoContext);
  const [todotext, setTodotext] = useState("");

  function addTodo(todotext) {
    dispatch({ type: "add_todo", payload: { todotext } });
    setTodotext("");
  }

  return (
    <div className="add_todo_wrapper">
      <div className="add_todo">
        <input
          type="text"
          placeholder="Add your next todo"
          onChange={(e) => setTodotext(e.target.value)}
          value={todotext}
        />
      </div>

      <button
        onClick={() => {
          addTodo(todotext);
        }}
      >
        Submit
      </button>
    </div>
  );
}
export default AddTodo;
