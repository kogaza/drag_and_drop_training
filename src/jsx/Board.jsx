import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Square from './Square.jsx'
import Letter from './Letter.jsx'

export default class Board extends Component {
  static propTypes = {
    letterPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  };
  
  renderSquare(i) {

    const black = i % 2 === 1;

    const [letterX] = this.props.letterPosition;
    const piece = (i === letterX) ?
      <Letter /> :
      null;
      
    return (
      <div key={i}
            style={{ width: '10%' }}>
        <Square black={black}>
          {piece}
        </Square>
      </div>
    );
  }

  render() {
    const squares = [];
    for(let i = 0; i < 10; i++){
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '500px',
        height: '50px',
        display: 'flex',
        border: '1px solid red'
      }}>
        {squares}
      </div>
    );
  }
}