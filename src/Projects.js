import { Link } from "react-router-dom";
import "./index.css";
import { useState, useEffect } from "react";
import NavBar from "./components/navbar";
import { CSSTransition } from "react-transition-group";

function Projects() {
  useEffect(() => {
    document.title = "quinn's projects ( ´ ▽ ` )b";
  }, []);

  return (
    <div>
      <div class="flex-container" id="outer"></div>
      <div class="flex-container" id="outer">
        <div class="flex-container" id="inner"></div>

        <div class="flex-container" id="inner">
          <div class="flex-container" id="nav_bar">
            <br />
            <NavBar></NavBar>
          </div>

          <div class="flex-container" id="content">
            <p>
              some projects, find the rest on my{" "}
              <a
                href="https://github.com/quinnha"
                class="clickable"
                target="_blank"
              >
                github
              </a>{" "}
              (๑•̀ㅁ•́๑)✧
            </p>
            <hr class="dashed" />
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

        <div class="flex-container" id="inner"></div>
      </div>
      <div class="flex-container" id="outer"></div>
    </div>
  );
}

export default Projects;
