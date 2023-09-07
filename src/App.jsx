import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "hello",
      isFinished: true,
    },
    {
      id: 2,
      text: "hello 2",
      isFinished: false,
    },
  ]);

  function addTodos(todotext) {
    if (!todotext) {
      alert("Add todo please");
    } else {
      let nextId = todos.length + 1;
      setTodos([...todos, { id: nextId, isFinished: false, text: todotext }]);
    }
  }

  useEffect(() => {
    console.log(todos);
  });
  return (
    <div className="main_wrapper">
      <AddTodo addTodos={addTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
export default App;
