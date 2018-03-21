import { createStore, applyMiddleware } from 'redux'
import app from './config/root-reducer'

import createSagaMiddleware from 'redux-saga'
import dataSaga from './config/root-saga'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(app, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(dataSaga)
  return store
}