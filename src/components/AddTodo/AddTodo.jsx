import { useState } from "react";
import "./AddTodo.css";
import { useDispatch } from "react-redux";
function AddTodo() {
  const dispatch = useDispatch();
  const [todotext, setTodotext] = useState("");

  function addTodo(todotext) {
    if (!todotext) {
      alert("Add todo please");
    } else {
      dispatch({ type: "add_todo", payload: { todotext } });
      setTodotext("");
    }
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
