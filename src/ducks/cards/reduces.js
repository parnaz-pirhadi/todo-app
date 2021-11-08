import cardsTypes from './types';
import {updateCard} from './utils';

export const initialStates = {
  list: [],
};

const cardsReducers = (state = initialStates, action) => {
  switch (action.type) {
    case cardsTypes.CREATE_CARD:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: Date.now(),
            ...action.payload
          }
        ]
      };
    case cardsTypes.UPDATE_CARD:
      return {
        ...state,
        list: updateCard(state.list, action.payload)
      };
    default:
      return { ...state };
  }
};

export default cardsReducers;
