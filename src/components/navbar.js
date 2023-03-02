import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect } from "react";
import useTheme from "../theme";
import { CSSTransition } from "react-transition-group";

function NavBar() {
  const [theme, toggleTheme] = useTheme();

  const [tick, setTick] = useState(true);

  const handleThemeChange = () => {
    setTick(!tick);
    toggleTheme();
  };

  return (
    <div class>
      <nav>
        <NavLink to="/">home</NavLink> <br />
        <NavLink to="/about">about</NavLink> <br />
        <NavLink to="/projects">projects</NavLink> <br />
        <NavLink to="/resume">resume</NavLink> <br />
        <CSSTransition
          in={tick}
          appear={true}
          timeout={500}
          classNames="fadein"
          unmountOnExit={false}
        >
          <a onClick={handleThemeChange} class="theme_toggle">
            {theme}
          </a>
        </CSSTransition>
      </nav>
    </div>
  );
}

export default NavBar;
