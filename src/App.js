import React from 'react';
import Upgrades from './Upgrades';
import Clicker from './Clicker';
import Store from './Store';

var clicks = 0;

//Takes the current score and returns the new one based on fixed 'boosts'
//Returns the full new score
function CalculateNewScore(current_score, added_score) {

  current_score += added_score;
  return current_score;
}




class App extends React.Component {
    constructor(props) {
      super(props);
        this.state = { //Default state for score and time.
            score: 0,
            count: 0,
            multiplier: 1,
            tick_bonus: 0,
        }

      this.timer = setInterval(this.tick.bind(this), 1000);
    }
    tick() {
      this.setState({count: (this.state.count + 1)}); //Time counter used for upgrades.
      this.setState({score: CalculateNewScore(this.state.score, this.state.tick_bonus)});
    }

    AddScore() {
      this.setState({score: CalculateNewScore(this.state.score, this.state.multiplier)}); //Calls the  CalculateNewScore function with the current score
    }

    AddUpgrade(item) { //Available score upgrades.
      console.log("Här ska det bli uppgraderingar!");
      console.log(item);

      if(item.effect_multiply > 1)
        this.setState({multiplier: this.state.multiplier * item.effect_multiply});

      if (item.effect_bonus > 0)
        this.setState({score: CalculateNewScore(this.state.score, item.effect_bonus)});

      if (item.effect_ticker > 0)
        this.setState({tick_bonus: this.state.tick_bonus + item.effect_ticker});
    }

    render() {
        return (
            <div>
                <h1>You have {this.state.score} sushis!</h1>
                <p>Sushi per click: {this.state.multiplier}</p>
                <p>Sushi per second: {this.state.tick_bonus}</p>
                <Clicker score={this.state.score} score_handler={this.AddScore.bind(this)}/>
                <Store score={this.state.score} upgrade_handler={this.AddUpgrade.bind(this)} />
                <p>{this.state.count} seconds played!</p>
            </div>
        )
    }
}

export default App;
