import {
    configureStore,
  } from "@reduxjs/toolkit";
  import createSagaMiddleware from "redux-saga";
  import { rootSaga } from "../sagas/rootSaga";
  // import userReducer from "../reducers/userSlice";
  import { loadState,saveState } from "../localStorage";
  // import requestReducer from '../reducers/requestSlice'
  import reducer from "../reducers";

  const preloadedState = loadState();
  const sagaMiddleware = createSagaMiddleware();
  const localStorageMiddleware = ({ getState }) => {
    return next => action => {
      const result = next(action);
      // console.log(getState())
      saveState(getState())
      return result;
    };
  }
  // const reducer = combineReducers({
  //   user: userReducer,
  //   request:requestReducer
  // });
  
  const store = configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(sagaMiddleware).concat(localStorageMiddleware)
  });
  sagaMiddleware.run(rootSaga);
  
  export default store;