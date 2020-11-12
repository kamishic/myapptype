import {
  createStore as reduxCreateStore,
  combineReducers
} from "redux"

import {BlogReducer} from "../blog/reducers"

export default function createStore(){
  return reduxCreateStore(
    combineReducers({
      blog: BlogReducer
    }
    )
  )
}