import { isConstructorDeclaration } from "typescript"

export const GET_CHATS: string = "GET_CHATS"
export const getChats = () => {
  return {
    type: "GET_CHATS",
    payload:{
      chat:{
        list:[{
          chat: "button chat",
          name: "button name"
        }]            
      }
    }
  }
}

export const FETCH_CHATS: string = "FETCH_CHATS"
export const fetchChatsAction = (chatList:[]) => {
  console.log("fetchChatsAction chatList")
  console.log(chatList)
  return {
    type: "FETCH_CHATS",
    payload:chatList
  }
}