import Todo from "../Todo/Todo";
import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function onDeleteTodo(id) {
    dispatch({ type: "delete_todo", payload: { id } });
  }

  function onEditTodo(id, newTodo) {
    dispatch({ type: "edit_todo", payload: { id, newTodo } });
  }

  function onFinishTodo(id, state) {
    dispatch({ type: "finish_todo", payload: { id, state } });
  }
  return (
    <div className="todo_list">
      {todos &&
        todos.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            text={todo.text}
            isFinished={todo.isFinished}
            deleteTodo={() => onDeleteTodo(todo.id)}
            editTodo={(newTodo) => onEditTodo(todo.id, newTodo)}
            finishTodo={(state) => onFinishTodo(todo.id, state)}
          />
        ))}
    </div>
  );
}
export default TodoList;
