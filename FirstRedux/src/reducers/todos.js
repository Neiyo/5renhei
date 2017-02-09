/**
 * Created by Joey on 1/19/17.
 */
import * as TODOS from '../constants/ActionTypes'

const initialState = {
  username: 'Joey',
  password: '',
  id: 0
}


export default function todos(state = initialState, action) {
  switch (action.type) {
    case TODOS.LOGIN_TODO:
      return {
        ...state,
        payload: action.payload
      }
    case TODOS.LOGOUT_TODO:
      console.log('reducer');
      return state;
    case TODOS.USERNAME_CHANGE:
      return {
        ...state,
        username: action.username
      };
    case TODOS.PASSWORD_CHANGE:
      return {
        ...state,
        password: action.password
      };
    default:
      return state
  }
}
