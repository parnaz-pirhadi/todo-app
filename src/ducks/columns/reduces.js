import columnsTypes from './types';
import {updateColumn} from './utils';

export const initialStates = {
  list: [],
};

const columnsReducers = (state = initialStates, action) => {
  switch (action.type) {
    case columnsTypes.CREATE_COLUMN:
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
    case columnsTypes.UPDATE_COLUMN:
      return {
        ...state,
        list: updateColumn(state.list, action.payload)
      };
    default:
      return { ...state };
  }
};

export default columnsReducers;
