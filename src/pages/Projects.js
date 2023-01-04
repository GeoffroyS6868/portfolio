import * as React from "react";
import "./Projects.css";
import Header from "../components/Header";
import Project from "../components/Project";

function Projects() {
    /*const [offset, setOffset] = useState(0);

    useEffect(() => {
        const el = document.getElementById('projects');
        const onScroll = (event) => console.log(event);
        el.addEventListener('scroll', onScroll, {passive: true});
        console.log(offset);
    }, []);*/
    return (
        <Header page="projects">
            <div className="projects-align">
                <div className="projects">
                    <ul>
                        <Project link="https://github.com/GeoffroyS6868/adventofcode" title="Advent of Code" date="2022" id="1"></Project>
                        <Project link="https://github.com/GeoffroyS6868/portfolio" title="Portfolio" date="2023" id="2"></Project>
                    </ul>
                </div>
            </div>
        </Header>
    )
}

export default Projects;
