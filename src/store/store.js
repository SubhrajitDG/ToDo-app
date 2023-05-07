import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

// add a listener to the store
store.subscribe(() => {
  localStorage.setItem("storeData", JSON.stringify(store.getState()));
});

export default store;
