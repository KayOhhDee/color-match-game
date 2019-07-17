import React, {Component} from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div>
        <Navbar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
