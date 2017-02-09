/**
 * Created by Joey on 1/19/17.
 */

import React from 'react'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import AsyncMiddleware from './middlewares/AsyncMiddleware'
import './styles/redux-first-login.css'

const store = createStore(reducer, {}, applyMiddleware(
  thunk,
  AsyncMiddleware
));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('rootEl')
)
