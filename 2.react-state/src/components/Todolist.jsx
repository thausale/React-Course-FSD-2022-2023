import React from "react";

const TodoList = (props) => {
  const { todos, eraseOne } = props;

  return (
    <>
      <ul>
        {todos.map(({ id, todo, checked }) => (
          <div key={id}>
            <li className={checked ? "checked" : ""}>
              {todo} (id:{id}) test
            </li>
            <button onClick={() => eraseOne(id)}>erase</button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
