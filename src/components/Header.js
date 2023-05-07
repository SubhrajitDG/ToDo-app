import React from "react";
import { connect } from "react-redux";
import { Moon, Sun } from "../svg";
import { toggleTheme } from "../store/actions";

const Header = ({ darkTheme, toggleTheme }) => {
  return (
    <div className='header'>
      <h1>TODO</h1>
      <button onClick={toggleTheme}>{darkTheme ? <Sun /> : <Moon />}</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  darkTheme: state.data.darkTheme,
});

const mapDispatchToProps = {
  toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
