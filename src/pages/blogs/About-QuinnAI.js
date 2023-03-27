import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BlogNavBar from "../../components/blog_navbar";

function AboutQuinnAI() {
  useEffect(() => {
    document.title = "about quinn ai (´∀｀)";
  }, []);

  return (
    <div>
      <div class="flex-container" id="blog_header_card">
        <h1 id="blog_header">about quinn ai</h1>
        <BlogNavBar></BlogNavBar>
      </div>
      <p>
        thanks for checking out quinn ai! here's some more info about it
        <nobr>(๑˃̵　ᴗ　˂̵)و</nobr>
      </p>
      <hr class="dashed" />
      <h3>motivation</h3>
      <p>
        i've always wanted to make a discord bot of myself, similar to&#160;
        <a
          href="https://medium.com/@kunaljaydesai/building-a-gpt-3-powered-discord-support-bot-8791b2d2681d"
          target="_blank"
          class="clickable"
        >
          here
        </a>
        . i thought it would interesting to tap into a side of myself generated
        by ai, but unfortunately struggled a bit too much getting tensorflow to
        work on my old pc.
        <br />
        <br />
        openai's api really simiplified things for me, i could get a better
        model, for less work, and just have to fine-tune it to my preferences!
        plus, it would be a nice introduction to apis, something i dont have
        experience with, and would be a neat project to share with others.
      </p>
      <h3>process</h3>
      <p>
        i got started with the&nbsp;
        <a
          href="https://platform.openai.com/docs/quickstart"
          target="_blank"
          class="clickable"
        >
          quickstart guide
        </a>
        , and reduced it all the way down to a poc of what i wanted implement,
        with a textarea for input, a submit button, and a simple response field.
        <br />
        <br />i then made a new component, and slapped on the poc. after a quick
        styling, you get the look and feel that's up right now. i put in a
        simple limit so my wallet doesnt run dry, and gave it to some friends to
        test out!
      </p>
      <h3>training the model</h3>
      <p>
        from the motivation, i wanted to make a discord bot of myself, so
        naturally, i looked towards my discord chat logs as training data.
        using&#160;
        <a
          href="https://github.com/Tyrrrz/DiscordChatExporter"
          target="_blank"
          class="clickable"
        >
          discordchatexporter
        </a>
        , and then created an tool (
        <a
          href="https://github.com/quinnha/openAI-discord-data-generator"
          target="_blank"
          class="clickable"
        >
          here
        </a>
        ) that exported the replies into a jsonl format of &#123;"prompt" :
        "input prompt", "completion": "completion output"&#125;.
        <br />
        <br />
        after creating 1147 data inputs, i fine-tuned a davinci model (the
        "best" gpt3 model, cost $4.51), and lo and behold, garbage in == garbage
        out, and the outputs i was getting were nowhere close to what i wanted.
        after rereading the documentation, i learned that it's better to have
        quality data, which i was going to do next.
        <br />
        <br />
        so then i created a webscraper for this&#160;
        <a
          href="https://thepleasantconversation.com/questions-to-get-to-know-someone/"
          target="_blank"
          class="clickable"
        >
          website
        </a>
        , and manually replied to 400/700 of the questions. upon further
        research, i found that the currie model is more suited to my needs
        (simple q/a), so i switched my model of choice, and trained it. 41 cents
        later, i had an excellent model that adapted my messaging patterns, and
        gave answers similar to what i would've given!
        <br />
        <br />
        i thought i was done, but then i was informed of few shot learning, a
        practice where refeeding old data could save time in creating new data,
        and help strengthen my repsonses. so then i refed the data another time,
        and my answers seemed a bit more coherent!
        <br />
        <br />
        i'll probably train it with some more data around my preferences (food,
        travel, etc), but it was super fun to tinker around and build something
        cool (albeit useless)
      </p>
      <h3>data collection</h3>
      <p>i am not collecting any data, so i will not see your prompts haha</p>
      <h3>conclusion</h3>
      <p>
        it's been a while since i've felt motivated to build something, and the
        first time that i felt like i was having fun coding!
        <br />
        <br />
        just tinkering around to something im proud to show off to friends has
        been a rewarding experience, i learned a lot about apis, ai, and
        struggled through a lot of javascript.
        <br />
        <br />
        what should i build next? shoot an email to{" "}
        <a href="mailto:quinnha.hello@gmail.com" class="clickable">
          quinnha.hello@gmail.com
        </a>{" "}
        with any feedback/suggestions :)
      </p>
    </div>
  );
}

export default AboutQuinnAI;
