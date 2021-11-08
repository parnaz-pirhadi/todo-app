import { createAction } from 'helpers';
import cardsTypes from './types';

const cardsActions = {
  createCard: createAction(cardsTypes.CREATE_CARD),
  updateCard: createAction(cardsTypes.UPDATE_CARD),
};

export default cardsActions;
