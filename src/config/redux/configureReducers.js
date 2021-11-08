import { combineReducers } from 'redux';
import rootReducers from './rootReducers';

const configureReducers = () =>
  combineReducers({
    ...rootReducers,
  });
export default configureReducers;
