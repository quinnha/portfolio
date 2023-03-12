import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Projects() {
  useEffect(() => {
    document.title = "quinn's projects ( ´ ▽ ` )b";
  }, []);

  return (
    <div>
      <p>
        some projects, find the rest on my{" "}
        <a href="https://github.com/quinnha" class="clickable" target="_blank">
          github
        </a>{" "}
        <nobr>(๑•̀ㅁ•́๑)✧</nobr>
      </p>
      <hr class="dashed" />
      <p>
        <NavLink to="/quinn-ai" class="clickable">
          <u>
            <b>quinn ai</b>
          </u>
        </NavLink>{" "}
        <br />
        talk to an ai version of me (try it out)!
      </p>
      <p>
        <NavLink to="/" class="clickable">
          <u>
            <b>personal website</b>
          </u>
        </NavLink>{" "}
        <br />
        what you're looking at right now :)
      </p>
      <p>
        <a
          href="https://ridehome.netlify.app/"
          class="clickable"
          target="_blank"
        >
          <b>ridehome</b>
        </a>{" "}
        <br />
        ride the subway, from home
      </p>
      <p>
        <a
          href="https://github.com/quinnha/protein-monster-visualizer"
          class="clickable"
          target="_blank"
        >
          <b>pmv</b>
        </a>{" "}
        <br />a subdirectory visualizer for a weird website
      </p>
      <p>
        <a
          href="https://github.com/quinnha/RBS-interpreter"
          class="clickable"
          target="_blank"
        >
          <b>red belly snake interpreter</b>
        </a>{" "}
        <br />
        handmade python to assembly interpreter
      </p>
      <p>
        <a
          href="https://github.com/quinnha/Unlucky-Bot"
          class="clickable"
          target="_blank"
        >
          <b>steel unlucky bot</b>
        </a>{" "}
        <br />
        discord bot based off pro valorant player josh "steel" nissan
      </p>
      <p>
        <a
          href="https://github.com/quinnha/public-transit-network"
          class="clickable"
          target="_blank"
        >
          <b>public transit network calculator</b>
        </a>{" "}
        <br />
        shortest path calculator between stops on public transit networks
      </p>
      <p>
        <a
          href="https://github.com/quinnha/Pic-A-Friend"
          class="clickable"
          target="_blank"
        >
          <b>pic a friend</b>
        </a>{" "}
        <br />
        insert your missing friends into pictures with AR
      </p>

      <p>
        <i>(this page is a work in progress, pictures coming soon!)</i>
      </p>
    </div>
  );
}

export default Projects;
