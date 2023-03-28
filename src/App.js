import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import QuinnAI from "./pages/QuinnAI";
import AboutQuinnAI from "./pages/blogs/About-QuinnAI";
import ASL from "./pages/blogs/ASL";
import Log from "./pages/Log";
import Blog from "./pages/blogs/Blogs";
import "./index.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "G-BR72D9JR60",
};
TagManager.initialize(tagManagerArgs);

function AppRoutes() {
  return (
    <>
      <div class="flex-container" id="outer" />
      <div class="flex-container" id="outer">
        <div class="flex-container" id="inner"></div>

        <div class="flex-container" id="inner">
          <div class="flex-container" id="nav_bar">
            <br />
            <NavBar></NavBar>
          </div>

          <div class="flex-container" id="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="resume" element={<Resume />} />
              <Route path="quinn-ai" element={<QuinnAI />} />
            </Routes>

            <Footer />
          </div>
        </div>

        <div class="flex-container" id="inner" />
      </div>
      <div class="flex-container" id="outer" />
    </>
  );
}

function LogRoutes() {
  return (
    <div>
      <div class="flex-container" id="outer" />
      <div class="flex-container" id="outer">
        <div class="flex-container" id="inner"></div>

        <div class="flex-container" id="blog">
          <Routes>
            <Route path="/" element={<Log />} />
          </Routes>
          <Footer />
        </div>

        <div class="flex-container" id="inner" />
      </div>
      <div class="flex-container" id="outer" />
    </div>
  );
}

function BlogRoutes() {
  return (
    <div>
      <div class="flex-container" id="outer" />
      <div class="flex-container" id="outer">
        <div class="flex-container" id="inner"></div>

        <div class="flex-container" id="blog">
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="quinn-ai" element={<AboutQuinnAI />} />
            <Route path="asl" element={<ASL />} />
          </Routes>
          <Footer />
        </div>

        <div class="flex-container" id="inner" />
      </div>
      <div class="flex-container" id="outer" />
    </div>
  );
}

function App() {
  window.dataLayer.push({
    event: "pageview",
  });
  return (
    <div className="App">
      <meta charset="UTF-8"></meta>
      <link rel="stylesheet" href="static/source.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto+Mono"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
      />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
      />
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
        <Route path="/log/*" element={<LogRoutes />} />
        <Route path="/blogs/*" element={<BlogRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
