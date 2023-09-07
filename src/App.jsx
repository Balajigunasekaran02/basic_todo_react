import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import { useEffect, useState } from "react";
import TodoContext from "./context/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   console.log(todos);
  // });

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <div className="main_wrapper">
        <AddTodo />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}
export default App;
