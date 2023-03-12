import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect, useRef } from "react";
import useTheme from "../theme";
import { CSSTransition } from "react-transition-group";

function NavBar() {
  const [theme, toggleTheme] = useTheme();
  const [visible, setVisible] = useState(true);

  const handleThemeChange = () => {
    toggleTheme();
    setVisible(false);
    setTimeout(() => setVisible(true), 0);
  };

  return (
    <div>
      <nav>
        <NavLink to="/">home</NavLink> <br />
        <NavLink to="/about">about</NavLink> <br />
        <NavLink to="/projects">projects</NavLink> <br />
        <NavLink to="/log">logbook</NavLink> <br />
        <NavLink to="/resume">resume</NavLink> <br />
        <CSSTransition
          in={visible}
          appear={true}
          timeout={500}
          classNames="fadeIn"
        >
          <a onClick={handleThemeChange} className="fadeIn">
            {theme}
          </a>
        </CSSTransition>
      </nav>
    </div>
  );
}

export default NavBar;
