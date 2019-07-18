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

    this.state = {
      cards, 
      noClick: false, 
      showStart: true, 
      showCardList: false,
      winMessage: false
    }
    this.handleStart = this.handleStart.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleStart() {
    this.setState({showStart: false, showCardList: true, winMessage: false});
  }

  handleClick(id) {
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(card => {
        if(idsToChange.includes(card.id)) {
          return {
            ...card,
            cardState: newCardState
          }
        }
        return card;
      })
    }

    const foundCard = this.state.cards.find(c => c.id === id);

    if(this.state.noClick || foundCard.cardState !== CardState.HIDING) {
      return;
    }
    
    let noClick = false;

    let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);

    const showingCards = cards.filter(card => card.cardState === CardState.SHOWING);

    const ids = showingCards.map(card => card.id);

    if(showingCards.length === 2 && 
      showingCards[0].backgroundColor === showingCards[1].backgroundColor){
      cards = mapCardState(cards, ids, CardState.MATCHING);
    } else if(showingCards.length === 2) {
      let hidingCards = mapCardState(cards, ids, CardState.HIDING);

      noClick = true;

      this.setState({cards, noClick}, () => {
        setTimeout(() => {
          this.setState({cards: hidingCards, noClick: false})
        }, 1200);
      })
      return;
    }
    this.setState({cards, noClick});

    let unmatched = this.state.cards.filter(c => c.cardState === CardState.HIDING)
    console.log(unmatched.length)
    
    if(unmatched.length === 1) {
      this.setState({showCardList: false, showStart: false, winMessage: true})
    }
  }

  handleNewGame() {
    let cards = this.state.cards.map(card => ({
        ...card,
        cardState: CardState.HIDING
      }))
      cards = shuffle(cards);
      this.setState({cards, showCardList: true, showStart: false, winMessage: false});
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
        {this.state.winMessage && (
          <div>
            <h2>You Won!!!!</h2>
          </div>
        )}
      </div>
    );
  }
}

export default App;
