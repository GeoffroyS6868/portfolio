import * as React from "react";
import "./Home.css";
import "../components/Header";
import Header from "../components/Header";

function Home() {
  return (
    <div className="Home">
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

export default Home;