import { createSelector } from 'reselect';
import {findColumnCards, findCard} from './utils'

const getCards = (state) => state.cards;
const getCardList = createSelector(getCards, cards => cards.list);
const getColumnCards = columnId => createSelector(getCardList, cards => findColumnCards(cards, columnId));
const getCard = cardId => createSelector(getCardList, cards => findCard(cards, cardId));

const cardsSelectors = {
  getCards,
  getCardList,
  getColumnCards,
  getCard,
};

export default cardsSelectors;
