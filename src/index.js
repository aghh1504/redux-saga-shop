import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import Orders from './Components/Orders/index'
import rootReducer from './Reducers'
import rootSaga from './Sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

  ReactDOM.render(
    <Provider store={store}>
         <Orders />
     </Provider>,
    document.getElementById('root')
  )
