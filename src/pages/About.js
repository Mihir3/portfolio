import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "mihir's life :3";
  }, []);

  return (
    <div>
     
      <p>
        <nobr>─=≡Σ((( つ•̀ω•́)つLET’S GO!</nobr>
      </p>

      <hr class="dashed" />

      <p>
        i'm someone who's a bit all over the place. i love all
        things tech, art, maps, fashion, walkable cities, food, and so much more.
        sometimes i feel like a sponge, going around and learning as much as i
        can from the amazing people around me &#129533;.
        <br />
        <br />
        my existence in so many things really helped shape the learner that i am today, and the one
        i'll be tomorrow!
      </p>

      <p> </p>

      <p>
        <b>currently</b>
      </p>
      <p>
        i'm a CS graduate student at{" "}
        <a href="https://illinois.edu/" target="_blank" class="clickable">
          University of Illinois Urbana-Champaign
        </a>
        , with a focus on data science and machine learning.
        <br />
        <br />
        i'm interested in exploring data, accessibility, building things on the web, and all creative
        intersections of tech and art.
        <br />
        <br />
        <div class="box">
        i'm looking for 2024 summer internship positions in the US! shoot me an{" "}
        <a href="mailto:mihirpamnani31@gmail.com" class="clickable">
          email
        </a>{" "}
        and let's talk about why i'd be a good fit for your team.
      </div>
      </p>

      <p> </p>

      <p>
        <b>previously</b>
      </p>
      <p>did some internships:</p>
      <ul>
        <li>
          built a quality assurance framework for components in CMS experiment with <a
            href="https://www.tifr.res.in/"
            class="clickable"
            target="_blank"
          >TIFR </a>
          researchers (
          <a
            href="https://home.cern/science/experiments/cms"
            class="clickable"
            target="_blank"
          >
            cms experiment at cern
          </a>
          )
        </li>
        <li>
          worked on language models to build a legal judgement prediction system to accept or reject petitions with  <a
            href="https://nitkkr.ac.in/?author=180"
            class="clickable"
            target="_blank"
          >
            Dr.Sarika Jain
          </a>
        </li>
        <li>
          wrote some javascript and python code for the clients at Atto (
          <a
            href="https://portfolio.attoinfotech.com/?_gl=1*1hietzo*_ga*MTg3MTY2OTUwOC4xNjkzODM5NTg4*_ga_G413W9DMRS*MTY5MzgzOTU4OC4xLjEuMTY5MzgzOTY3NS4wLjAuMA.."
            class="clickable"
            target="_blank"
          >
           Atto Infotech
          </a>
          )
        </li>
        {/* <li>
          wrote test suites for Equitable Bank's android app (
          <a
            href="https://apps.apple.com/ca/app/eq-bank-mobile-banking/id1039432211"
            class="clickable"
            target="_blank"
          >
            EQ Bank Mobile Banking
          </a>
          )
        </li> */}
      </ul>
      <p></p>
      <p>and did some clubs:</p>
      <ul>
        <li>
          worked on some web dev and problem statements for Syrus Hackathon with {" "}
          <a
            href="https://cmpn-codecell.github.io/Syrusnew.html"
            target="_blank"
            class="clickable"
          >
            CodeCell - VESIT
          </a>
        </li>
        <li>
          did a lot of debates and MUNs while my time at {" "}
          <a
            href="https://www.instagram.com/veslit_circle/?hl=en"
            class="clickable"
            target="_blank"
          >
            VES Literature Circle
          </a>
        </li>
        <li>
          did adobe design and wrote big newsletter articles for{" "}
          <a href="https://vesit.ves.ac.in/monthlynewsletter" target="_blank" class="clickable">
            VESIT Connect
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;
