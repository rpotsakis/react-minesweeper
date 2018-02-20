import React, { Component } from 'react';
import Row from './Row';
import GameOver from './GameOver';
import styles from '../styles/board';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mData:  this.getBoardData(),
      hitMine: false
    };
  }

  getBoardData() {
    return JSON.parse(JSON.stringify(this.props.boardData));
  }

  checkNearby(data, m, n) {
    let count = 0;

    // out of bounds, exit
    if(m < 0 || n < 0 || m >= data.length || n >= data.length)
      return 0;

    // debug: console.log(m +','+n);
    if(data[m][n].hasMine) {
      return 1;
    }
    if(!data[m][n].revealed) {
      data[m][n].revealed = true;
      this.setState({mData: data });

      // move left
      count += this.checkNearby(data, m, n-1);
      // move right
      count += this.checkNearby(data, m, n+1);
      // left-up
      count += this.checkNearby(data, m-1, n-1);
      // up
      count += this.checkNearby(data, m-1, n);
      // up-right
      count += this.checkNearby(data, m-1, n+1);
      // right-down
      count += this.checkNearby(data, m+1, n+1);
      // down
      count += this.checkNearby(data, m+1, n);
      // left-down
      count += this.checkNearby(data, m+1, n-1);
    }

    if(count > 0) {
      data[m][n].nearby = count;
    }


    this.setState({mData: data });
    return 0;
  }

  handleTileClick(mData, rowId, tileId) {
    let tile = mData[rowId][tileId];
    if(tile.revealed) {
      // no-op
      return true;
    } else if (tile.hasMine) {
      tile.exploded = true;
      this.setState({hitMine: true});
    }

    // check all nearby tiles
    this.checkNearby(mData, rowId, tileId);
    this.setState({mData: mData });
  }

  handleGameReset() {
    this.setState({
      mData: this.getBoardData(),
      hitMine: false
    });
  }

  render() {
    return (
      <div id="board" style={styles.board}>
      {this.state.hitMine ? <GameOver onButtonClick={this.handleGameReset.bind(this)}/> : ''}
      {Array.apply(null, Array(this.props.boardSize)).map((v, i)=>
        <Row key={i} rowId={i} boardSize={this.props.boardSize} mData={this.state.mData}
          tileClickHandler={this.handleTileClick.bind(this)} />
      )}
      </div>
    );
  }
}

export default Board;

Board.defaultProps = {
  mData: [],
  hitMine: false
}
