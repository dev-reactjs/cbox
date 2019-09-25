import { put, takeEvery, call } from 'redux-saga/effects'
import getApiCaller from '../../getApiCaller'

const API_DATA = () => {
  return getApiCaller(`5d889c8a3300002c0ed7da42`).then(response => {
    return response
  })
}

export const GET_USER_SAGA = function* fetchUsers() {
  yield takeEvery('GET_USER', function*(action) {
    yield put({ type: 'GET_USER_STARTED' })
    try {
      const DATA = yield call(API_DATA.bind(this, action.payload))
      yield put({
        type: 'GET_USER_SUCCESS',
        payload: { status: 'success', data: DATA }
      })
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'GET_USER_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        })
      } else {
        yield put({
          type: 'GET_USER_FAILED',
          payload: { status: 'failure', message: error }
        })
      }
    }
  })
}
