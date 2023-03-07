import React, { useState } from "react";
import data from "./data";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState(data);
  const eraseAll = () => setTodos([]);

  const eraseOne = (idToRemove) => {
    setTodos(todos.filter(({ id }) => id !== idToRemove));
  };

  return (
    <>
      <form>
        <input type="text" name="" id="" />
      </form>
      <TodoList todos={todos} eraseOne={eraseOne}></TodoList>
      <button onClick={eraseAll}>erase all</button>
    </>
  );
};

export default App;
