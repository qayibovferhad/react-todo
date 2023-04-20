import React from "react";
function TodoForm({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const { todoInput } = e.target.elements;
    if (!todoInput.value) {
      return;
    }
    onSubmit(todoInput.value);
    todoInput.value = "";
  }
  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="mb-5">
      <input
        className="rounded-lg font-semibold border-2 border-slate-300 mr-2 p-3"
        placeholder="Add todo..."
        aria-label="add-todo"
        name="todoInput"
      />
      <button className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-none shadow-sm">
        Add
      </button>
    </form>
  );
}
export default TodoForm;
