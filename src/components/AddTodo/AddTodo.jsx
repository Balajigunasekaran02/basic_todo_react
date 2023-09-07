import { useContext, useState } from "react";
import "./AddTodo.css";
import TodoContext from "../../context/TodoContext";
function AddTodo() {
  const { todos, setTodos } = useContext(TodoContext);
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
          if (!todotext) {
            alert("Add todo please");
          } else {
            let nextId = todos.length + 1;
            setTodos([
              ...todos,
              { id: nextId, isFinished: false, text: todotext },
            ]);
          }
          setTodotext("");
        }}
      >
        Submit
      </button>
    </div>
  );
}
export default AddTodo;
