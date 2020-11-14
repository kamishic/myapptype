import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux"
import thunk from "redux-thunk"

import {BlogReducer} from "../blog/reducers"

export default function createStore(){
  return reduxCreateStore(
    combineReducers({
      blog: BlogReducer
    }
    ),
    applyMiddleware(
      thunk
    )
  )
}