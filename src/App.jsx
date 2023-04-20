import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleFormSubmit(todoInput) {
    this.setState(
      (prevstate) => {
        return {
          todos: [...prevstate.todos, todoInput.value],
        };
      },
      () => {
        todoInput.value = "";
      }
    );
  }
  handleDelete(index) {
    this.setState((prevstate) => {
      const oldTodos = prevstate.todos.slice();
      oldTodos.splice(index, 1);
      return {
        todos: oldTodos,
      };
    });
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="w-1/2 mx-auto mt-5">
        <h1 className="text-lg font-bold text-center my-2">Todo App</h1>
        <TodoForm onSubmit={this.handleFormSubmit} />
        <TodoList todos={todos} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
export default App;
