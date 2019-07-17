import React, {Component} from 'react';
import shuffle from 'shuffle-array';
import Cards from './CardColors';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    let ImportedCards = Cards();
    let cards = shuffle(ImportedCards);

    this.state = {cards, noClick: false}
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
