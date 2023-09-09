import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import { useEffect, useReducer } from "react";
import TodoContext from "./context/TodoContext";
import TodoReducer from "./reducers/TodoReducer";

function App() {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  // useEffect(() => {
  //   console.log(todos);
  // });

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <div className="main_wrapper">
        <AddTodo />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}
export default App;
