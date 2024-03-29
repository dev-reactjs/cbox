import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import ReducerContainer from './reducers'
import SagaContainer from './sagas'
// import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware()

// Wraping all reducer and sagas in a container called store
const store = createStore(
  ReducerContainer,
  applyMiddleware(
    sagaMiddleware
    // , logger
  )
)

sagaMiddleware.run(SagaContainer)

export default store
