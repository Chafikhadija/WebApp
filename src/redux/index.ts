import {createStore,combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import models from "./reducers/models"
import profile from "./reducers/profile"

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default createStore(combineReducers({
    models,
    profile
}),composeEnhancers(applyMiddleware(thunk)))
