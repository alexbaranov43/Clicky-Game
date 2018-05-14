import React from 'react';
import GameCard from "./components/GameCard"
import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import cards from "./cards.json"
import './App.css';

class App extends React.Component {
  state = {
    cards: cards,
    score: 0,
    topscore: 0,
    instruction: '', 
    selectedWatch: []
  }

  componentDidMount() {
    this.setState({ instruction: 'Click A Watch To Begin' });
  }

  handleIncrementScore= id =>{
    const guessedWatch = this.state.selectedWatch
    if(guessedWatch.includes(id)){
      let instruction = this.state.instruction
      instruction = "Invalid Guess. You Lose"
      const score = 0
      const topscore = this.state.topscore
      this.setState({
        instruction, score, topscore, guessedWatch
      })
    }
    else {
      let instruction = this.state.instruction
      instruction = "Valid Selection. Select Another Watch"
      let score = this.state.score
      score += 1;
      let topscore = this.state.topscore;
      if (score > topscore){
        topscore += 1
      }
      let invalidWatches = guessedWatch.slice()
      invalidWatches.push(id)

    }

  }

  shuffleWatches = () =>{

  }
  render() {
    return (
      <Wrapper>
        <div>
        <Header score={this.state.score} topscore={this.topscore} />
        
        {this.state.cards.map(card=> {
          return <GameCard
            key={card.id}
            name={card.name}
            image={card.image}
          />;
        })}
        </div>
      </Wrapper>
    );
  }
}

export default App;
