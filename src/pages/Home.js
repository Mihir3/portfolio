import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const hobbies = [
  "writing poetry on my tumblr",
  "making some adrak chai",
  "cafe hopping around the city",
  "pretending to be busy",
  "walking through cities staring skylines",
  "sitting in grass",
  "eating some ramen",
  "walking through art galleries",
  "listening to phoebe bridgers",
  "bar hopping through neighbourhoods",
  "finding the best croissant to eat",
  "trying to find the nearest beach",
  "crafting a new playlist",
  "still breaking code lol",
];

const space = [
  "corner",
  "fragment",
  "sliver",
  "pocket",
  "section",
  "node",
  "slice",
  "shard",
  "bit",
  "piece",
  "string",
];

function useWordCycle(words) {
  const [currentWord, setCurrentWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const handleClick = () => {
    const currentIndex = words.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % words.length;
    setCurrentWord(words[nextIndex]);
  };

  return [currentWord, handleClick];
}

function Home() {
  useEffect(() => {
    document.title = "mihir's life :3";
  }, []);

  const [currentHobby, handleHobbyClick] = useWordCycle(hobbies);
  const [currentSpace, handleSpaceClick] = useWordCycle(space);

  return (
    <div>
     <img src="/portfolio/images/me.jpeg" alt="it's me!" width="200" length="200" height="auto" />
      <h2>i'm mihir!</h2>
      <p>
        welcome to my little{" "}
        <a class="clickable" id="corner" onClick={handleSpaceClick}>
          {currentSpace}
        </a>{" "}
        of the internet!
      </p>
      <p>
        i'm currently based in Champaign, Illinois ; where i'm doing my Master's in Computer
        Science at University of Illinois Urbana-Champaign. <br/><br/>
        
        previously, i graduated with a Bachelor's in Computer Engineering from the University of Mumbai, India.<br/><br/>
        
        when i'm not breaking code, i'm learning about
        accessibility, guessing today's nyt pangram, and{" "}
        <a class="clickable" id="hobbies" onClick={handleHobbyClick}>
          {currentHobby}
        </a>
        .
      </p>
      <p>
        reach out to me anytime at{" "}
        <a href="mailto:mihirpamnani31@gmail.com" class="clickable">
        mihirpamnani31@gmail.com
        </a>
        ,
        <br />
      </p>
      <div class="box">
        i'm looking for 2024 summer internship positions in the US! shoot me an{" "}
        <a href="mailto:mihirpamnani31@gmail.com" class="clickable">
          email
        </a>{" "}
        if you (or your friends) are hiring &lt;3{" "}
      </div>
    </div>
  );
}

export default Home;
