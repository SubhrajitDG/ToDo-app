import React, { useState } from "react";
import { connect } from "react-redux";
import { Cross } from "../svg";
import { addTodo } from "../store/actions";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (text !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form className='form' onSubmit={(e) => handleAdd(e)}>
      <input
        type='text'
        className='form__input'
        placeholder='Type anything...'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button type='submit'>
        <Cross />
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(TodoInput);
