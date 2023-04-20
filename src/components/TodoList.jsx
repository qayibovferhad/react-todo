import React from "react";
import TodoItem from "./TodoItem";
function TodoList({ todos, handleDelete }) {
  return (
    <ul className="max-w-md space-y-1 text-sm font-medium text-gray-500 list-inside dark:text-gray-400">
      {todos.map((todoText, index) => (
        <TodoItem
          key={index}
          index={index}
          todoText={todoText}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
export default TodoList;
