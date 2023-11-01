import { useEffect } from "react";

function Tests() {
  useEffect(() => {
    document.title = "personality tests";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <p>
        <nobr>૮ ˶ᵔ ᵕ ᵔ˶ ა</nobr> a various assortment of personality tests
      </p>
      <hr class="dashed" />
      <img
        src="/images/tests/togetic.png"
        alt="togetic"
        width="253"
        height="auto"
      />
      <img
        src="/images/tests/owl.png"
        alt="little owl"
        width="200"
        height="auto"
      />
      <img
        src="/images/tests/warm flame.png"
        alt="warm flame"
        width="450"
        height="auto"
      />
      <img
        src="/images/tests/grass.png"
        alt="grass"
        width="450"
        height="auto"
      />
      <img
        src="/images/tests/bulbasaur.jpg"
        alt="bulbasaur"
        width="450"
        height="auto"
      />
      <img
        src="/images/tests/raymond.png"
        alt="raymond"
        width="450"
        height="auto"
      />
      <img src="/images/tests/poet.png" alt="poet" width="200" height="auto" />
    </div>
  );
}

export default Tests;
