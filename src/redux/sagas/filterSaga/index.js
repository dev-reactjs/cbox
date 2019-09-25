import { put, takeEvery } from 'redux-saga/effects'

export const USER_FILTER_SAGA = function* fetchUsers() {
  yield takeEvery('USER_FILTER', function*(action) {
    yield put({ type: 'USER_FILTER_STARTED' })
    try {
      const DATA = action.payload
      yield put({
        type: 'USER_FILTER_SUCCESS',
        payload: { status: 'success', data: DATA }
      })
    } catch (error) {
      if (error.toString() === 'TypeError: Network request failed') {
        yield put({
          type: 'USER_FILTER_NET_FAILED',
          payload: { status: 'failure', message: error.toString() }
        })
      } else {
        yield put({
          type: 'USER_FILTER_FAILED',
          payload: { status: 'failure', message: error }
        })
      }
    }
  })
}
