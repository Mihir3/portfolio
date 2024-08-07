import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import BlogNavBar from "../components/blog_navbar";
import ImageHoverCard from "../components/image_hover_card";
import { Helmet } from "react-helmet";

function Blogs() {
  useEffect(() => {
    document.title = "mihir's blogs (/ω＼)";
    document.metaDescription = "test";
  }, []);

  return (
    <div>
      <Helmet>
        <meta name="description" content="mihir's blogs" />
      </Helmet>
      <div class="flex-container" id="blog_header_card">
        <h1 id="blog_header">blogs</h1>
        <BlogNavBar></BlogNavBar>
      </div>

      <p>
        scribbles about big stuff{" "}
      </p>
      <hr class="dashed"></hr>
      {/* <p>
        <b>Aug 2023</b>
        <br />-{" "}
        <NavLink to="/blogs/nyc" class="clickable">
          <u>[blog]</u>
        </NavLink>{" "}
        a nyc summer
        <br />-{" "}
        <NavLink to="/blogs/google" class="clickable">
          <u>[blog]</u>
        </NavLink>{" "}
        a summer with google
        <br />- went viral on{" "}
        <a
          href="https://twitter.com/qvinnh/status/1688944756422836224?s=20"
          class="clickable"
          target="_blank"
        >
          twitter
        </a>
      </p>
      <p>
        <b>July 2023</b>
        <br />- broke staging lol
        <br />- saw a baseball game in ny :)
        <br />- visited <ImageHoverCard
          text="sf"
          imageSrc={"/images/sf.png"}
        />{" "}
        and the <ImageHoverCard text="bay area" imageSrc={"/images/bay.png"} />{" "}
        for the first time!
      </p>
      <p>
        <b>June 2023</b>
        <br />- survived new york{" "}
        <ImageHoverCard text="smog" imageSrc={"/images/smog.png"} />{" "}
        <nobr>(ºΔº)</nobr>
      </p>
      <p>
        <b>May 2023</b>
        <br />- started working at google on their editors accessibility team
        <nobr>ヽ(・∀・)ﾉ</nobr>
        <br />- moved to nyc for the summer
      </p>
      <p>
        <b>Mar 2023</b>
        <br />- signed an offer with google for the summer! <br /> -{" "}
        <NavLink to="/blogs/quinn-ai" class="clickable">
          <u>[blog]</u>
        </NavLink>{" "}
        added{" "}
        <NavLink to="/quinn-ai" class="clickable">
          <u>quinn ai</u>
        </NavLink>{" "}
        to the website
      </p>
      <p />
      <p>
        <b>Feb 2023</b>
        <br />- created this website!
      </p>
      <p />
      <p>
        <b>Jul 2022</b>
        <br />- biked my first century mile with the same{" "}
        <ImageHoverCard text="friends" imageSrc={"/images/bikers.png"} />{" "}
        (toronto -&gt; niagara falls)
      </p>
      <p />
      <p>
        <b>June 2022</b>
        <br />- biked 75km for brain health with my{" "}
        <ImageHoverCard text="friends" imageSrc={"/images/friends.png"} />{" "}
        <ImageHoverCard
          text="(i at a banana on the highway)"
          imageSrc={"/images/banana.png"}
        />{" "}
        <br />- went to{" "}
        <ImageHoverCard text="vancouver" imageSrc={"/images/vancouver.png"} />!
      </p>
      <p />
      <p>
        <b>May 2022</b>
        <br />- started my first pm internship with purolator!
      </p>
      <p>
        <p />
        <b> Feb 2022</b>
        <br />- snowboarded the{" "}
        <ImageHoverCard
          text="west coast"
          imageSrc={"/images/snowboarding.png"}
        />{" "}
        for the first time
      </p>
      <p>
        <p />
        <b> Aug 2021</b>
        <br />- hiked{" "}
        <ImageHoverCard
          text="lake garibaldi"
          imageSrc={"/images/garibaldi.png"}
        />
        (first big hike)
      </p>
      <p /> */}
      <p></p>
      <p>
      <NavLink to="/blogs/spring24" class="clickable">
          <u>cs in the midst of cornfields</u>
      </NavLink>{" "}
        <br /> <br /> (tl;dr) first blog! thoughts about the spring '24 courses at UIUC
        <br /> <br /> 28 june '24
      </p>

    </div>
  );
}

export default Blogs;
