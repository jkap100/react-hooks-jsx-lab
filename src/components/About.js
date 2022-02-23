import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>lorem ipsum dolor sit amet, lorem ipsum dolor lorem ipsum dolor</p>
      <img src={image} alt="I made this"></img>
    </div>
  );
}

export default About;
