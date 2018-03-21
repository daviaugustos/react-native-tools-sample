import { fork } from 'redux-saga/effects';
import reduxExampleSaga from '../containers/Redux-Examples/reduxExamples.saga';

export default function* rootSaga () {
    yield [
        fork(reduxExampleSaga)
    ];
};