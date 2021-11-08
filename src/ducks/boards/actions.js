import { createAction } from 'helpers';
import boardsTypes from './types';

const boardsActions = {
  createBoard: createAction(boardsTypes.CREATE_BOARD),
  updateBoard: createAction(boardsTypes.UPDATE_BOARD),
};

export default boardsActions;
