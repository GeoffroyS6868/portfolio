import * as React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
    var homeCSS = "link";
    if (props.page === "home")
        homeCSS += " clicked";
    var projectsCSS = "link";
    if (props.page === "projects")
        projectsCSS += " clicked";
    var contactCSS = "link";
    if (props.page === "contact")
        contactCSS += " clicked";

    return (
        <div className="Navigation">
            <Link className={homeCSS} to="/">Home</Link>
            <Link className={projectsCSS} to="/projects">Projects</Link>
            <Link className={contactCSS} to="/contact">Contact</Link>
        </div>
    );
}

export default Navigation;
