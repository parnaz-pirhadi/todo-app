import { createAction } from 'helpers';
import columnsTypes from './types';

const columnsActions = {
  createColumn: createAction(columnsTypes.CREATE_COLUMN),
  updateColumn: createAction(columnsTypes.UPDATE_COLUMN),
};

export default columnsActions;
