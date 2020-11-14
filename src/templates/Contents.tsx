import * as React from 'react';
import styled from "styled-components";
//aws
import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import {createChat} from '../graphql/mutations'
import {listChats} from '../graphql/queries'
 
//material ui
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ChatIcon from '@material-ui/icons/Chat';
//redux
import {useDispatch,useSelector} from 'react-redux'
//
import {appState} from '../reducks/store/initialState'
import {postArticleAction} from '../reducks/blog/actions'

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
//test
const getChats = async () => {
  const chatPost = { name : "testClientuser1", chat: "2from client ,hello" }  
  try {
    console.log("api start")
    const apiResult: any = await  API.graphql(graphqlOperation(listChats, { }))
    const chats: any= apiResult.data.listChats.items
    let list: any = [];
    for(let i in chats){
      list.push(chats[i]);
    }
    console.log(list)
    console.log("api complete")
    return list
  } catch {
    console.log("api error")
    console.log()
  }
}
//
const Contents = () => {
  const dispatch = useDispatch()
  const blogSelector = useSelector<appState,appState["blog"]>((state) => state.blog)

  const chats: any = getChats()
  console.log(chats[0])
  return (
    <Wraper>
      <MyGrid container>
        <MyGrid item xs={3}>
          <ul>実装予定サービス
            <li>認証</li>
            <li>チャット</li>
            <li>ToDo</li>
          </ul>
        </MyGrid>
        <MyGrid item xs={7}>myGrid 3:7:2
          <ChartWrapper>
            <div>
            </div>
            <div>
              <ChatField placeholder={"つぶやき"}/>
            </div>
              <NameField placeholder={"お名前"} />
            <div>
              <ChatButton
                variant="contained"
                color="primary"
                size="small"
                endIcon={<ChatIcon/>} 
                onClick = {() => getChats()}
              />
              <ChatButton
                variant="contained"
                color="primary"
                size="small"
                endIcon={<ChatIcon/>} 
                onClick = {() => dispatch(postArticleAction())}
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