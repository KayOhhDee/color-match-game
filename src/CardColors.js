export const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
};

const Cards = () => {
  let cards = [
    { id: 0, cardState: CardState.HIDING, backgroundColor: "#2BBBAD" },
    { id: 1, cardState: CardState.HIDING, backgroundColor: "#2BBBAD" },
    { id: 2, cardState: CardState.HIDING, backgroundColor: "#4285F4" },
    { id: 3, cardState: CardState.HIDING, backgroundColor: "#4285F4" },
    { id: 4, cardState: CardState.HIDING, backgroundColor: "#AA66CC" },
    { id: 5, cardState: CardState.HIDING, backgroundColor: "#AA66CC" },
    { id: 6, cardState: CardState.HIDING, backgroundColor: "#FF3547" },
    { id: 7, cardState: CardState.HIDING, backgroundColor: "#FF3547" },
    { id: 8, cardState: CardState.HIDING, backgroundColor: "#F9B633" },
    { id: 9, cardState: CardState.HIDING, backgroundColor: "#F9B633" },
    { id: 10, cardState: CardState.HIDING, backgroundColor: "#00C851" },
    { id: 11, cardState: CardState.HIDING, backgroundColor: "#00C851" },
    { id: 12, cardState: CardState.HIDING, backgroundColor: "#18FFFF" },
    { id: 13, cardState: CardState.HIDING, backgroundColor: "#18FFFF" },
    { id: 14, cardState: CardState.HIDING, backgroundColor: "#3F729B" },
    { id: 15, cardState: CardState.HIDING, backgroundColor: "#3F729B" },
    { id: 16, cardState: CardState.HIDING, backgroundColor: "#EF6191" },
    { id: 17, cardState: CardState.HIDING, backgroundColor: "#EF6191" }
  ];

  return cards;
}

export default Cards;