import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import { Provider } from "react-redux";
import store from "./redux/redux";

function App() {
  // useEffect(() => {
  //   console.log(todos);
  // });

  return (
    <Provider store={store}>
      <div className="main_wrapper">
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}
export default App;
