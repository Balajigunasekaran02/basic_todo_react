import { useState } from "react";
import "./Todo.css";
function Todo({ text, isFinished, deleteTodo, editTodo, finishTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(text);
  return (
    <div className="todo_wrapper">
      <div className="checkbox">
        <input
          type="checkbox"
          checked={isFinished}
          onChange={() => finishTodo(!isFinished)}
        />
      </div>
      <div className="text">
        {isEditing ? (
          <input
            type="text"
            name="todo_text"
            id="todo_text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        ) : (
          <span>{todoText}</span>
        )}
      </div>
      <div className="btn_controls">
        <button
          onClick={() => {
            setIsEditing(!isEditing);
            editTodo(todoText);
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>

        <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
}
export default Todo;
