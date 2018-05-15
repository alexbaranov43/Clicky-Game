import React from "react";

import "./GameCard.css"

class GameCard extends React.Component {
    click = event => {
        this.props.handleIncrementScore(this.props.id);
        // this.props.shuffleWatches()
    };

    render() {

        return (
            <div className="card col-md-3">
                <div className="img-container" onClick={this.click}>
                    <img alt={this.props.name} src={this.props.image} />
                </div>
            </div>
        )
    }
};

export default GameCard