/**
 * Created by Joey on 1/19/17.
 */
import { combineReducers } from 'redux'
import todos from './todos'

const rootReducer = combineReducers({
    todos
});

export default rootReducer
