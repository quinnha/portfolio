import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function About() {
  useEffect(() => {
    document.title = "quinn's life (〃 ω 〃)";
  }, []);

  return (
    <div>
      <img src="/images/me.png" alt="it's me!" width="200" height="auto" />
      <p>
        <nobr>─=≡Σ((( つ•̀ω•́)つLET’S GO!</nobr>
      </p>
      <hr class="dashed" />
      <p>
        hey hey hey! i'm someone who's a bit all over the place. i love all
        things tech, art, fashion, walkable cities, food, and so much more.
        sometimes i feel like a sponge, going around and learning as much as i
        can from the amazing people around me &#129533;.
        <br />
        <br />
        i'm a serial hobby hopper, i dabble in the arts, i stay fit, and i'm
        currently on the quest for a perfect cup of coffee. my existence in so
        many things really helped shape the learner that i am today, and the one
        i'll be tomorrow!
      </p>
      <p> </p>
      <p>
        <b>currently</b>
      </p>
      <p>
        i'm a senior at{" "}
        <a href="https://www.mcmaster.ca/" target="_blank" class="clickable">
          McMaster University
        </a>
        , working on an autonomous satellite tracker and scheduler.
        <br />
        <br />
        i'm interested in accessibility, and all creative intersections of tech
        and art &#127912;.
        <br />
        <br />
      </p>
      <p> </p>
      <p>
        <b>previously</b>
      </p>
      <p>did some internships:</p>
      <ul>
        <li>
          developed a couple of accessibility tools for google (
          <a
            href="https://workspace.google.com/intl/en_ca/"
            class="clickable"
            target="_blank"
          >
            google workspace
          </a>
          )
        </li>
        <li>
          worked on purolator's b2c shipping application as a pm (
          <a
            href="https://www.purolator.com/en/business-solutions/technology-solutions/track-manage-deliveries-receivers"
            class="clickable"
            target="_blank"
          >
            PYW
          </a>
          )
        </li>
        <li>
          wrote some nasa code for the canadian space agency (
          <a
            href="https://github.com/nasa/cFS"
            class="clickable"
            target="_blank"
          >
            cFS
          </a>
          )
        </li>
        <li>
          wrote test suites for Equitable Bank's android app (
          <a
            href="https://apps.apple.com/ca/app/eq-bank-mobile-banking/id1039432211"
            class="clickable"
            target="_blank"
          >
            EQ Bank Mobile Banking
          </a>
          )
        </li>
      </ul>
      <p></p>
      <p>and did some clubs:</p>
      <ul>
        <li>
          wrote some satellite code for{" "}
          <a
            href="https://mcmasterneudose.ca/"
            target="_blank"
            class="clickable"
          >
            McMaster NEUDOSE
          </a>
        </li>
        <li>
          led the marketing team for the biggest design competition in 2021 with
          the{" "}
          <a
            href="https://www.mcmasterdesignleague.com/"
            class="clickable"
            target="_blank"
          >
            McMaster Design League
          </a>
        </li>
        <li>
          curated the attendee experience for{" "}
          <a href="https://deltahacks.com/" target="_blank" class="clickable">
            Deltahacks
          </a>
        </li>
      </ul>
      <p>
        <b>readings</b>
      </p>
      some of my favourite reads:
      <ul>
        <li>
          {" "}
          <a
            href="https://www.nytimes.com/2023/03/05/world/canada/toronto-restaurants-immigration-multiculturalism.html"
            target="_blank"
            class="clickable"
          >
            the story of multicultural canada, told in humble strip mall
            eateries
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://emergencemagazine.org/essay/the-pleasures-of-eating/?curius=3015"
            class="clickable"
            target="_blank"
          >
            the pleasures of eating
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://meaningness.com/geeks-mops-sociopaths"
            target="_blank"
            class="clickable"
          >
            geeks, MOPs, and sociopaths in subculture evolution
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://otherinter.net/research/lore/"
            target="_blank"
            class="clickable"
          >
            the lore zone
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://paulgraham.com/greatwork.html"
            target="_blank"
            class="clickable"
          >
            how to do great work
          </a>
        </li>
      </ul>
      still don't know who i am? see what a couple of{" "}
      <NavLink to="/personality-tests" class="clickable">
        <u>personality tests</u>
      </NavLink>{" "}
      have to say about me!
    </div>
  );
}

export default About;
