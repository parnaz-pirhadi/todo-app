export const findCard = (cards, cardId) => cards.find(card => (
  parseInt(card.id, 10) === parseInt(cardId, 10)
));

export const findColumnCards = (cards, columnId) => cards.filter(card =>
  parseInt(card.columnId, 10) === parseInt(columnId, 10)
);

export const updateCard = (cards, updatedCard) => [
  ...cards.map(card => {
    if (parseInt(card.id, 10) === parseInt(updatedCard.id, 10)) {
      return updatedCard
    } else {
      return card
    }
  }),
]