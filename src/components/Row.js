import React, { Component } from 'react';
import Tile from './Tile';

class Row extends Component {
  render() {
    return (
      <ul>
      {Array.apply(null, Array(this.props.boardSize)).map((item, i) =>
        <Tile key={i} id={i} rowId={this.props.rowId} mData={this.props.mData}
          tileClickHandler={this.props.tileClickHandler} />
      )}
      </ul>
    );
  }
}

export default Row;
