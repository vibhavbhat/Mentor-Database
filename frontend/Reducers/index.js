import { combineReducers } from 'redux';
import { reducer } from 'react-redux-sweetalert';
import { routerReducer as router } from 'react-router-redux';


export default combineReducers({
  sweetalert: reducer,
  router,
});