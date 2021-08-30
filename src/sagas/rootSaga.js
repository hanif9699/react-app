import { fork,all } from "redux-saga/effects";
import * as auth from './auth.saga';

export function *rootSaga(){
    yield all([
        fork(auth.watchLogin),
    ])
}