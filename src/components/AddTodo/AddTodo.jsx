import { useState } from "react";
import "./AddTodo.css";
function AddTodo({ addTodos }) {
  const [todotext, setTodotext] = useState("");

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
          addTodos(todotext);
          setTodotext("");
        }}
      >
        Submit
      </button>
    </div>
  );
}
export default AddTodo;
