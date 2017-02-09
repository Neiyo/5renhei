import { isPromise } from '../utils/network';
import { actionTypes } from '../constants/ActionTypes'

export default ({ dispatch }) => next => action => {
  if(isPromise(action)) {
    action
  }
  else {
    console.log('here');
    next(action);
  }
}
