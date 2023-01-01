import * as React from "react";
import "./Header.css";
import Navigation from "../components/Navigation";

function Header(props) {
    return (
        <div className="Header">
            <div className="header-div">
                <div className="name-div">Geoffroy Stanger</div>
                <div className="developer-div">Student developer</div>
                <Navigation page={props.page}></Navigation>
                {props.children}
            </div>
        </div>
    );
}

export default Header;
