import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
      <Board letterPosition={[3]} />,
    document.getElementById('app')
  );
});