import React, {Component} from 'react';
import shuffle from 'shuffle-array';
import { CardState } from "./CardColors";
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
    this.handleClick = this.handleClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleStart() {
    this.setState({showStart: false, showCardList: true});
  }

  handleClick(id) {

  }

  handleNewGame() {
    let cards = this.state.cards.map(card => ({
        ...card,
        cardState: CardState.HIDING
      }))
      cards = shuffle(cards);
      this.setState({cards, showCardList: true, showStart: false});
  }

  render() {
    return (
      <div>
        <Navbar handleNewGame={this.handleNewGame} />
        {this.state.showStart && (
          <LandingPage handleStart={this.handleStart} />
        )}
        {this.state.showCardList && (
          <CardList cards={this.state.cards} handleClick={this.handleClick}/>
        )}
      </div>
    );
  }
}

export default App;
