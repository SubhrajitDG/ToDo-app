export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    todoName: text,
    completed: false,
  },
});
export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: {
    id,
    todoName: text,
  },
});
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});
export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: {
    id,
  },
});
