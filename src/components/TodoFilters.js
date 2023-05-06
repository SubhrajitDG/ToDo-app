import React from "react";

const TodoFilters = () => {
  return (
    <div className='filters'>
      <p>2 items left</p>
      <div className='segmented-control'>
        <input type='radio' name='radio2' value='3' id='tab-1' />
        <label htmlFor='tab-1' className='segmented-control__1'>
          <p>All</p>
        </label>

        <input type='radio' name='radio2' value='4' id='tab-2' />
        <label htmlFor='tab-2' className='segmented-control__2'>
          <p>Active</p>
        </label>

        <input type='radio' name='radio2' value='5' id='tab-3' />
        <label htmlFor='tab-3' className='segmented-control__3'>
          <p>Completed</p>
        </label>

        <div className='segmented-control__color'></div>
      </div>
      <p className='clear'>Clear Completed</p>
    </div>
  );
};

export default TodoFilters;
