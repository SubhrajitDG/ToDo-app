import React from "react";

const TodoInput = () => {
  return (
    <div className='form'>
      <input
        type='text'
        className='form__input'
        placeholder='Type anything...'
      />
      <button>+</button>
    </div>
  );
};

export default TodoInput;
