import { combineReducers } from "redux";
import {
  LOAD_STATE,
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  CLEAR_COMPLETED,
  TOGGLE_FILTER,
  TOGGLE_THEME,
} from "./actions";

const intitialState = {
  todos: [],
  activeFilter: "all",
  darkTheme: false,
};

const todoReducer = (state = intitialState, action) => {
  switch (action.type) {
    case LOAD_STATE:
      return {
        ...action.payload.data,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, todoName: action.payload.todoName }
            : item
        ),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id),
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter((item) => item.completed === false),
      };
    case TOGGLE_FILTER:
      return {
        ...state,
        activeFilter: action.payload.text,
      };
    case TOGGLE_THEME:
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: todoReducer,
});

export default rootReducer;
