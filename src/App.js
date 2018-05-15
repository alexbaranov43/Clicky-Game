import React from 'react';
import GameCard from "./components/GameCard"
import Header from "./components/Header"
import cards from "./cards.json"
import './App.css';

class App extends React.Component {
  state = {
    cards,
    score: 0,
    topscore: 0,
    instruction: '',
    selectedWatch: []
  }

  componentDidMount() {
    this.setState({ instruction: 'Click A Watch To Begin  ' });
  }

  handleIncrementScore = id => {
    const guessedWatch = this.state.selectedWatch
    if (guessedWatch.includes(id)) {
      let instruction = this.state.instruction
      instruction = "Invalid Guess. You Lose "
      const score = 0
      const topscore = this.state.topscore
      this.setState({
        instruction, score, topscore, selectedWatch: []
      })
    }
    else {
      let instruction = this.state.instruction
      instruction = "Valid Selection. Select Another Watch "
      let score = this.state.score
      score += 1;
      let topscore = this.state.topscore;
      if (score > topscore) {
        topscore += 1
      }
      let invalidWatches = guessedWatch.slice()
      invalidWatches.push(id)
      this.setState({
        score,
        topscore,
        instruction,
        selectedWatch: [...this.state.selectedWatch, id]
      });

    }

  }

  shuffleWatches = () => {
    let currentWatches = cards.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentWatches) {
      randomIndex = Math.floor(Math.random() * currentWatches);
      currentWatches -= 1;

      temporaryValue = cards[currentWatches];
      cards[currentWatches] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }

    this.setState({ cards });
  };
  render() {
    return (

      <div>
        <Header score={this.state.score} topscore={this.state.topscore} instruction={this.state.instruction} />
        <div className="container">
          <div className="row">
            {this.state.cards.map(card => {
              return <GameCard
                key={card.id}
                id={card.id}
                name={card.name}
                image={card.image}
                handleIncrementScore={this.handleIncrementScore}
                shuffleWatches={this.shuffleWatches}
              />;
            })}
          </div>
        </div>
      </div>

    );
  }
}

export default App;
