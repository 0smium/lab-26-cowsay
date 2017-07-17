import './style/main.scss';
import React from 'react'; //use JSX
import ReactDom from 'react-dom'; //render JSX

import cowsay from 'cowsay-browser';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title:
      'Cowsay',
      count: 0,
    };

    this.cow = cowsay.say({
      text : faker.hacker.phrase(),
    });

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e) {
    console.log('event', e);

    this.setState((state) => {
      return {
        count: state.count + 1
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> click me </button>
        <p> {this.cow} </p>
      </div>
    )
  };
};

ReactDom.render(<App />, document.getElementById('root'))
