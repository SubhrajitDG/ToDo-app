export const LOAD_STATE = "LOAD_STATE";
export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const TOGGLE_FILTER = "TOGGLE_FILTER";
export const TOGGLE_THEME = "TOGGLE_THEME";

export const loadState = (data) => ({
  type: LOAD_STATE,
  payload: {
    data,
  },
});
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
export const clearCompletedTodo = () => ({
  type: CLEAR_COMPLETED,
});
export const toggleFilter = (text) => ({
  type: TOGGLE_FILTER,
  payload: {
    text,
  },
});
export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});
