import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";

const TodoList = ({ todos }) => {
  return (
    <div className='list'>
      {todos.map((item, idx) => {
        return <TodoItem key={idx} item={item} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.data.todos,
});

export default connect(mapStateToProps, null)(TodoList);
