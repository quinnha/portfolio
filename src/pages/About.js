import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "quinn's life (〃 ω 〃)";
  }, []);

  return (
    <div>
      <img src="/me.jpg" alt="it's me!" width="200" height="auto" />
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
        i'm a 3rd year student at{" "}
        <a href="https://www.mcmaster.ca/" target="_blank" class="clickable">
          McMaster University
        </a>
        , leading undergrad computing and engineering labs.
        <br />
        <br />
        i'm interested in accessibility, security, and all creative
        intersections of tech and art &#127912;.
        <br />
        <br />
        this summer i'll be working at{" "}
        <a href="https://about.google/" target="_blank" class="clickable">
          Google
        </a>{" "}
        to make docs, sheets, and slides more accessible 🦯!
        <br />
        <br />
        if you're in nyc, let's grab a coffee together :)
        {/* <br /> */}
        {/* no plans this summer yet, still looking for an internship that
        will help me grow and have an impact on something i care about! */}
      </p>

      <p> </p>

      <p>
        <b>previously</b>
      </p>
      <p>did some internships:</p>
      <ul>
        <li>
          wrote some NASA code for the Canadian Space Agency (
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
    </div>
  );
}

export default About;
