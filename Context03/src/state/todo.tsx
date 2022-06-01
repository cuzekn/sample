import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Todo } from "src/types";

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

export const TodosContext = createContext(TODOS);

export const TodosDispatchContext = createContext<
  Dispatch<SetStateAction<Todo[]>>
>(() => {
  throw new Error("No default value!");
});

export const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={setTodos}>
      {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};
