import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BlogNavBar from "../../components/blog_navbar";

function ASL() {
  useEffect(() => {
    document.title = "learning about asl";
  }, []);

  return (
    <div>
      <div class="flex-container" id="blog_header_card">
        <h2 id="blog_header">asl: how history shapes languages</h2>
        <BlogNavBar></BlogNavBar>
      </div>
      <p>some learnings about asl and how it affects the present</p>
      <hr class="dashed" />
      <p>
        <i>coming soon!</i>
      </p>
    </div>
  );
}

export default ASL;
