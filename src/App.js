import Header from "./components/Header";
import TodoFilters from "./components/TodoFilters";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  return (
    <div className='wrapper'>
      <div className='components'>
        <Header />
        <TodoInput />
        <TodoList />
        <TodoFilters />
      </div>
    </div>
  );
}

export default App;
