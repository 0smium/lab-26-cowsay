import './style/main.scss';
import React from 'react'; //use JSX
import ReactDom from 'react-dom'; //render JSX

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='hello-navbar'>
        <h1> lab-26 </h1>
      </header>
    );
  }
}
