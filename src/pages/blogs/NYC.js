import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BlogNavBar from "../../components/blog_navbar";
import ImageHoverCard from "../../components/image_hover_card";

function NYC() {
  useEffect(() => {
    document.title = "a nyc summer (─‿‿─)";
  }, []);

  return (
    <div>
      <div class="flex-container" id="blog_header_card">
        <h1 id="blog_header">a nyc summer</h1>
        <BlogNavBar></BlogNavBar>
      </div>
      <p>
        just finished a summer in nyc, and wanted to write about it!
        <nobr>ʕ•́ᴥ•̀ʔっو</nobr>
      </p>
      <hr class="dashed" />
      <h3>what i was doing</h3>
      <p>
        i was in nyc for a quick 14-week internship with{" "}
        <ImageHoverCard text="google" imageSrc={"/images/nyc/google.png"} />,
        where i worked on accessibility tools for google docs/sheets/slides! it
        was a super amazing experience, i’ll write about it soon :)
      </p>
      <br />
      <h3>overall thoughts</h3>
      <p>
        coming from toronto, i thought it was just going to be a “bigger
        toronto”, but i never realized how much bigger it would be. on my first
        day, i was sent into a panic - i was overcaffeinated, overstimulated,
        and overwhelmed. but after getting over that, i was in for a treat, new
        york was everything that i ever wanted in a city, and the{" "}
        <ImageHoverCard
          text="intern bubble"
          imageSrc={"/images/nyc/bereal.png"}
        />{" "}
        was definitely treating me well.
        <br />
        <br />i met so many amazing people this summer, and did so many things
        that i would have never dreamt of, so without further ado, here’s some
        stuff that i liked about nyc and what i didnt like!
      </p>
      <br />
      <h3>things i like</h3>
      <p>
        god there are so many things i love about the city, but i’ll keep it a
        bit short
        <br />
        <br />
        <b>walking</b>. oh my god i can just{" "}
        <ImageHoverCard
          text="walk/transit"
          imageSrc={"/images/nyc/henge.png"}
        />{" "}
        everywhere. it’s amazing how much more i can do when i don’t need a car
        to get around, and am surrounded by reliable transit. especially at
        night when my eyes start to shut down, or when the{" "}
        <ImageHoverCard
          text="brooklyn mirage"
          imageSrc={"/images/nyc/mirage.png"}
        />{" "}
        goes too long, i know i can always get myself home in a reasonable time.
        it also unlocks a ton of possibility for businesses, which leads to my
        next favourite:
        <br />
        <br />
        <b>businesses</b>. i love how businesses{" "}
        <ImageHoverCard
          text="spill on the sidewalks"
          imageSrc={"/images/nyc/spill.png"}
        />{" "}
        and the roads to reclaim the city, how there’s so many small stores for
        anything and everything! i can get (almost) anything i want just because
        there’s so much variety and niche shops. its truly magical being able to
        stumble into a random store and walk out with something you love -
        there’s a saying that the moment you step outside in nyc you lose 25
        bucks, and its true.
        <br />
        <br />
        <b>people</b>. maybe its the{" "}
        <ImageHoverCard
          text="intern bubble"
          imageSrc={"/images/nyc/people.png"}
        />
        , or maybe im romanticizing things - but i’ve met some of the most
        beautiful and kind{" "}
        <ImageHoverCard text="people" imageSrc={"/images/nyc/people2.png"} /> in
        the city. sure you can say that about anywhere in the world, but i found
        that the everyday person in the city has so much going on, so much{" "}
        <ImageHoverCard text="swagger" imageSrc={"/images/nyc/swagger.png"} />,{" "}
        <ImageHoverCard
          text="personality"
          imageSrc={"/images/nyc/people4.png"}
        />
        , and{" "}
        <ImageHoverCard text="energy" imageSrc={"/images/nyc/people3.png"} />.
        <br />
        <br />
        <b>
          <ImageHoverCard text="vibes" imageSrc={"/images/nyc/vibes.png"} />
        </b>
        . i feel like i have a different energy in new york. now that i’m back
        in suburbia, i find myself less energized by the{" "}
        <ImageHoverCard
          text="general public"
          imageSrc={"/images/nyc/public.png"}
        />{" "}
        - maybe its the{" "}
        <ImageHoverCard text="people" imageSrc={"/images/nyc/people5.png"} />,
        the heat, or the{" "}
        <ImageHoverCard text="tourists" imageSrc={"/images/nyc/tourists.png"} />
        , but i miss being surrounded by people but feeling so alone. it’s
        freeing trying new things because no one here will judge you since
        there’s always someone weirder in the room
        <br />
        <br />
        <b>24/7</b>. where else can you stumble at 4 am and get the best
        sandwich of your life?{" "}
        <ImageHoverCard text="food" imageSrc={"/images/nyc/food.png"} />,{" "}
        <ImageHoverCard text="bars" imageSrc={"/images/nyc/bars.png"} />, and{" "}
        <ImageHoverCard text="clubs" imageSrc={"/images/nyc/clubs.png"} /> are
        just open later, and it’s safer since everyone is out and about - truly
        the city that never sleeps.
        <br />
        <br />
        <b>everything</b>. specifically how there’s something for everyone, and
        always everything for everyone. no matter how niche your hobby is,
        there’s people doing it - and if you want to try something else, there’s{" "}
        <ImageHoverCard text="more people" imageSrc={"/images/nyc/line.png"} />{" "}
        doing it!{" "}
        <ImageHoverCard
          text="(presentation night)"
          imageSrc={"/images/nyc/presentation.png"}
        />
      </p>
      <br />
      <h3>things i dont like</h3>
      <p>nothing is ever perfect.</p>
      <p>
        <b>cost</b>. god dam this city is{" "}
        <ImageHoverCard text="expensive" imageSrc={"/images/nyc/bill.png"} />. i
        remember cringing over buying a can of beer for 8 bucks, but on my last
        day i got one at a bar for 9 bucks and thought i got a sweet deal. it’s
        amazing how much things cost here, i truly wonder how people not in
        tech/finance can afford to exist here. one good example is rent, to sign
        a lease you need first and last months, security deposit, and a brokers
        fee (15% of annual rent). what does the broker do? nothing really, but
        you end up paying almost 40% of a years rent upfront. its ridiculous.
        <br />
        <br />
        <b>cleanliness</b>. dang this city{" "}
        <ImageHoverCard text="smells" imageSrc={"/images/nyc/trash.png"} />. i
        can walk 5 blocks and smell 6 different unpleasant smells. it probably
        has to do with the general hygiene of the city, lots of garbage bags out
        and about, and its even worse in the subway stations. at least the rats
        are cute, but i can go without.
      </p>
      <br />
      <h3>conclusion</h3>
      <p>
        thanks for sticking around, it means a lot when people read through the
        stuff i write! i really love new york, and really hoping to make it
        back. to say it was the best summer of my life is a understatement, i
        truly don’t think i’ll have the freedom to experience anything like this
        again.
        <br />
        <br />
        if i met you this summer, even briefly, just know that i really
        treasured my time with you, and hoping we can swing back around and hang
        out wherever we end up!
        <br />
        <br />
      </p>
    </div>
  );
}

export default NYC;
