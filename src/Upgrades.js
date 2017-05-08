import React from 'react';
import Store from './Store';

function icon(amount, item, num_pieces) { //Changes the upgrade icons when affordable.
  var active = item.icon_active;
  var inactive = item.icon_inactive;
    if (amount >= item.clicksRequired[num_pieces])
      return active;
    else
      return inactive;
}


class Upgrades extends React.Component {
    constructor(props) {
      super(props);
      this.item = this.props.item; //Save the item set as property
      this.state = {
        num_pieces: 0,
      }
    }

    onClick(item, e) { //Counts number of bought upgrades.
      let new_pieces = this.state.num_pieces +1;
      if (this.props.score >= this.item.clicksRequired[this.state.num_pieces] && new_pieces < this.item.clicksRequired.length) {
          this.setState({num_pieces: new_pieces});
          this.props.upgrade_handler(item);
      }
    }

    render() {
        return (
              <div className="store">
                <h3>{this.item.title + " x" + this.state.num_pieces}</h3>
                <img src={icon(this.props.score, this.item, this.state.num_pieces)} onClick={this.onClick.bind(this, this.item)}></img>
                <p>{this.item.effect}</p>

                <p>Cost: {this.item.clicksRequired[this.state.num_pieces]}</p>
              </div>
        )
    }
}



export default Upgrades;
