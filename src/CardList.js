import React, {Component} from 'react';
import Resize from "./resizer";
import Card from './Card';

class CardList extends Component {


  componentDidMount() {
    Resize();
  }
  render() {
    let cardList = this.props.cards.map(card => <Card key={card.id} />);

    return (
      <div>
        <div class="scaleable-wrapper" id="scaleable-wrapper">
          <div class="very-specific-design" id="very-specific-design">
            <div class="flex-container">{cardList}</div>
          </div>
        </div>
      </div>
    );
  } 
}

export default CardList;