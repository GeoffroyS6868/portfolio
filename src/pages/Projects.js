import * as React from "react";
import "./Projects.css";
import Header from "../components/Header";
import Project from "../components/Project";

function Projects() {
    return (
        <Header page="projects">
            <div className="projects-align">
                <div className="projects">
                    <ul>
                        <div className="empty"></div>
                        <Project link="https://github.com/GeoffroyS6868/portfolio" title="Portfolio" date="2023" id="1"></Project>
                        <Project link="https://github.com/GeoffroyS6868/adventofcode" title="AdventOfCode 2022" date="2022" id="2"></Project>
                        <div className="empty"></div>
                    </ul>
                </div>
            </div>
        </Header>
    );
}

export default Projects;
