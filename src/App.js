import React, {Component} from 'react';
import shuffle from 'shuffle-array';
import Cards from './CardColors';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import CardList from './CardList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    let ImportedCards = Cards();
    let cards = shuffle(ImportedCards);

    this.state = {cards, noClick: false, showStart: true, showCardList: false}
    this.handleStart = this.handleStart.bind(this);
  }

  handleStart() {
    this.setState({showStart: false, showCardList: true});
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.showStart && (
          <LandingPage handleStart={this.handleStart} />
        )}
        {this.state.showCardList && (
        <CardList cards={this.state.cards} />
        )}
      </div>
    );
  }
}

export default App;
