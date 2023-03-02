import { Link } from "react-router-dom";
import "./index.css";
import { useState, useEffect } from "react";
import NavBar from "./components/navbar";
import { CSSTransition } from "react-transition-group";

function Resume() {
  useEffect(() => {
    document.title = "quinn's resume (๑•̀ㅁ•́๑)✧";
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
            <p>here's my resume（˶′◡‵˶）</p>
            <hr class="dashed" />

            <iframe
              src="https://drive.google.com/file/d/1mxEIbpHfVnL6Hh0CDMrYpXJvFoY7CAgn/preview"
              width="640"
              height="850"
              allow="autoplay"
              frameBorder="0"
            ></iframe>

            <a
              href="/Resume_Quinn_Ha.pdf"
              download="Resume_Quinn_Ha.pdf"
              class="clickable"
            >
              download
            </a>

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

export default Resume;
