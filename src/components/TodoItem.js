import React, { useState } from "react";
import { Cross } from "../images/svg";
import { connect } from "react-redux";
import { deleteTodo, completeTodo, editTodo } from "../store/actions";

const TodoItem = ({ item, deleteTodo, completeTodo, editTodo }) => {
  const [editActive, setEditActive] = useState(false);
  const [editText, setEditText] = useState(item.todoName);

  const handleEdit = () => {
    if (editText !== "") {
      editTodo(item.id, editText);
      setEditActive(false);
    }
  };

  return (
    <div className='todo-item'>
      <div className='label'>
        <div className='checkbox'>
          <input
            id={`checkbox${item.id}`}
            type='checkbox'
            checked={item.completed}
            onChange={() => completeTodo(item.id)}
          />
          <label htmlFor={`checkbox${item.id}`}>
            <i>&#10003;</i>
          </label>
        </div>
        <h3
          style={{
            textDecoration: item.completed ? "line-through" : null,
            color: item.completed ? "rgb(177, 178, 187)" : null,
          }}
          onClick={() => setEditActive(true)}
        >
          {item.todoName}
        </h3>
        <div
          style={{ display: editActive ? "flex" : "none" }}
          className='editForm'
        >
          <input
            type='text'
            className='form__input'
            placeholder='Edit...'
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleEdit}>&#10003;</button>
        </div>
      </div>
      <div className='icon__home' onClick={() => deleteTodo(item.id)}>
        <Cross />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  deleteTodo,
  completeTodo,
  editTodo,
};

export default connect(null, mapDispatchToProps)(TodoItem);
