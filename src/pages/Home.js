import * as React from "react";
import "./Home.css";
import "../components/Header";
import Header from "../components/Header";

function Home() {
  return (
    <div className="Home">
      <Header></Header>
      <div className="presentation-div">
        <div className="presentation-text">
          <h1>
            Hi, I'm Geoffroy
          </h1>
          <h2>
            Front End and Back End Developer
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;