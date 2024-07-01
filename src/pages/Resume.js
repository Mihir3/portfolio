import { useState, useEffect } from "react";

function Resume() {
  useEffect(() => {
    document.title = "mihir's resume (๑•̀ㅁ•́๑)✧";
  }, []);

  return (
    <div>
      <p>here's my resume in it's black and white glory（˶′◡‵˶）</p>
      <hr class="dashed" />

      <iframe
        src="https://drive.google.com/file/d/15CqkIqo-NCTQze7CAlrJ7jpzPiR-1QmL/preview"
        width="640"
        height="825"
        allow="autoplay"
      ></iframe>

      <a
        href="/portfolio/Resume_Mihir_Pamnani.pdf"
        download="Resume_Mihir_Pamnani.pdf"
        class="clickable"
      >
        download
      </a>
    </div>
  );
}

export default Resume;
