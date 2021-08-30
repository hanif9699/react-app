import {call, put,takeLatest} from 'redux-saga/effects';
// import {takeLatest} from 'redux-saga';
import * as types from '../constants/actionTypes';
import { doLogin as login} from '../api/login';
import { setUser } from '../reducers/userSlice';

export function *doLogin(action){
    const {email, password} = action.payload;
    const user =yield call(login,email,password);
    yield put(setUser(user));   
}


export function *watchLogin() {
    yield takeLatest(types.LOGIN__REQUESTED, doLogin);
}