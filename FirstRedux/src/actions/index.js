/**
 * Created by Joey on 1/19/17.
 */
import * as types from '../constants/ActionTypes'
import network from '../utils/network'

export const loginTodo = (username, pwd) => ({ type: types.LOGIN_TODO, username, pwd });

//ajax??????????userId as the identification
export const logoutTodo = (username) => ({ type:types.LOGOUT_TODO, username });
export const rememberTodo = (username, pwd) => ({ type:types.REMEMBER_TODO, username, pwd });
export const forgetpwdTodo = (username) => ({ type: types.FORGETPWD_TODO, username });
export const inputTodo = (text, inputType) => ({ type: types.INPUT_TODO, text, inputType });

export const usernameChangeTodo = (id, username) => ({
  type: types.USERNAME_CHANGE,
  id,
  username
});
export const passwordChangeTodo = (id, password) => ({
  type: types.PASSWORD_CHANGE,
  id,
  password
});

export async function ajaxTodo() {
  return {
    type: types.USERNAME_EXIST,
    payload: await network.get()
  }
}
