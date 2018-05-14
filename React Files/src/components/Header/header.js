import React from "react";
import "./header.css"

const Header = ({instruction, score, topscore}) => {

    return (
        <div>
        <nav className="navbar">
            <ul>
                <li className="Brand"><a href="/">Watch Memory</a></li>
                <li className="instruction">{instruction}</li>
                <li className="Score">Score: {score}</li>
                <li className="topScore">Top Score: {topscore}</li>
            </ul>
        </nav>
        </div>
    )

}

export default Header