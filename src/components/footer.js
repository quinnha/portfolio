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
      </p>
    </div>
  );
}

export default Footer;
