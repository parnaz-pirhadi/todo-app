import {createStore} from 'redux';
import {persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';

import initialState from './initialState';
import configureReducers from './configureReducers';

const configureStore = () => {
  const reducers = configureReducers();

  const composeEnhancers = composeWithDevTools({
    name: 'simple-todo-app'
  });

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(),
  );

  persistStore(store);

  return store;
};

export default configureStore;
