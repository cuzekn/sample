import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { Todo } from "src/types";


const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

export const TodosContext = createContext<{
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}>({
  todos: TODOS,
  setTodos: () => {
    throw new Error("setTodos is not implemented");
  },
});

export const TodosProvider:FC<{children: ReactNode}> = ({children}) => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
}