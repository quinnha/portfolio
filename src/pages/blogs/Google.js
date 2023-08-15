import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BlogNavBar from "../../components/blog_navbar";
import ImageHoverCard from "../../components/image_hover_card";
import { Helmet } from "react-helmet";

function Google() {
  useEffect(() => {
    document.title = "a summer with google •⩊•";
  }, []);

  return (
    <div>
      <Helmet>
        <meta name="description" content="a summer with google" />
      </Helmet>
      <div class="flex-container" id="blog_header_card">
        <h1 id="blog_header">a summer with google</h1>
        <BlogNavBar></BlogNavBar>
      </div>
      <p>reflecting on my summer internship at google!</p>
      <hr class="dashed" />
      <p>
        howdy &#x1f920;. if you don’t know yet, i’m{" "}
        <ImageHoverCard text="quinn" imageSrc={"/images/google/me.png"} />, and
        i just finished an internship with{" "}
        <ImageHoverCard text="google" imageSrc={"/images/google/google.png"} />,
        in their nyc office! i wanted to take some time to reflect on the
        experience as a whole! if you want to read about my time in nyc, you can
        find it{" "}
        <NavLink to="/blogs/nyc" class="clickable">
          <u>here</u>
        </NavLink>
        .
        <br />
        <br />
        tldr: super awesome summer, i learned a lot, and will be taking these
        lessons to wherever i end up next!
      </p>
      <h3>the internship</h3>
      <h4>what i actually worked on</h4>
      <p>
        i worked on google workspace, specifically on accessibility tools for
        google{" "}
        <ImageHoverCard text="docs" imageSrc={"/images/google/docs.png"} />/
        <ImageHoverCard text="sheets" imageSrc={"/images/google/sheets.png"} />/
        <ImageHoverCard text="slides" imageSrc={"/images/google/slides.png"} />.
        while i can’t get into detail over what specifically i worked on, i
        wanted to point out that the way google treats{" "}
        <a
          href="https://www.google.com/accessibility/initiatives-research/"
          target="_blank"
          class="clickable"
        >
          accessibility
        </a>{" "}
        is awesome, specifically as someone who lives with a disability.
        <br />
        <br />
        in my day-to-day, i used a lot of javascript and java, and worked
        primarily as a front-end developer. i didn’t really know what to call
        myself since i wasn’t moving any buttons nor dealing with servers, but i
        was working primarily with the DOM - a component of front-end
        development. i could also call myself a mid-stack developer,{" "}
        <ImageHoverCard
          text="but that sounds bad xd"
          imageSrc={"/images/google/mid.png"}
        />
      </p>
      <h4>day in the life</h4>
      here’s a average day as a google intern:
      <br /> 7:30 - wake up. another day another dolla
      <br /> 8:00 - get into work (short commute), start up some servers
      <br /> 8:30 - breakfast, usually a bunch of{" "}
      <ImageHoverCard text="eggs" imageSrc={"/images/google/bfast.png"} />
      <br /> 9:00 - get some work done, usually a couple of meetings/1:1s, a
      ping pong rally, and a lot of tapping my manager on the shoulder for{" "}
      <ImageHoverCard
        text="debugging"
        imageSrc={"/images/google/debugging.png"}
      />
      <br /> 12:00 -{" "}
      <ImageHoverCard
        text="lunch time baybee"
        imageSrc={"/images/google/food.png"}
      />
      , love the food options in the office! mondays are bbq days, and i’ll make
      the trek to another cafe if they have handrolls.
      <br /> 1:00 - more work, documentation, meetings,{" "}
      <ImageHoverCard
        text="snacking in the microkitches"
        imageSrc={"/images/google/snacks.png"}
      />
      <br /> 2:30 -{" "}
      <ImageHoverCard text="power nap" imageSrc={"/images/google/nap.png"} />
      <br /> 3:00 - wrap up on tasks, set tasks for tomorrow, maybe a little{" "}
      <ImageHoverCard
        text="music room"
        imageSrc={"/images/google/music.png"}
      />{" "}
      session, and close any existing conversations
      <br /> 5:00 - leave
      <br /> <br />
      relatively standard days, but with lots of variations! in the beginning,
      it was almost all meetings (and taking advantage of{" "}
      <ImageHoverCard text="amenities" imageSrc={"/images/google/piu.png"} />
      ), but as the weeks went on, i did more dev work and less of everything
      else. i guess everything loses its sparkle eventually.
      <h4>things i liked about google</h4>
      <p>
        <b>culture</b>. maybe it was just the nyc office, but everyone that i
        was surrounded with was highly motivated, excited to talk with, and
        incredibly smart. when it came to my{" "}
        <ImageHoverCard text="team" imageSrc={"/images/google/team.png"} />, my
        host, co-host, and skip were like wizards to me, and they always
        challenged me to become a better swe. there’s a culture of
        self-improvement and{" "}
        <ImageHoverCard
          text="community"
          imageSrc={"/images/google/community.png"}
        />{" "}
        that’s hard to find (according to other interns)
        <br />
        <br />
        <b>product</b>. i use google docs/sheets/slides a lot, so i love being
        able to work on something i{" "}
        <ImageHoverCard text="use" imageSrc={"/images/google/use.png"} />
        ! there’s so many cool products externally and internally, and it’s so
        cool to see how everything works. this is a good segue to the next
        point:
        <br />
        <br />
        <b>internal tools</b>. it was incredibly easy to ramp up with the tools
        at google. its like they actually care about the developer experience,
        and invest time and money to make sure it’s seamless. there’s so much{" "}
        <ImageHoverCard
          text="automation"
          imageSrc={"/images/google/automation.png"}
        />{" "}
        of small, tedious tasks, and so much support to make code fly a lot
        faster. special shoutout to the tool that allows me to revert my
        workspace when i (inevitably) need to nuke it &lt;3
        <br />
        <br />
        <b>amenities</b>. on the topic of the developer experience, the
        amenities are fantastic for remaining productive. a boatload of
        sparkling water, free food, massages, a massive games room, and so much{" "}
        <ImageHoverCard text="more" imageSrc={"/images/google/more.png"} /> -
        makes it so easy to really focus on development, and nothing else. plus,
        the buildings were very fun to{" "}
        <ImageHoverCard
          text="explore"
          imageSrc={"/images/google/explore.png"}
        />
        , and even after 3 months there, i still havent explored everything!
      </p>
      <h4>things i didn't like about google</h4>
      <p>
        <b>development</b>. listen, i know i just said that its super easy to
        develop at google, but there’s also a lot of friction (technically in a
        good way). because the codebase is gigantic, there’s so many
        tests/checks for anything you can think of, that makes development slow,
        especially when starting out. i remember i couldnt define a string
        because of a rule, and spent 3 days figuring out how to fix it :( yes,
        these tests/checks are good for code quality and health, but theyre a
        big pain in the butt.
        <br />
        <br />
        thats pretty much it, i really tried thinking about things i didn’t like
        about working at google this summer, but i honestly had such a good
        experience that me complaining about development being slow is less on
        google and more on me.
      </p>
      <h4>challenges</h4>
      <p>
        <b>workflow</b>. this was the biggest thing for me, coming from only
        have worked remote internships. and not only figuring out how to use
        internal tools/testing/developer workflow, but also managing my physical
        self. i remember in the first couple weeks demolishing free lunch only
        to be hit by a food coma, overdosing on caffeine just because it was
        there, and staying out late at night, only to be a zombie in the
        morning. managing a healthy physical state to be able to do good work
        was something i had to adjust to, and definitely took a long time!
        <br />
        <br />
        <b>working in a big ecosystem</b>. god dam, when there is a lot of{" "}
        <ImageHoverCard text="code" imageSrc={"/images/google/code.png"} />,
        there’s a lot to learn - and frankly, i still haven’t learned everything
        there is to know. there’s so many things about each system, and just
        when you think you’ve figured it out, you get hit with a bug that you
        have no idea how to fix. there’s also a lot of stakeholders involved in
        the code, and being able to communicate your code was a skill i
        definitely acquired.
      </p>
      <h4>challenges</h4>
      <p>
        so what did i get out of this experience?
        <br />
        <br />
        <b>communicating code</b>. like i mentioned before, being able to
        verbalize your issues is very important (also just in general). whenever
        i bug my manager, i always set the scene - what i think is the problem,
        what i’ve tried, and always have a pr/code readily available for them to
        see. i’m still learning how to avoid the{" "}
        <a href="https://xyproblem.info/" target="_blank" class="clickable">
          XY problem
        </a>
        , but communicating issues properly really helped ramp up my velocity
        later on in the internship.
        <br />
        <br />
        <b>working in a big ecosystem</b>. there’s so many people who have eyes
        on your code at google. in my last 2 weeks, i was fighting the
        performance team trying to explain changes in code! there’s so many
        people invested in the code you push out, that some even{" "}
        <ImageHoverCard
          text="message you"
          imageSrc={"/images/google/message.png"}
        />{" "}
        later on to ask questions (especially when you break staging like i did
        lol). there’s also so many moving parts in the codebase, i can make a
        solution in half a day, but fitting that solution into the codebase can
        take a week. so now when i start designing solutions, i try to not think
        about it as “how to make a gear”, but “how to make a gear that fits in
        the machine”
        <br />
        <br />
        <b>good coding practices</b>. working in a big ecosystem, you just have
        to have good coding practices. im talking about design patterns,
        implementation quality, and non-executable things like naming
        conventions, linting, etc. having to work with different standards in
        place really molded my brain to not think about the now, but the{" "}
        <ImageHoverCard text="future" imageSrc={"/images/google/future.png"} />.
      </p>
      <h3>final thoughts</h3>
      <p>
        if i had to rate my summer with google out of 10, i’d give it 9/10. i
        got a lot out of this internship, specifically a lot of great
        engineering (not just coding!) experience and met so many awesome people
        (shoutout to my team!). but there’s still a couple of things i wished i
        could have done that might have only been possible at a startup. i’ll be
        taking these lessons to wherever i end up next, and if you’re looking
        for a 2024 new grad based out of new york, shoot me an email at{" "}
        <a href="mailto:quinnha.hello@gmail.com" class="clickable">
          quinnha.hello@gmail.com
        </a>
        !
      </p>
    </div>
  );
}

export default Google;
