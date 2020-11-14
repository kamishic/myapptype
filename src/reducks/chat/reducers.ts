import * as Actions from './actions'
import initialState,{appState} from '../store/initialState'

export interface ChatState{
  chat: string,
  name: string
}

export const ChatReducer = (state: appState = initialState, action:any) => {
  console.log("ChatReducer logstart")
  console.log(state)
  console.log(action)
  console.log("ChatReducer logend")

  switch (action.type) {
    case Actions.GET_CHATS :
      return {
        ...state,
        ...action.payload
      }
    case Actions.FETCH_CHATS :
      console.log("Reducer Fetch Chats action.payload")
      console.log(action.payload)
      return{
        ...state,
        list:[...action.payload]
      }
    default :
      console.log("BlogReducer default part")
      return {...state}
  }
}