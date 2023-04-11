import "./footer.css";

function Footer() {
  return (
    <div>
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
        <a
          href="https://bento.me/quinnha"
          target="_blank"
          class="	fa fa-caret-square-o-down fa-lg"
        >
          {""}
        </a>
      </p>
      {/* <p class="credit_p">
        inspired by{" "}
        <a
          href="https://www.tiffanywang.me/"
          target="_blank"
          class="credit"
        >
          tiffany
        </a>
      </p> */}
    </div>
  );
}

export default Footer;
