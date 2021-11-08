import { createSelector } from 'reselect';
import {findBoard} from './utils'

const getBoards = (state) => state.boards;
const getBoardsList = createSelector(getBoards, boards => boards.list);
const getBoard = boardId => createSelector(getBoardsList, boards => findBoard(boards, boardId));

const boardsSelectors = {
  getBoards,
  getBoardsList,
  getBoard,
};

export default boardsSelectors;
