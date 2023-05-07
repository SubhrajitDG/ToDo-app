import React, { useState } from "react";
import { connect } from "react-redux";
import { Cross } from "../images/svg";
import { addTodo } from "../store/actions";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className='form'>
      <input
        type='text'
        className='form__input'
        placeholder='Type anything...'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={handleAdd}>
        <Cross />
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(TodoInput);
