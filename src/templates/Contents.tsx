import * as React from 'react';
import styled from "styled-components";
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
//
const Contents = () => {
  const dispatch = useDispatch()
  const blogSelector = useSelector<appState,appState["blog"]>((state) => state.blog)

  return (
    <Wraper>
      <MyGrid container>
        <MyGrid item xs={3}>left</MyGrid>
        <MyGrid item xs={7}>myGrid 3:7:2
          <ChartWrapper>
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