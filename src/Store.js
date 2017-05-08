import React from 'react';
import StoreItems from './StoreItems';
import Upgrades from './Upgrades';





class Store extends React.Component {
    constructor(props) {
      super(props);
      console.log("hej");

      this.store_items = new StoreItems();
      for (var i = 0; i < this.store_items.upgrades.length; i++) {
        console.log(this.store_items.upgrades[i].title);
        console.log(this.store_items.upgrades[i].clicksRequired);

      }

    }
    onClick(e, prutt) {
      this.props.upgrade_handler(prutt);
    }

    render() {
        return (
            <div>
              <Upgrades score={this.props.score} upgrade_handler={this.props.upgrade_handler.bind(this)} item = {this.store_items.upgrades[0]} />
              <Upgrades score={this.props.score} upgrade_handler={this.props.upgrade_handler.bind(this)} item = {this.store_items.upgrades[1]} />
              <Upgrades score={this.props.score} upgrade_handler={this.props.upgrade_handler.bind(this)} item = {this.store_items.upgrades[2]} />
              <Upgrades score={this.props.score} upgrade_handler={this.props.upgrade_handler.bind(this)} item = {this.store_items.upgrades[3]} />
              <Upgrades score={this.props.score} upgrade_handler={this.props.upgrade_handler.bind(this)} item = {this.store_items.upgrades[4]} />
            </div>
        )
    }
}



export default Store;
