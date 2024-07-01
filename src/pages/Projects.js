import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Projects() {
  useEffect(() => {
    document.title = "mihir's projects ( ´ ▽ ` )b";
  }, []);

  return (
    <div>
      <p>
        some projects, find the rest on my{" "}
        <a href="https://github.com/Mihir3" class="clickable" target="_blank">
          github
        </a>{" "}
        <nobr>(๑•̀ㅁ•́๑)✧</nobr>
      </p>
      <hr class="dashed" />
      <p>
        <a
          href="https://docs.google.com/document/d/15C8I5cEp4FuZprw3DXxSgQZiRl-Llm6xjh7Oqz7nLAQ/edit?usp=sharing"
          class="clickable"
          target="_blank"
        >
          <b>CMS Detector Quality Assurance using M.L. Methods</b>
        </a>{" "}
        <br />
        worked with TIFR researchers to build a quality assurance framework for components such as PCBs in the CMS experiment at CERN
      </p>


      <p>
        <a
          href="https://drive.google.com/drive/folders/1PtRwapJTIENOd8fzDfQo0_fzLJQ5Ir_2"
          class="clickable"
          target="_blank"
        >
          <b>KhakiMitra: Speech Emotion Recognition on Live Emergency Calls</b>
        </a>{" "}
        <br /> winning project at the National Smart India Hackathon 2022 to predict an emergency caller’s state of
        influence for the State Police Department using call recordings and transcripts
      </p>
      <p>


        <a
          href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4111847"
          class="clickable"
          target="_blank"
        >
          <b>DOT-HAZMAT (Detection Of Threat: Hazardous Materials)</b>
        </a>{" "}
        <br />
        built a customized CNN pipeline-based Android application using Pytorch and Tensorflow Lite for real-time detection of 13 HAZMAT signs at accident sites
      </p>


      

      <p>
        <i>(this page is a work in progress, pictures coming soon!)</i>
      </p>
    </div>
  );
}

export default Projects;
