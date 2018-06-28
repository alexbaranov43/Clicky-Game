import React from "react";
import "./header.css"

const Header = ({ instruction, score, topscore }) => {

    return (
        <div>
            <nav className="navbar navbar-fixed-top">
                <a className="navbar-brand" href="/Clicky-Game">Persistence of Memory</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav mr-auto text-center">
                    <li className="nav-item">
                        {instruction}
                    </li>
                    <li className="nav-item">   Score: {score} | Top Score: {topscore} </li>
                </ul>
                <div className="Directions">
                    <h1>Watch Memory Game</h1>
                    <p>
                        Click an an image to earn points, but don't click on any more than once!
                </p>
                </div>
            </nav>
        </div>
    )
}

export default Header