import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  boardsReducers,
  columnsReducers,
  cardsReducers,
} from 'ducks';

const boardsPersistConfig = {
  key: 'boards',
  storage,
};

const columnsPersistConfig = {
  key: 'columns',
  storage,
};

const cardsPersistConfig = {
  key: 'cards',
  storage,
};

const rootReducers = {
  boards: persistReducer(boardsPersistConfig, boardsReducers),
  columns: persistReducer(columnsPersistConfig, columnsReducers),
  cards: persistReducer(cardsPersistConfig, cardsReducers),
};

export default rootReducers;
