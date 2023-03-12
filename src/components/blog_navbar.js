import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import useTheme from "../theme";
import { CSSTransition } from "react-transition-group";

function BlogNavBar() {
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
        <nobr>
          <NavLink to="/">home</NavLink> | <NavLink to="/about">about</NavLink>{" "}
          | <NavLink to="/projects">projects</NavLink> |{" "}
          <NavLink to="/log">logbook</NavLink> |{" "}
          <NavLink to="/resume">resume</NavLink> |{" "}
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
        </nobr>
      </nav>
    </div>
  );
}

export default BlogNavBar;
