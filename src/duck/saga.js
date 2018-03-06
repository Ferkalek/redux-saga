import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { REQUEST_API_DATA, reciveApiDataAction } from './actions';

import { fetchData } from '../api';

function* getApiData(action) {
    try {
        const data = yield call(fetchData);
        console.log('11', data);
        yield put(reciveApiDataAction(data));
    } catch (e) {
        console.log(e)
    }
}

export default function* saga() {
    yield takeLatest(REQUEST_API_DATA, getApiData)
}