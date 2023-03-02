import { useState, useEffect } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

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

  return (
    <div>
      <div class="flex-container" id="outer" />
      <div class="flex-container" id="outer">
        <div class="flex-container" id="inner"></div>

        <div class="flex-container" id="inner">
          <div class="flex-container" id="nav_bar">
            <br />
            <NavBar></NavBar>
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
            <Footer/>
          </div>
        </div>

        <div class="flex-container" id="inner" />
      </div>
      <div class="flex-container" id="outer" />
    </div>
  );
}

export default Home;
