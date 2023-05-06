import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className='list'>
      {[1, 2, 3, 4].map((item, idx) => {
        return <TodoItem key={idx} item={item} />;
      })}
    </div>
  );
};

export default TodoList;
