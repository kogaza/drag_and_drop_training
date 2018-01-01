import React from 'react';
import ReactDOM from 'react-dom';
import Letter from './Letter.jsx'
import Square from './Square.jsx'

// class App extends React.Component {


//   render(){
    
//     return (
//       <div>działa</div>
//     )
//   }
// }

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Square black>
      <Letter />
    </Square>,
    document.getElementById('app')
  );
});