import boardsTypes from './types';
import {updateBoard} from './utils';

export const initialStates = {
  list: [],
};

const boardsReducers = (state = initialStates, action) => {
  switch (action.type) {
    case boardsTypes.CREATE_BOARD:
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
    case boardsTypes.UPDATE_BOARD:
      return {
        ...state,
        list: updateBoard(state.list, action.payload)
      };
    default:
      return { ...state };
  }
};

export default boardsReducers;
