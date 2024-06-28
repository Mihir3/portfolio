import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import BlogNavBar from "../../components/blog_navbar";
import ImageHoverCard from "../../components/image_hover_card";
import { Helmet } from "react-helmet";

function Spring24() {
  useEffect(() => {
    document.title = "mihir's blogs (/ω＼)";
    document.metaDescription = "test";
  }, []);

  const horizontalMedia = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  };

  const mediaStyle = {
    width: '250px',  // Fixed width for all media
    height: '250px', // Fixed height for all media
    objectFit: 'cover' // Ensures content fits within the specified dimensions
  };

  const captionStyle = {
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: '10px', // Adds space between media and caption
  };

  return (
    <div>
     <BlogNavBar></BlogNavBar>
      <Helmet>
        <meta name="description" content="mihir's blogs" />
      </Helmet>
      <br />
      <div class="flex-container" id="blog_header_card">
        <h1 id="blog_header">cs in the midst of cornfields</h1>
        
      </div>

      <p>
       28 june '24{" "}
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
      </p>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
        <div style={{ flex: '1' }}>
          <p>
          I remember it as if it were yesterday, precisely six months back, when I landed in snowy Champaign, dragging my bags to my apartment two blocks from the bus stop. The plane ride from India was rather exhausting yet I was all excited to start my new life! The next two weeks were a blur -- setting up my room, getting a mobile network connection, opening a bank account, and numerous grocery runs while contemplating my courses for the semester.
          </p>
        </div>
        <img src="../portfolio/assets/me-uiuc.jpg" alt="Image 0" style={{ width: 200, height: 200 }} />
      </div>
        <div class = "AI">
        <p>I came to graduate school at UIUC with three primary objectives: improving my understanding of data, learning the intricacies of machine learning with text and images, and grasping the practical details of real-time software systems.</p>
        <p> This blog is my attempt to document my journey at grad school and my learnings along the way.</p>
          <p>In a world enamored by the charm of ChatGPT after years of experiential architectures since the transformer and the dawn of the scaling laws for neural networks, it was almost as if everybody was discussing the whims of generative AI, which has only made me want to pursue the understanding of core concepts in depth.</p>
          <p>For my first semester, I chose three courses covering a spectrum of machine learning topics, listed in descending order of course load:</p>
        </div>
        <div class="course">
            <h2>CS 444: Deep Learning for Computer Vision by Prof. Svetlana Lazebnik</h2>
              <div  style={horizontalMedia}> 
              <img src="../portfolio/assets/cs444-gans.png" alt="Image 1" style={mediaStyle} />
              <video controls style={mediaStyle}>
                <source src="../portfolio/assets/cs444-rl.mp4" type="video/mp4" />
                video tag
              </video>
              <img src="../portfolio/assets/cs444-diffusion.png" alt="Image 2" style={mediaStyle} />
              </div>
              <div>
              <p style={captionStyle}>
                (L-R) : cats by GAN, breakout game with RL-DQN, cartoon face generated by tiny-diffusion
              </p>
              </div>
            <p>I thoroughly enjoyed this course—the lectures and assignments designed by Prof. Lazebnik were commendable and time-consuming. The class covered concepts dealing with images, starting right from linear classifiers with detailed derivations on one end of the spectrum to deep reinforcement learning by training our own Deep Q-learning model to play the Atari Breakout game (with image snapshots as an experience buffer for cumulative reward) towards the advanced sections of coursework.</p>
            <p>We did assignments where we built a neural network from scratch, defining the fundamentals of forward and backward propagation (our own loss.backward() :P) in code, crafted an extensive assignment defining the crucial loss function for YOLO in the world of object detection, and, my favorite, generated (slightly deformed) cats with GANs!</p>
            <p>As I was registered for the 4-credit version of the course, I had a project deliverable where we explored diffusion models. I spent days figuring out the math behind the reverse process in diffusion as modeled with an MDP and how we approximated the posterior distribution of pixels for generating quality images. It was a moment of awe reminiscent of my undergraduate days when I first understood the chain rule in neural networks with 3Blue1Brown.</p>
            <p>My <a
          href="https://drive.google.com/file/d/1sesTVjuEYO-ZYWffbzBzJAwAfoDUthoK/view?usp=sharing"
          class="clickable"
          target="_blank"
        >
          <b>final project exploring diffusion</b>
        </a>{" "} with three teammates involved fine-tuning latent diffusion models, writing diffusion from scratch in PyTorch, and testing out Progressive Distillation for fine-tuned diffusion models. This course was an eye-opener, equipping me with a solid understanding of GANs, diffusion models, instance segmentation, object detection, and more. I am eager to see how machine-generated images can morph our world.</p>
        </div>

        <div class="course">
            <h2>CS 598: ML and Data Systems by Prof. Yongjoo Park</h2>
           
            <p>This was my first paper-reading class, and I read many interesting papers. My primary motive for taking a paper-reading class each semester is to gain a structured template for selecting papers from the vast world of pre-prints on Arxiv.</p>
            <p>Each class involved a paper presentation by a fellow student, followed by Prof. Park’s insights on the paper with background setup (e.g.,discussing Central Limit Theorem for BlinkDB) and related advances or real-time implementations (e.g., Apache Parquet while discussing C-Store). This was often followed by a small quiz and extended queries with Prof. Park.</p>
            <p>As the name suggests, the class dealt with 22 papers discussing data systems built for machine learning. Initial papers covered approximate query processing with sampling in BlinkDB, estimating cardinality with HyperLogLog, computing data frames, and nearest-neighbor search with vector indexes like LSH and HNSW. </p>
            <div align="center">
              <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRYUZbl9-D7UzhGTydzey849oGDYRd1Kh0r3MOVX5cDjyUbnRtaI0N1p-2mcwKRmg/embed?start=true&loop=true&delayms=3000" frameborder="0" width="480" height="300" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div>
            <p style={captionStyle}>
              My presentation on NVIDIA's <a
          href="https://arxiv.org/abs/1710.03740"
          class="clickable"
          target="_blank"
        >
          <b>Mixed-Precision Training</b>
        </a>{" "} for the class.
              </p>
            <p> After Spring break, we shifted gears to systems in production supporting machine learning frameworks such as tensor computations managed by TensorFlow with tf.data, tensor swapping with Capuchin, data labeling with Snorkel, NVIDIA’s Mixed-Precision Training (I presented this paper!), and supporting modern large language models with KV-Cache systems in vLLM.</p>
            <p>Along with paper discussions, the three assignments involved us in performing Online Aggregation (OLA) for query processing, contributing to the open-source project of Apache Arrow with encoding techniques and exploring Google’s library of Flatbuffers to understand the implementation of shared memory while serializing data frames. </p>
            <p>All in all, I learned a lot with papers in the course while exploring the systems that support the crucial functioning of machine learning models in real-world implementations.
</p>
        </div>

        <div class="course">
            <h2>CS 441: Applied Machine Learning by Prof. Derek Hoeim</h2>
            <p>This was a refresher course for me, considering my previous work in machine learning. My motivation was to polish my concepts and learn to handle data fundamentals.</p>
            <p>The class began with discussions on entropy and information gain — which serves as the basis of the modern formulation behind most machine learning frameworks i.e. given encoded input X, how much can I predict or decode about target Y?</p>
            <p>We explored prominent techniques: clustering with K-means, classification with KNN, and reducing data dimensions, along with regression, estimating PDFs, and outlier detection. One of my key learnings from the assignments was dealing with Gaussians and (for the first time) writing the EM algorithm step-by-step in code.</p>
            <div align='center'>
              <img src="../portfolio/assets/cs441-LR.png" alt="Image 1" style={{width:400, height:300}}/>
            </div>
            <p style={captionStyle}>
                Visualizing co-efficients (weights) of Linear Regression to observe the effect of different regularizers (Assignment 2)
              </p>
            <p>Later, Prof. Hoeim delved into neural networks, revisiting fundamentals that have improved large network training over the past decade. We then discussed mechanisms to handle text (Tokenizers, Attention, Transformers, BERT, GPT), images (filters, CNNs, R-CNN, ViT), and audio data (mel-spectrograms, MFCCs). </p>
            <p>The class helped me in various ways to solidify my concepts, highlighted connections between different mechanisms, and Prof. Hoeim certainly makes the class very interesting with his in-lecture discussions.</p>
        </div>

        <h2>closing thoughts</h2>
        <p>Reflecting on my first semester, I am amazed at the breadth and depth of knowledge I have gained. Each course provided a unique perspective on machine learning, from the theoretical foundations to practical applications in real-world systems. I am excited to continue my journey, building on this foundation and exploring new frontiers in machine learning and data science. </p>
        <p> Now, I'm working as a Machine learning Intern at Kohler - Research Park for the summer! (teaser for the next blog :P stay tuned)</p>
    </div>
  );
}

export default Spring24;
