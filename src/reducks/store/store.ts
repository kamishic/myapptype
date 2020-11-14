import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux"
import thunk from "redux-thunk"

import {ChatReducer} from "../chat/reducers"

export default function createStore(){
  return reduxCreateStore(
    combineReducers({
      chat: ChatReducer
    }
    ),
    applyMiddleware(
      thunk
    )
  )
}