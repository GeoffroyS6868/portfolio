import * as React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <nav>
        <div className="Link-box">
          <Link className="Link" to="/">Home</Link>
        </div>
        <div className="Link-box">
          <Link className="Link" to="/about">About</Link>
        </div>
        <div className="Link-box">
          <Link className="Link" to="/skills">Skills</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;