import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BlogNavBar from "../../components/blog_navbar";
import ImageHoverCard from "../../components/image_hover_card";
import { Helmet } from "react-helmet";

function Cooking() {
  useEffect(() => {
    document.title = "college cooking guide (￣ω￣)";
  }, []);

  return (
    <div>
      <Helmet>
        <meta name="description" content="quinn's college cooking guide" />
      </Helmet>
      <div class="flex-container" id="blog_header_card">
        <h1 id="blog_header">quinn's college cooking guide</h1>
        <BlogNavBar></BlogNavBar>
      </div>
      <p>how i cook as a broke student</p>
      <hr class="dashed" />
      <p>
        hi i'm{" "}
        <ImageHoverCard text="quinn" imageSrc={"/images/cooking/me.png"} />
        , and i really like food!
        <br /> <br />
        this blog post is to motivate other college kids and show that its
        pretty easy to eat well even when youre broke or have little time. a
        bunch of people have asked how i make time to cook food, and generally
        eat well, so here’s a short guide on what i do
        <br /> <br />
        just a heads up, this covers mostly asian dishes, since that’s kinda
        what i do, so most of these recipes may require a asian grocery
        <br /> <br />
        here's some of my qualifications:
        <ul>
          <li>5 years of living at uni</li>
          <li>some food pics</li>
        </ul>
        <table>
          <tr>
            <td>
              <img
                className="food"
                src="/images/cooking/bns.png"
                alt="taiwanese beef noodle soup"
              />
              <br />
              taiwanese beef noodle soup
            </td>
            <td>
              <img
                className="food"
                src="/images/cooking/bbc.png"
                alt="black bean chicken"
              />
              <br />
              black bean chicken
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="food"
                src="/images/cooking/rb.png"
                alt="roast beef"
              />
              <br />
              roast beef
            </td>
            <td>
              <img
                className="food"
                src="/images/cooking/t.png"
                alt="thai tea tiramisu"
              />
              <br />
              thai tea tiramisu
            </td>
          </tr>
        </table>
      </p>
      <hr class="dashed" />
      <h1>0. mentality</h1>
      <p>
        if food is just about calories, go eat a gram of{" "}
        <ImageHoverCard
          text="uranium"
          imageSrc={"/images/cooking/uranium.png"}
        />
        . if its something that may bring you{" "}
        <ImageHoverCard text="joy" imageSrc={"/images/cooking/joy.png"} />, i
        think the initial investment of stocking a pantry is super worth it from
        the food you’ll make (i give some tips on how to start the pantry). this
        guide isnt so you stop eating out (i love eating out, follow my{" "}
        <a
          href="https://beliapp.co/lists/qvinnha"
          class="clickable"
          target="_blank"
        >
          beli
        </a>
        ), but to just cook more.
        <br /> <br />
        also crazy hack if you can is to bring frozen food from home so if you
        want actually good food (not saying the food you will make isnt good) or
        variety, you can summon it at any time
      </p>
      <h1>1. buy bulk</h1>
      <p>
        this really only applies to meats. if you have a costco nearby that you
        can access, or even before moving in/after breaks, stock up on
        miscellaneous meats and proportion them to save you time from
        stunlocking you into deciding if you want to buy a lot meat at any given
        time and get tired of it, or simply not buying it at all.
        <br /> <br />
        also, meat in bulk is generally cheaper so its better to stock up and
        portion, even if you don’t have access to a costco nearby
        <br /> <br />
        my roster includes:
        <ul>
          <li>ground pork</li>
          <li>ground beef</li>
          <li>chicken thighs/legs</li>
          <li>pork belly/bacon</li>
          <li>hot pot meat</li>
          <li>shrimp (optional)</li>
          <li>peas/carrot/corn mix</li>
          <li>frozen dumplings</li>
        </ul>
        here's a quick rundown for why
        <br />
        <br />
        <b>ground pork</b>: usually used in a lot of chinese dishes, super
        versatile, and just a meat thats slept on
        <br />
        <b>ground beef</b>: great for pastas in general or for frying it with
        non descript spices/sauces
        <br />
        <b>chicken thighs/legs</b>: for marinating, portion them into sections
        you can throw in the air fryer (more on that later), great for variety
        <br />
        <b>pork belly/bacon</b>: good general meat for a bunch of asian
        recipes(side note, bacon is great for meals in a pinch, since it cooks
        super quick, and you can just toss it in a pan)
        <br />
        <b>hot pot meat</b>: this is super important. its really versatile, and
        you can add much needed protein in any meal, really fast - like instant
        noodles, gyudon, or just fried
        <br />
        <b>shrimp</b>: fun for instant noodles, optional because its expensive
        <br />
        <b>peas/carrot/corn mix</b>: super easy to throw into when you cook
        rice, make pasta, boil soup, free veggies
        <br />
        <b>frozen dumplings</b>: free protein and carbs, and delicious (bonus
        points if you make ur own (hyperlink to my tweet))
        <br /> <br />
        i’ll usually portion them into ziploc bags (sandwich bags work too don’t
        let big ziploc lie to you), and they’ll last 3-6 months in the freezer.
        i’ll get a bunch of meat and put them in the fridge the night before,
        and they’ll last around 3-4 days before going bad, so only take it out
        if you use it
        <br /> <br />
        for chicken, i like to buy the skin on bone in for thighs, and remove
        the bone on some because you can use the bone for soups and stuff, and
        skin adds a lot of flavour
        <br />
        <br />
        pro tip, you can defrost on your counter the day of, and if you want it
        to defrost faster, soak in hot water!
      </p>
      <h1>2. invest in a wok</h1>
      it doesnt have to be a wok, just a big ass pot. you can make so many
      things in it, especially for stir fry, boiling, braising, whatever you
      want, you got. dont need no wok hei because your student housing stove top
      is probably broken anyways, so its just a big pot.
      <br /> <br />
      also get a air fryer while youre at it, you'll skip the oven and make food
      faster
      <br /> <br />
      but the wok does everything, including meal prep!
      <h1>3. i don't like the term meal prep</h1>
      <p>
        its mostly because it just sounds lame, no one wants to prepare stuff
        and eat the same god dam thing for the entire week, that how you learn
        to hate your favourite foods, by eating it for every meal. this is my
        trick to avoid that taste fatigue during the week, while minimizing the
        time you need to cook
        <br />
        <br />
        <b>
          cook big meals twice a week minimum, and make fast foods in between
        </b>
        <br /> <br />
        this means that you’ll always have different foods on hand. so if i make
        a big portion on taiwanese ground pork on monday, i might cook army stew
        on wednesday. in between, i’ll eat some air fried chicken (packaged
        because you followed step one) on rice, udon, or whatever i have in my
        fridge. this also works in detracting eating out because you got food at
        home (i now understand what my mom was saying). and you won’t feel
        guilty about eating out when you need to, because once in a while never
        hurted ;)
        <br /> <br />
        this strategy also works if you don’t have a lot of time, on your busy
        days, you’ll have food ready to go, and when you have a bit more time on
        your hands, you can take 15-20 minutes to cook a quick meal.
        <h1>4. staple pantry items</h1>
        one of the nice things about a lot of asian recipes is that they use a
        lot of the same ingredients. some stuff you can just remove, or
        substitute, if you don’t want to pay for things you may only use once,
        or just dont want to buy (im looking at you, hoisin sauce). ive divided
        this category in a couple of sections, general, chinese, japanese, and
        korean
        <br /> <br />
        <table style={{ width: "100%" }}>
          <tr>
            <td>
              <b>General</b>
              <ul>
                <li>Soy sauce</li>
                <li>Fish sauce</li>
                <li>Vinegar</li>
                <li>Sugar</li>
                <li>Salt</li>
                <li>Pepper</li>
                <li>Chicken powder</li>
                <li>Cornstarch</li>
                <li>Green onion</li>
                <li>Garlic</li>
                <li>Ginger</li>
                <li>White onion</li>
                <li>Thai red peppers</li>
                <li>Eggs</li>
                <li>Instant noodles</li>
                <li>Pasta</li>
                <li>Rice</li>
                <li>Chilli oil</li>
              </ul>
            </td>

            <td>
              <b>Chinese</b>
              <ul>
                <li>Shaoxing rice vinegar</li>
                <li>Douban (spicy bean sauce)</li>
                <li>Black bean paste</li>
                <li>Dried noodles</li>
                <li>Dried chilli peppers</li>
                <li>Cured pork + Chinese sausage</li>
              </ul>

              <b>Japanese</b>
              <ul>
                <li>Udon</li>
                <li>Dashi powder</li>
                <li>Mirin</li>
                <li>Sake</li>
                <li>Curry blocks</li>
              </ul>

              <b>Korean</b>
              <ul>
                <li>Gochujang</li>
                <li>Gochugaru</li>
                <li>Kimchi</li>
              </ul>
            </td>
          </tr>
        </table>
        <b>Other</b>
        <ul>
          <li>Pasta sauce</li>
          <li>Spinach/nondescript veggies</li>
          <li>Canned fish (I like Ocean’s pink salmon)</li>
          <li>Dried shiitake mushrooms</li>
          <li>Frozen fish balls/fake crab</li>
          <li>Protein bars (sometimes you just need something on the go)</li>
        </ul>
        combined with the meats in section 1, you now have a huge range of
        possibilities on things you can cook.
        <br /> <br />
        here’s some breakdown on some of the ingredients, and how you can use
        them:
        <br /> <br />
        <b>fish sauce/chicken stock</b>
        <ul>
          <li>
            see salt on a recipe? add some of these bad boys in, especially if
            it's in a soup or braising. it's added flavour and gives it nice
            depth.
          </li>
        </ul>
        <b>vinegar</b>
        <ul>
          <li>
            if your food is missing something, it's likely some acidity. you can
            swap for lemons/limes, but in chinese recipes at least, vinegar will
            do the trick.
          </li>
        </ul>
        <b>shaoxing wine/sake</b>
        <ul>
          <li>
            for deglazing meats, gets the meaty taste out of the meats,
            especially for pork.
          </li>
        </ul>
        <b>daishi</b>
        <ul>
          <li>
            if you have a recipe that calls for sugar, sugar and a bit of daishi
            powder adds a nice hint of sweetness, at the cost of a slight
            fishiness, but usually you won't taste it and it just becomes
            flavour.
          </li>
          <li>also goes in every japanese recipe for some reason.</li>
        </ul>
        <b>kimchi</b>
        <ul>
          <li>
            added as per request, great as a side or in many korean dishes!
          </li>
        </ul>
        so now you have a fully stocked panty, and once in a while you can go
        out to get fresh fruits/veggies/other things you may need for a dish but
        where are the recipes?
      </p>
      <h1>5. recipes</h1>
      <p>
        i only trust like 3 websites for asian food, all of the recipes below
        are from either one of these links:
        <ul>
          <li>
            <a
              href="https://thewoksoflife.com/"
              class="clickable"
              target="_blank"
            >
              woks of life
            </a>{" "}
            for chinese
          </li>
          <li>
            <a
              href="https://www.justonecookbook.com/"
              class="clickable"
              target="_blank"
            >
              just one cookbook
            </a>{" "}
            for japanese
          </li>
          <li>
            <a
              href="https://www.maangchi.com/"
              class="clickable"
              target="_blank"
            >
              maangchi
            </a>{" "}
            for korean
          </li>
        </ul>
        i will defend these websites with my life, they have so many recipes and
        good reads if youre into it, but of course, optional. you’ll notice a
        lot of repeat in these recipes, like fry the aromatics together, then
        the meat, or put the veggies in last, and as you cook more, it’ll become
        second nature, and then you can freestyle with whatever is in your
        fridge.
        <br />
        <br />
        here’s some inspo for foods you can make!
        <br /> <br />
        <table style={{ width: "100%" }}>
          <tr>
            <td>
              <b>big wok meals</b>
              <ul>
                <li>army stew</li>
                <li>mapo tofu</li>
                <li>black bean noodles</li>
                <li>black bean chicken</li>
                <li>whatever pasta u like</li>
                <li>taiwanese ground pork</li>
                <li>taiwanese pork belly</li>
                <li>adobo chicken</li>
                <li>soy chicken</li>
                <li>bossam</li>
                <li>tteokbokki</li>
                <li>japanese curry (with whatever meat)</li>
                <li>fried rice</li>
                <li>big plate chicken</li>
              </ul>
            </td>
            <td>
              <b>rice cooker meals</b>
              <ul>
                <li>cured pork and sausage rice*</li>
                <li>literally rice + frozen veggies + meat + sauces</li>
                <li>rice + dumplings</li>
                <li>congee</li>
              </ul>
              <b> quick meals</b>
              <ul>
                <li>tomato and egg</li>
                <li>udon/instant ramen*</li>
                <li>gyudon*</li>
                <li>oyakodon</li>
                <li>egg on rice</li>
                <li>
                  nondescript stir fry{" "}
                  <a
                    href="https://thewoksoflife.com/how-to-make-stir-fry/"
                    class="clickable"
                    target="_blank"
                  >
                    here
                  </a>{" "}
                </li>
              </ul>
            </td>
          </tr>
        </table>
        <b>frozen marinated chickens</b> (air fry for 18 mins 200 degree C to
        keep it juicy)
        <ul>
          <li>korean marinated chicken</li>
          <li>teriyaki chicken</li>
          <li>chicken tinga</li>
          <li>
            nondescript marinate, as long as it follows{" "}
            <a
              href="https://www.myrecipes.com/how-to/marinating-guide"
              class="clickable"
              target="_blank"
            >
              here
            </a>{" "}
          </li>
        </ul>
        * see extra
        <br /> <br />
        so now you have a bunch of places to start, you can mix in things that
        you like to eat, stuff you want to try, and you can also make these
        fancy/upscale them if you want to/have more time! i.e im learning how to
        make my own noodles and dumpling wrappers to conquer my fear or using
        flour
      </p>
      <h1>6. freestyling tips</h1>
      <p>
        when it comes to adding more substance to your foods, just realize what
        can go where, and you’ll be fine
        <ul>
          <li>fish balls/fake crabs/dumplings - great for soups</li>
          <li>root veggies - soups, braisings, sauces</li>
          <li>fresh veggies - at the end of almost anything</li>
          <li>and more!</li>
        </ul>
        its pretty easy to get more substance out of your meals (maximize time)
        if you just throw stuff in and see what works for you. remember the goal
        isn’t to eat the best good, but good enough food - dont be discouraged
        if something doesnt work out, just try something else!
      </p>
      <h1>7. getting started</h1>
      <p>
        ok so you might be like “wow thats a lot of stuff i need to buy” and im
        here to tell you dont buy everything. you might buy everything, and then
        realize you dont like cooking that much, or fall out of it, so here’s
        what i would do
        <br />
        <br />
        find a recipe of a dish you really want to eat, and check to see what
        essential pantry items they need (specifically sauces). buy all of
        those, cook it, and then find another recipe you want to try, and
        repeat. rome wasnt built in a day and so shouldnt your pantry. start
        small with dishes you like, and then naturally itll expand as you cook
        more and more!
      </p>
      <h1>8. extra</h1>
      <p>
        get a good knife and a big cutting board
        <ul>
          <li>
            you will cook so much faster, and it will be less pain and more
            happy
          </li>
        </ul>
        cured pork and sausage rice
        <ul>
          <li>
            throw in some frozen veggies to the mix, and you’ll feel better
            about yourself
          </li>
        </ul>
        udon/instant ramen
        <ul>
          <li>
            udon is so easy to make, and easy to trick yourself that it’s more
            healthy than instant noodles (i think it is) because you make the
            broth yourself and its like 4 ingredients. it only takes one pot,
            and honestly more people should make it
          </li>
          <li>
            in general, you can stretch your one package of shin ramen or udon
            so far. add in some hot pot meat for some protein, some fish balls,
            fake crab, dumplings for more content some leafy veggies at the end.
            you can also add some rice in it if you want more carbs
          </li>
          <li>
            for udon, if you have leftover raw chicken bones (maybe from
            prepping frozen chicken) or meat in general, cook them in the broth
            before you add the noodles and everything, it add so much more
            flavour and helps you feel satisfied from the added oils/fats. just
            make sure to scum the broth!
          </li>
        </ul>
        gyudon
        <ul>
          <li>
            using hot pot meat is way easier than actually buying thin cut meat
            or whatever, just a little hack. its also really simply, and makes
            you feel accomplished for throwing things in a pan and calling it a
            day
          </li>
        </ul>
        fruits
        <ul>
          <li>
            for fruits, i drink a lot of smoothies (mainly because i can make
            protein powder smoothies hehe), and frozen fruits are pretty dam
            good. one exception is for bananas because those are great for a
            quick snack
          </li>
        </ul>
      </p>
      <h1> 9. end</h1>
      <p>
        if you’ve made it this far, i appreciate it! just dont forget that you
        dont have to stop eating out, just a bit less. you can eat out to get
        inspiration, and find out some dishes you really like and try to
        recreate it at home! its also ok to not be good at cooking, as long as
        it gets better, the more you cook, the better you’ll get.
        <br /> <br />
        let me know if theres any additions i can make, and send some feedback
        if you’ve tried this!
        <br /> <br />- quinn
      </p>
    </div>
  );
}

export default Cooking;
