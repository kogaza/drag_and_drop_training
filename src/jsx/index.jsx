import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {


  render(){
    
    return (
      <div>działa</div>
    )
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});