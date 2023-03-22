import { useState, useEffect } from "react";

function Resume() {
  useEffect(() => {
    document.title = "quinn's resume (๑•̀ㅁ•́๑)✧";
  }, []);

  return (
    <div>
      <p>here's my resume（˶′◡‵˶）</p>
      <hr class="dashed" />

      <iframe
        src="https://drive.google.com/file/d/1yc55Az_3824yYQpjTEtzzf2fPfIyIgms/preview"
        width="640"
        height="825"
        allow="autoplay"
      ></iframe>

      <a
        href="/Resume_Quinn_Ha.pdf"
        download="Resume_Quinn_Ha.pdf"
        class="clickable"
      >
        download
      </a>
    </div>
  );
}

export default Resume;
