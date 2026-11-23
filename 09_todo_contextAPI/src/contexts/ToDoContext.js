import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoTitle: "Todo Mssg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  // useContext() do need a Context to pass
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
