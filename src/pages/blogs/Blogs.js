import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BlogNavBar from "../../components/blog_navbar";

function Blog() {
  useEffect(() => {
    document.title = "quinn's blogs （=´∇｀=）";
  }, []);

  return (
    <div>
      <div class="flex-container" id="blog_header_card">
        <h1 id="blog_header">blogs</h1>
        <BlogNavBar></BlogNavBar>
      </div>

      <p>collections of all blogs</p>
      <hr class="dashed"></hr>

      <h3>
        <NavLink to="/blogs/quinn-ai" class="clickable">
          <u>quinn ai</u>
        </NavLink>{" "}
      </h3>
      <h3>
        <NavLink to="/blogs/nyc" class="clickable">
          <u>a nyc summer</u>
        </NavLink>{" "}
      </h3>
      <h3>
        <NavLink to="/blogs/google" class="clickable">
          <u>a summer with google</u>
        </NavLink>{" "}
      </h3>
    </div>
  );
}

export default Blog;
