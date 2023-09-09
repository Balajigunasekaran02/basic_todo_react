function TodoReducer(state, action) {
  if (action.type === "add_todo") {
    if (!action.payload.todotext) {
      alert("Add todo please");
    } else {
      let nextId = state.length + 1;
      return [
        ...state,
        { id: nextId, isFinished: false, text: action.payload.todotext },
      ];
    }
  } else if (action.type === "edit_todo") {
    const newTodoList = state.map((todo) => {
      if (todo.id === action.payload.id) {
        todo.text = action.payload.newTodo;
      }
      return todo;
    });
    return newTodoList;
  } else if (action.type === "delete_todo") {
    const newTodoList = state.filter((todo) => todo.id != action.payload.id);
    return newTodoList;
  } else if (action.type === "finish_todo") {
    const newTodoList = state.map((todo) => {
      if (todo.id === action.payload.id) {
        todo.isFinished = action.payload.state;
      }
      return todo;
    });
    return newTodoList;
  }
  return state;
}
export default TodoReducer;
