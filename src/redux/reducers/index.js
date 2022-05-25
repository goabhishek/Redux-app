import { combineReducers } from 'redux';
import { productReducers } from './productReducesr';

const reducers = combineReducers({
  allProducts: productReducers,
});

export default reducers;
