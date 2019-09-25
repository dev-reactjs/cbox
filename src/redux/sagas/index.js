import { all } from 'redux-saga/effects'
import { GET_USER_SAGA } from './userSaga'
import { USER_FILTER_SAGA } from './filterSaga'

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
  yield all([GET_USER_SAGA(), USER_FILTER_SAGA()])
}

export default rootSaga
