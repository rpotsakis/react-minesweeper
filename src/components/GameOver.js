import React, { Component } from 'react';
import styles from '../styles/gameover';


class GameOver extends Component {
  render() {
    return (
      <div style={styles.mask}>
        <div style={styles.dialog}>
          <h2>GAME OVER</h2>
          <h3>You lost :[</h3>
          <button style={styles.button} onClick={this.props.onButtonClick}>Play Again?</button>
        </div>
      </div>
    );
  }
}

export default GameOver;
