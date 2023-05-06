import React from "react";
import { Moon, Sun } from "../images/svg";

const Header = () => {
  return (
    <div className='header'>
      <h1>TODO</h1>
      <button>
        <Moon />
      </button>
    </div>
  );
};

export default Header;
