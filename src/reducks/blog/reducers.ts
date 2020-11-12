import * as Actions from './actions'
import initialState,{appState} from '../store/initialState'

export interface BlogState{
  title: string,
  content: string
}

export const BlogReducer = (state: appState = initialState, action:any) => {
  switch (action.type) {
    case Actions.POST_ARTICLE :
      return {
        ...state,
        ...action.payload
      }
    default :
      return state
  }

}