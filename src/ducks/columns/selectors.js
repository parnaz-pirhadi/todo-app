import { createSelector } from 'reselect';
import {findBoardColumns, findColumn} from './utils'

const getColumns = (state) => state.columns;
const getColumnsList = createSelector(getColumns, columns => columns.list);
const getBoardColumns = boardId => createSelector(getColumnsList, columns => findBoardColumns(columns, boardId));
const getColumn = columnId => createSelector(getColumnsList, columns => findColumn(columns, columnId));

const columnsSelectors = {
  getColumns,
  getColumnsList,
  getBoardColumns,
  getColumn,
};

export default columnsSelectors;
