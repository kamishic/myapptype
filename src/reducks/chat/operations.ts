//aws
import API, { graphqlOperation } from '@aws-amplify/api';
import {createChat as createChatApi} from '../../graphql/mutations'
import {getChat, listChats} from '../../graphql/queries'
import { fetchChatsAction } from './actions';

const chatsRef = () => {
  try {
    console.log("api start")
    const apiResult: any = API.graphql(graphqlOperation(listChats, { }))
    return apiResult
  } catch(e) {
    console.log("api error")
    console.log(e)
  }
}

export const fetchChats = () =>{
  return async (dispatch) => {
    const apiData: any= await chatsRef()
    /*let list: any = [];
    for(let i in chats){
      list.push(chats[i]);
    }
    console.log("chats↓")
    console.log(chats)
    console.log("chats.data↓")
    console.log(chats.data)
    console.log("chats.data.listChats↓")
    console.log(chats.data.listChats)
    console.log("chats.data.listChats.items↓")
    console.log(chats.data.listChats.items)
    console.log("list↓")
    console.log(list)
    console.log("api complete")
    return chats.data.listChats.items */
    const chatList =  apiData.data.listChats.items
    // 降順
    const chatListSorted = 
      chatList.sort(function(a, b) {
        if(a.createdAt<b.createdAt) return -1;
        if(a.createdAt > b.createdAt) return 1;
        return 0;
      })
    console.log("chatListSorted")
    console.log(chatListSorted)
    dispatch(fetchChatsAction(chatListSorted))

  }
}


export const createChat = async(chat:string,username:string) =>{
  try {
    console.log("api start")
    await API.graphql(graphqlOperation(createChatApi, {input:{chat:chat, name:username }}))
    //const chatList =  apiResult.data.listChats.items

    //dispatch(createChatAction(chatList))
  } catch(e) {
    console.log("api error")
    console.log(e)      
  }
}