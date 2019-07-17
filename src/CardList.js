import React from 'react';
import Card from './Card';

const CardList = ({cards}) => {
  let cardList = cards.map(card => 
      <Card 
        key={card.id}
      />
    )

  return (
    <div class="scaleable-wrapper" id="scaleable-wrapper">
      <div class="very-specific-design" id="very-specific-design">
        <div class="flex-container">{cardList}</div>
      </div>
    </div>
  );
}

export default CardList;