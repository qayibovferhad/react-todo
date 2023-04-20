import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import MouseTracker from "./components/MouseTracker";
import { useMouseTracker } from "./hooks/useMouseTracker";

function App() {
  const [todos, setTodos] = useState([]);
  const { x, y } = useMouseTracker();
  useEffect(() => {
    document.title = `Todos ${todos.length}`;
  }, [todos]);

  function handleFormSubmit(value) {
    setTodos((prevtodos) => {
      return [...prevtodos, value];
    });
  }
  function handleDelete(index) {
    const oldTodos = todos.slice();
    oldTodos.splice(index, 1);
    setTodos(oldTodos);
  }
  return (
    <div className="w-1/2 mx-auto mt-5">
      <h1 className="text-lg font-bold text-center my-2">Todo App</h1>
      <TodoForm onSubmit={handleFormSubmit} />
      <TodoList todos={todos} handleDelete={handleDelete} />
      <h1 className="tracking-wide text-xl font-bold text-center">
        X is {x} and Y is {y}
      </h1>
    </div>
  );
}

export default App;
