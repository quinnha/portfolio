import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ImageHoverCard from "../../components/image_hover_card";
import { Helmet } from "react-helmet";

function HiddenGems() {
  useEffect(() => {
    document.title = "exploration, hidden gems, and gatekeeping";
  }, []);

  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="exploration, hidden gems, and gatekeeping"
        />
      </Helmet>
      <div class="flex-container" id="blog_header_card">
        <h1 id="blog_header">
          exploration, hidden gems,
          <br /> and gatekeeping
        </h1>
      </div>
      <p>
        born too early to explore the galaxies, born too late to explore the
        earth, born just in time to explore the sketchy restaurant next door (
        <ImageHoverCard text="meme" imageSrc={"/images/gems/meme1.png"} />)
      </p>
      <hr class="dashed" />
      <p>
        this was written during my time at rabbitholeathon 4.0. see the
        presentation{" "}
        <a
          href="https://docs.google.com/presentation/d/1zSrleiz7k2av9Cfh2xGO432cjvR5xOvy5EVBM0PuOag/edit?usp=sharing"
          target="_blank"
          class="clickable"
        >
          here
        </a>
        , and my thoughts on rabbitholathon will go up soon!
      </p>
      <p>
        i have this fascination that when i live somewhere for an extended
        period of time, to try to find hidden gems. i’ve always wondered about
        what made things hidden gems, and why i care so much about finding
        something that the masses haven’t.{" "}
      </p>
      <p>
        so to start, what is a hidden gem? its easy to break it down into two,
        hidden, and gems - hidden meaning something hard to find and gem meaning
        something of value - so in other words a hidden gem is something of
        value which is hard to find.
      </p>
      <img class="venn" src="/images/gems/venn1.png" />
      <p>
        hard to find could be digital - maybe the place has no online presence,
        or physical, behind an unmarked door. value is subjective, beauty is in
        the eye of the beholder.
      </p>
      <p>
        another way to look at hidden gems is to look at phrases with similar
        meanings, like “off the beaten path” and “diamond in the rough”, which
        can also mean that a hidden gem requires some effort to get to. now our
        definition of a hidden gem has a third part, that its something of value
        which is hard to find, and hard to get to.
      </p>
      <img class="venn" src="/images/gems/venn2.png" />
      <p>
        something hard to find but hard to get to without value is
        unsatisfactory - doing all the work for something mid, just like the
        food scene in new york. something hard to get to but of value is just
        inaccessible, and something which is hard to find but of value is a rare
        find, both which arent as bad as something hard to find and hard to get
        to, because at least it has value.
      </p>
      <p>
        and for the most part, hidden gems have always looked like this
        intersection, but the circle on the venn diagram for “hard to find” has
        gotten exponentially smaller due to the internet and social media. the
        sunday times restaurant critic marina o’loughin coined it best:{" "}
      </p>
      <h3>
        “anthony bourdain would always have been there first. these days, it’s
        an instagrammer often more interested in scoring likes than actually
        eating.”
      </h3>
      <p>
        the venn diagram for hidden gems now looks like this: the hidden bubble
        being a bit smaller now
      </p>
      <img class="venn" src="/images/gems/venn3.png" />
      <p>
        with everything now documented online, and the rise of “influencers”,
        who care more about using experiences to gain more following, it’s
        increasingly harder to find something that hasn’t been discovered
        already. so while the hidden gem hasnt changed, its certainly become
        more and more obscure.
      </p>
      <p>
        this obscurity invites the human nature to explore, and is one of the
        two reasons why people care about finding hidden gems. as humans, our
        brains have been conditioned to reward exploration - humans that were
        more curious tended to live longer, and is the reason behind many modern
        comforts.
      </p>
      <h3>
        we are born too early to explore the galaxies, born too late to explore
        the earth, but born just in time to explore the sketchy restaurant next
        door.{" "}
      </h3>
      <p>
        its like how people will go to remote corners of the world to see
        something no one’s ever seen before, finding hidden gems is a sort of
        new-age exploration. im interested in trying some dishes that most
        people around me havent tried before. im either going to be whelmed by
        this experience, or rewarded by this new knowledge of this obscure new
        thing that makes me feel better about myself.
      </p>
      <p>
        this obscurity is also{" "}
        <ImageHoverCard text="power" imageSrc={"/images/gems/meme3.png"} />, and
        this fundamental human desire is the other reason why people care about{" "}
        <ImageHoverCard
          text="finding hidden gems"
          imageSrc={"/images/gems/meme2.png"}
        />
        . being in the know feels good, and this desire for power motivates
        people to discover hidden gems. this knowledge and power can be traded
        socially, in order to create and maintain relationships.
      </p>
      <p>
        with great power comes great responsibility. gaslight, gatekeep,
        girlboss. not everything is for everyone, and more often than not,
        oversharing of hidden gems have frequently led to ruining them.
        oversharing displaces people, and harms ecosystems.
      </p>
      <p>
        in part of a larger issue, tourism introduces (generally) more affluent
        people into the local scene, often pricing out locals for which once was
        their livelihood, many examples include barcelona, hawaii, and venice.
        these locals, are then forced to move elsewhere, for which the city
        remains an empty shell of its former self - milked of its charm and
        personality. these masses then disrupt local ecosystems, causing immense
        damage to beaches, jungles, etc. one popular example is everest, and the
        heaps of waste that have been introduced (double entendre on how sherpa
        lives have changed as a result), as well as organizations which have
        arisen to protect the ecosystem from overuse, such as keep tahoe blue
      </p>
      <p>
        on something closer to the ground, i’ve found that many restaurants
        experience a decline in quality after going viral. all problems exist
        because of scale, and restaurants are no different. in a way, its
        heartbreaking see a once beloved gem run to the ground by a tiktok
        recommendation.
      </p>
      <p>
        and this is what i argue for, that gatekeeping is an evil necessity.
        restricting the access to hidden gems protects their character and
        enables them to flourish naturally, in the sun of their own efforts.
        sure, people might stumble upon them either by accident or with intent,
        but the goal isnt to be the only person, its to filter out people who
        might not care about the importance of a gem, people who wear gems to
        flaunt. the effort that you go through makes you a better steward
        because you put in work to find it{" "}
      </p>
      <p>
        its like{" "}
        <a
          href="https://meaningness.com/geeks-mops-sociopaths"
          target="_blank"
          class="clickable"
        >
          geeks, mops, and sociopaths in subculture evolution
        </a>
        (for which i read during the event). theres an optimal ratio of geeks
        (people who are really into the gem and contribute to make it better) to
        mops (people who are fans, and contribute mainly financially). by
        maintaining this balance, the gem can still thrive socially and
        financially.
      </p>
      <p>
        so were near the end now, and i’ve brought up two points on hidden gems,
        and gatekeeping hidden gems. but if everyone gatekeeps, how are you
        actually supposed to find hidden gems, and how are you supposed to
        maintain this geek to mop ratio? the answer is word of mouth.
      </p>
      <p>
        word of mouth builds credibility and reasoning behind a gem, while
        limiting who is aware of this gem. this control is power, and ensuring
        that the right people go to these gems helps in the natural growth of
        the gem, protecting it from overcrowding and any other related damage.
      </p>
      <p>
        so when it comes to find hidden gems, remember that theyre not supposed
        to be easy to find. theyre something of value which is hard to find and
        hard to get to. some ways you can find them include:
      </p>
      <u1>
        <li>talking to people, offline and online</li>
        <li>walking down on google earth/maps</li>
        <li>read the signs and take the risk</li>
      </u1>
      <p>
        while the first two are pretty simple, reading the signs and taking the
        risk looks different in every scenario. maybe its a asian restaurant
        with a faded menu and the child doing homework and working the counter
        at the same time. maybe you end up on a smaller street of stores where
        all the tourists seem to disappear. but when you find your hidden gem,
        be sure to gatekeep, just a little bit :)
      </p>
      <br />
      <p>future readings:</p>
      <u1>
        <li>
          <a
            href="https://roadbook.com/opinion/has-the-internet-killed-the-hidden-gem/"
            target="_blank"
            class="clickable"
          >
            has the internet killed the hidden gem?
          </a>
        </li>
        <li>
          <a
            href="https://www.thecut.com/2023/07/what-does-gatekeeping-mean.html"
            target="_blank"
            class="clickable"
          >
            what does gatekeeping mean?
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@Fustiaen/the-overused-concept-of-hidden-gem-on-tiktok-and-its-genuine-significance-94c4317b6385"
            target="_blank"
            class="clickable"
          >
            the overused concept of 'hidden gem' on tiktok
          </a>
        </li>
      </u1>
    </div>
  );
}

export default HiddenGems;
