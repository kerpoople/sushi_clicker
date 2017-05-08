import React from 'react';
import Store from './Store';

class Clicker extends React.Component { //Clicker for main sushi piece.
    constructor(props) {
      super(props);
    }

    onClick(e) {
      this.props.score_handler(); //Call the function stored in score_handler
    }

    render() {
        return (
            <div>
            <h1>Click the sushi for more sushi!</h1>

                <img src="img/sushi_big.png" onClick={this.onClick.bind(this)}></img>
            </div>
        )
    }
}

export default Clicker;
