import * as React from "react";
import "./Home.css";
import Header from "../components/Header";

function Home() {
    return (
        <Header page="home">
            <div className="biography-align">
                <div className="biography">
                    French developer born in 2002. I have been interested in programming since I was 15 years old and I now create websites and video games according to my inspirations.
                </div>
            </div>
        </Header>
    );
}

export default Home;
