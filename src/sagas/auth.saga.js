import {call, put,takeLatest} from 'redux-saga/effects';
// import {takeLatest} from 'redux-saga';
import * as types from '../constants/actionTypes';
import { doLogin as login} from '../api/login';
import { setUser } from '../reducers/userSlice';
import { requestFinished, requestStarted } from '../reducers/requestSlice';

export function *doLogin(action){
    try{
        yield put(requestStarted({requestFrom:'LoginForm'}))
        const {email, password} = action.payload;
        const user =yield call(login,email,password);
        yield put(setUser(user));  
    }catch (e) {

        yield put({
          type: types.LOGIN__FAILED,
          payload: {
            message: e.message,
            statusCode: e.statusCode
          }
        });
    
      } finally {
    
        yield put(requestFinished({requestFrom:'LoginForm'}));
    
      }
    
}


export function *watchLogin() {
    yield takeLatest(types.LOGIN__REQUESTED, doLogin);
}
export function *doLoginFailed(){
    
}
export function *watchLoginFailed() {
    yield takeLatest(types.LOGIN__FAILED, doLoginFailed);
}