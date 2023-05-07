import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";

const TodoList = ({ todos, activeFilter }) => {
  return (
    <div className='list'>
      {activeFilter === "active"
        ? todos
            .filter((obj) => obj.completed === false)
            .map((item, idx) => {
              return <TodoItem key={idx} item={item} />;
            })
        : activeFilter === "completed"
        ? todos
            .filter((obj) => obj.completed === true)
            .map((item, idx) => {
              return <TodoItem key={idx} item={item} />;
            })
        : todos.map((item, idx) => {
            return <TodoItem key={idx} item={item} />;
          })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.data.todos,
  activeFilter: state.data.activeFilter,
});

export default connect(mapStateToProps, null)(TodoList);
