import * as React from "react";
import "./About.css";
import "../components/Header";
import Header from "../components/Header";

function About() {
  return (
    <div className="About">
        <Header></Header>
      <h1>
        Hello,
        <br></br>
        I'm Geoffroy,
        <br></br>
        student developer
      </h1>
    </div>
  );
}

export default About;