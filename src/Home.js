import { Link } from "react-router-dom";
import "./index.css";
import { useState, useEffect } from "react";
import useTheme from "./theme";

const hobbies = [
  "playing my ukulele",
  "writing poetry on my substack",
  "brewing coffee with my v60",
  "cafe hopping around the city",
  "pretending to be busy",
  "walking through cities",
  "smashing birdies on the court",
  "shredding a mountain on my snowboard",
  "playing pump it up",
  "cooking mapo tofu",
  "walking through art galleries",
  "drafting up new songs",
  "bar hopping through neighbourhoods",
  "watching super smash bros melee",
  "trying to get on top of another mountain",
  "crafting a new spotify playlist",
];

const space = ["corner", "fragment", "sliver", "pocket", "section", "node"];

function useWordCycle(words) {
  const [currentWord, setCurrentWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const handleClick = () => {
    const currentIndex = words.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % words.length;
    setCurrentWord(words[nextIndex]);
  };

  return [currentWord, handleClick];
}

function Home() {
  useEffect(() => {
    document.title = "quinn's home (≧∇≦)/";
  }, []);

  const [currentHobby, handleHobbyClick] = useWordCycle(hobbies);
  const [currentSpace, handleSpaceClick] = useWordCycle(space);

  const [theme, toggleTheme] = useTheme();

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <div>
      <div class="flex-container" id="outer" />
      <div class="flex-container" id="outer">
        <div class="flex-container" id="inner"></div>

        <div class="flex-container" id="inner">
          <div class="flex-container" id="nav_bar">
            <br />
            <nav>
              <Link to="/" class="nav_element">
                home
              </Link>{" "}
              <br />
              <Link to="/about">about</Link> <br />
              <Link to="/projects">projects</Link> <br />
              <Link to="/resume">resume</Link> <br />
              <a onClick={handleThemeChange} class="theme_toggle">
                {theme}
              </a>
            </nav>
          </div>

          <div class="flex-container" id="content">
            <h2>i'm quinn!</h2>
            <p>
              welcome to my little{" "}
              <a class="clickable" id="corner" onClick={handleSpaceClick}>
                {currentSpace}
              </a>{" "}
              of the internet!
            </p>
            <p>
              i'm a student based in Toronto &#127809; where i study software
              engineering. when i'm not coding, i'm learning about
              accessibility, reading manga, and{" "}
              <a class="clickable" id="hobbies" onClick={handleHobbyClick}>
                {currentHobby}
              </a>
              .
            </p>
            <p>reach out to me anytime at quinnha.hello@gmail.com</p>

            <hr class="dashed" />
            <p class="links">
              <a
                href="https://www.linkedin.com/in/quinn-ha/"
                target="_blank"
                class="fa fa-linkedin fa-lg"
              ></a>
              <a
                href="https://github.com/quinnha"
                target="_blank"
                class="fa fa-github fa-lg"
              >
                {" "}
              </a>
              <a
                href="https://twitter.com/qvinnh"
                target="_blank"
                class="fa fa-twitter fa-lg"
              >
                {" "}
              </a>
              <a
                href="https://www.instagram.com/qh.music/"
                target="_blank"
                class="fa fa-instagram fa-lg"
              >
                {" "}
              </a>
              <a
                href="https://sesamebagel.substack.com/"
                target="_blank"
                class="fa fa-bookmark fa-lg"
              >
                {" "}
              </a>
            </p>
            <p class="credit_p">
              inspired by{" "}
              <a
                href="https://www.tiffanywang.me/"
                target="_blank"
                class="credit"
              >
                tiffany
              </a>
            </p>
          </div>
        </div>

        <div class="flex-container" id="inner" />
      </div>
      <div class="flex-container" id="outer" />
    </div>
  );
}

export default Home;
