import React from "react";
import { Check, Cross } from "../images/svg";

const TodoItem = ({ item }) => {
  return (
    <div className='todo-item'>
      <div className='label'>
        <div className='checkbox'>
          <input id='checkbox-1' type='checkbox' />
          <label htmlFor='checkbox-1'>
            <i>&#10003;</i>
            {/* <Check /> */}
          </label>
        </div>
        <h3>{item.todoName}</h3>
        <div style={{ display: "none" }} className='editForm'>
          <input type='text' className='form__input' placeholder='Edit...' />
          <button>&#10003;</button>
        </div>
      </div>
      <button>
        <Cross />
      </button>
    </div>
  );
};

export default TodoItem;
