import Header from "./components/Header";
import TodoFilters from "./components/TodoFilters";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./index.css";
import { connect } from "react-redux";
import { useEffect } from "react";
import { loadState } from "./store/actions";

function App({ darkTheme, loadState }) {
  useEffect(() => {
    const storedData = localStorage.getItem("storeData");
    if (storedData !== null) {
      loadState(JSON.parse(storedData).data);
    }
    document.body.style.backgroundColor = darkTheme ? "#25273c" : "#E4EBF5";
  }, [darkTheme, loadState]);

  // console.log(JSON.parse(localStorage.getItem("storeData")));

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

const mapDispatchToProps = {
  loadState,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
