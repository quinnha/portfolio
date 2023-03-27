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
        <NavLink to="/log/quinn-ai" class="clickable">
          <u>quinn ai</u>
        </NavLink>{" "}
      </h3>
      <h3>
        <NavLink to="/blogs/asl" class="clickable">
          <u>asl: how history shapes languages</u>
        </NavLink>{" "}
      </h3>
    </div>
  );
}

export default Blog;
