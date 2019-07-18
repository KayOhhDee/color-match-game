import React, {Component} from 'react';
import Resize from "./resizer";
import {CardState} from "./CardColors";
import Card from './Card';

class CardList extends Component {


  componentDidMount() {
    Resize();
  }
  render() {
    let cardList = this.props.cards.map(card => 
      <Card 
        key={card.id}
        showing={card.cardState !== CardState.HIDING}
        backgroundColor={card.backgroundColor} 
        handleClick={() => this.props.handleClick(card.id)}
      />
      );

    return (
      <div>
        <div className="scaleable-wrapper" id="scaleable-wrapper">
          <div className="very-specific-design" id="very-specific-design">
            <div className="flex-container">
              {cardList}
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default CardList;