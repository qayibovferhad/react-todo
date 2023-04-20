import React from "react";
function TodoItem({ todoText, index, handleDelete }) {
  return (
    <li
      key={index}
      className="py-3 px-4 flex justify-between  border-b rounded-t-lg border-gray-200 dark:border-gray-600"
    >
      <span>{todoText}</span>
      <button onClick={() => handleDelete(index)} className="color-red">
        X
      </button>
    </li>
  );
}
export default TodoItem;
