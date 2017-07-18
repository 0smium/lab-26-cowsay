import './style/main.scss';
import React from 'react'; //use JSX
import ReactDom from 'react-dom'; //render JSX

import cowsay from 'cowsay-browser';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Cowsay',
      count: 0,
      content: 'click the button',
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e) {
    console.log('event', e);

    this.setState((state) => {
      return {
        count: state.count + 1,
        // content: faker.hacker.phrase()
        content: faker.lorem.words()
      };
    });
  };

  render() {
    return (
      <div>
        <h3>Generate Cowsay Hacker</h3>
        <button onClick={this.handleClick}> click me </button>
        <pre> {cowsay.say({text: this.state.content})} </pre>
        <br />
        <pre> Current State: {this.state.count} </pre>
      </div>
    )
  };
};

ReactDom.render(<App />, document.getElementById('root'));
