import * as React from "react";
import "./Project.css";

function Project(props) {
    return (
        <li key={props.id} className="Project">
            <a href={props.link}>{props.title}</a>
            <div>{props.date}</div>
        </li>
    );
}

export default Project;
