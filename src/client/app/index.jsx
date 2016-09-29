import { double, addFive } from './../../lib';
console.log(double(2));
console.log(addFive(2));

import React from 'react';
import { render } from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p> Like Me!</p>
        <AwesomeComponent />
      </div>
    );
  }
}

render(<App title="Practice" />, document.getElementById('app'));
