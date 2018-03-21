import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../../config/redux-types'
import { put, takeEvery } from 'redux-saga/effects'
import getPeople from '../General/Client-Api-Data/clients.api'

function* fetchData () {
  try {
    const data = yield getPeople();
    yield put({ type: FETCHING_DATA_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE })
  }
}

function* dataSaga () {
  yield takeEvery(FETCHING_DATA, fetchData)
}

export default dataSaga