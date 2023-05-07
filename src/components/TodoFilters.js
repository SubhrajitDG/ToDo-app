import React from "react";
import { connect } from "react-redux";
import { clearCompletedTodo, toggleFilter } from "../store/actions";

const TodoFilters = ({
  todosLeft,
  activeFilter,
  clearCompletedTodo,
  toggleFilter,
}) => {
  return (
    <div className='filters'>
      <p>{todosLeft} items left</p>
      <div className='segmented-control'>
        <input
          type='radio'
          name='radio2'
          value='3'
          id='tab-1'
          checked={activeFilter === "all"}
          onChange={() => toggleFilter("all")}
        />
        <label htmlFor='tab-1' className='segmented-control__1'>
          <p>All</p>
        </label>

        <input
          type='radio'
          name='radio2'
          value='4'
          id='tab-2'
          checked={activeFilter === "active"}
          onChange={() => toggleFilter("active")}
        />
        <label htmlFor='tab-2' className='segmented-control__2'>
          <p>Active</p>
        </label>

        <input
          type='radio'
          name='radio2'
          value='5'
          id='tab-3'
          checked={activeFilter === "completed"}
          onChange={() => toggleFilter("completed")}
        />
        <label htmlFor='tab-3' className='segmented-control__3'>
          <p>Completed</p>
        </label>

        <div className='segmented-control__color'></div>
      </div>
      <p onClick={clearCompletedTodo} className='clear'>
        Clear Completed
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todosLeft: state.data.todos.filter((obj) => obj.completed === false).length,
  activeFilter: state.data.activeFilter,
});

const mapDispatchToProps = {
  clearCompletedTodo,
  toggleFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilters);
