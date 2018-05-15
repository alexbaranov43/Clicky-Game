import React from "react";
import "./header.css"

const Header = ({ instruction, score, topscore }) => {

    return (
        <div>


            <nav className="navbar">
                <a className="navbar-brand" href="/">Watch Memory Game</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        {instruction} |
                        </li>
                    <li className="nav-item">   Score: {score} | Top Score: {topscore} </li>
                </ul>


            </nav>

        </div>


    )

}

export default Header