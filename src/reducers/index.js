import userReducer from './userSlice';
import requestReducer from './requestSlice'
import { combineReducers } from 'redux';

export default combineReducers({
    user:userReducer,
    request:requestReducer
})