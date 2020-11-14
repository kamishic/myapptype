import * as Actions from './actions'
import initialState,{appState} from '../store/initialState'

export interface BlogState{
  title: string,
  content: string
}

export const BlogReducer = (state: appState = initialState, action:any) => {
  console.log("BlogReducer logstart")
  console.log(state)
  console.log(action)
  console.log("BlogReducer logend")

  switch (action.type) {
    case Actions.POST_ARTICLE :
      return {
        ...state,
        ...action.payload
      }
    default :
      console.log("BlogReducer default part")
      return {...state}
  }

}