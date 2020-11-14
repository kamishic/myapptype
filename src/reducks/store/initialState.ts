import {useDispatch,useSelector} from 'react-redux'

export interface chatState {
  chat: string
  name: string
}

export interface appState {
  list: chatState[]
}

const initialState: appState = {
    list: []
}

export default initialState