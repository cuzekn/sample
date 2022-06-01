import type { NextPage } from "next";
import { ComponentProps, useContext } from "react";
import { TodosContext, TodosDispatchContext } from "src/state/todo";

const Add: NextPage = () => {
  const setTodos = useContext(TodosDispatchContext);
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    const text = e.currentTarget.text.value;
    setTodos((prevTodos) => {
      const newTodo = { id: prevTodos.length + 1, text, isDone: false };
      return [...prevTodos, newTodo];
    });
    console.log(text);
    e.currentTarget.reset();
  };

  return (
    <div>
      <h3>TODO追加</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" autoComplete="off" required />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Add;
