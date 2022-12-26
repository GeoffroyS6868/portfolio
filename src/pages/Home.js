import * as React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="home-div">
        <div className="name-div">Geoffroy Stanger</div>
        <div className="developer-div">Student developer</div>
        <div className="biography-align">
          <div className="biography">
            French developer born in 2002. I have been interested in programming since I was 15 years old and I now create websites and video games according to my inspirations.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
