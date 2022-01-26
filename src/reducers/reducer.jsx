const initialState = {
  todos : []
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FetchTodos":
      console.log(action.payload)
      return {
        todos: action.payload,
      };

    case "AddTodo":
      return {
        todos: [...state.todos, action.payload],
      };

    case "RemoveTodo":
      console.log(action.payload)
      return {
        todos: state.todos.filter((el) => el.id != action.payload),
      };

    case "ToggleTodo":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            let completed = !todo.completed;
            return { ...todo, completed };
          }
          return todo;
        }),
      };

    case "DeleteCompleted":
      console.log(state.todos);
      return {
        todos: state.todos.filter((el) => el.completed != true),
      };

    default:
      return state;
  }
}

export default Reducer;