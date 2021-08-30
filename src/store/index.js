import {
    configureStore,
    combineReducers,
  } from "@reduxjs/toolkit";
  import createSagaMiddleware from "redux-saga";
  import { rootSaga } from "../sagas/rootSaga";
  import userReducer from "../reducers/userSlice";
  import { loadState,saveState } from "../localStorage";

  const preloadedState = loadState();
  const sagaMiddleware = createSagaMiddleware();
  const localStorageMiddleware = ({ getState }) => {
    return next => action => {
      const result = next(action);
      saveState(getState)
      return result;
    };
  }
  const reducer = combineReducers({
    user: userReducer
  });
  
  const store = configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(sagaMiddleware).concat(localStorageMiddleware)
  });
  sagaMiddleware.run(rootSaga);
  
  export default store;