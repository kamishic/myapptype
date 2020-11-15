import React,{useState,useEffect} from 'react';
import styled from "styled-components";
//aws
import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import {getChat, listChats} from '../graphql/queries'
import {onCreateChat} from '../graphql/subscriptions'

//material ui
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ChatIcon from '@material-ui/icons/Chat';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardAction from '@material-ui/core/CardActionArea';
//redux
import {useDispatch,useSelector} from 'react-redux'
//
import {appState} from '../reducks/store/initialState'
import {getChats} from '../reducks/chat/actions'
import {fetchChats,createChat} from '../reducks/chat/operations'
import { getChatList } from '../reducks/chat/selectors';

//material ui into styled-components
const Wraper = styled.div`

`;
const ChartWrapper = styled.div`
  margin : 10px 16px;
  border:dotted 1px silver;
`;
const MyGrid = styled(Grid)`
  border:dotted 1px black;
`;
const ChatField = styled(TextField)`
  width : 80%;
`;
const NameField = styled(TextField)`
  width : 50%;
`;
const ChatButton = styled(Button)`
  background-color = black;
`;
//
const Contents = () => {
  const dispatch = useDispatch()
  const chats = useSelector<any,any>( state => state)
  console.log("Contents selector")
  console.log(chats.chat.list)
  //const chats = getChatList(selector)
  //const blogSelector = useSelector<appState,appState["chat"]>((state) => state.chat)
  useEffect( () => {
    dispatch(fetchChats())}
    ,[]
    )
  
  const[chat,setChat] = useState("")
  const[user,setUser] = useState("")
  const onChatChange = (e) => {
    setChat(e.target.value)
  }
  const onUserChange = (e) => {
    setUser(e.target.value)
  }

/*
  console.log("subscription api start")
  const x = API.graphql(graphqlOperation(onCreateChat))
  console.log(x)
  console.log("subscription api end")
*/
  const onClickCreateChat = async (e) => {
    await createChat(chat,user)
    dispatch(fetchChats())
    setChat("")
    setUser("")
  }
  
  return (
    <Wraper>
      <MyGrid container>
        <MyGrid item xs={3}>
          <ul>サービス
            <li>認証</li>
            <li>チャット</li>
            <li>ToDo</li>
          </ul>
        </MyGrid>
        <MyGrid item xs={7}>myGrid 3:7:2
          <ChartWrapper>
            <div>
              {chats.chat.list.map( (chatMapped) => { 
                  return (
                  <>
                    <Card>
                      <CardContent>
                        {chatMapped.chat}
                      </CardContent>
                      <CardAction>
                        {chatMapped.name}
                        </CardAction>
                    </Card>
                  </>   
                  )             
                }
                )
             }
            </div>
            <div>
              <ChatField placeholder={"つぶやき"} onChange = {onChatChange} value={chat}/>
            </div>
              <NameField placeholder={"お名前"}  onChange = {onUserChange} value={user}/>
            <div>
              <ChatButton
                variant="contained"
                color="primary"
                size="small"
                endIcon={<ChatIcon/>} 
                onClick = {onClickCreateChat}
              />              
            </div>
          </ChartWrapper>
        </MyGrid>
        <MyGrid item xs={2}>right</MyGrid>
      </MyGrid>
    </Wraper>
  )
}

export default Contents