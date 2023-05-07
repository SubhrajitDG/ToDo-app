import Header from "./components/Header";
import TodoFilters from "./components/TodoFilters";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css";
import { connect } from "react-redux";
import { useEffect } from "react";

function App({ darkTheme }) {
  useEffect(() => {
    document.body.style.backgroundColor = darkTheme ? "#25273c" : "#E4EBF5";
  }, [darkTheme]);
  return (
    <div
      style={{
        background: darkTheme
          ? "url(./images/bg-desktop-dark.jpg) center/cover no-repeat"
          : "url(./images/bg-desktop-light.jpg) center/cover no-repeat",
      }}
      className={darkTheme ? "wrapper dark" : "wrapper"}
    >
      <div className='components'>
        <Header />
        <TodoInput />
        <TodoList />
        <TodoFilters />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  darkTheme: state.data.darkTheme,
});

export default connect(mapStateToProps, null)(App);
