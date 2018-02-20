import React, { Component } from 'react';

class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exploded: false,
      nearby: 0,
      revealed: false,
      flagged: false
    }
  }

  componentWillMount(){
    this.setState({...this.props.mData[this.props.rowId][this.props.id]});
  }

  handleClick(event) {
    if (event.ctrlKey || event.metaKey) {
        this.handleRightClick();
    } else {
      this.props.tileClickHandler(this.props.mData, this.props.rowId, this.props.id);
    }

    return true;
  }

  handleRightClick() {
    let tile = this.props.mData[this.props.rowId][this.props.id];
    tile.flagged = true;
    this.setState({mData:{...tile}});
  }

  render() {
    let tile = this.props.mData[this.props.rowId][this.props.id];
    return (
        <li id={`tile-${this.props.id}`} className={tile.revealed ? 'reveal' : 'hidden'}
          onClick={this.handleClick.bind(this)} onContextMenu={this.handleRightClick.bind(this)}>
          <span>
          { tile.exploded ? 'Boom' : '' }
          { tile.nearby && !tile.exploded && !tile.flagged ? tile.nearby : '' }
          { tile.flagged && !tile.exploded ? 'F' : '' }
          </span>
        </li>
    );
  }
}

export default Tile;
