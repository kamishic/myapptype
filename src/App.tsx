import * as React from 'react';
import './App.css';

import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import {createChat} from './graphql/mutations'

import Blog from './reducks/blog/Blog'
import {postArticleAction} from './reducks/blog/actions'

import {useDispatch,useSelector} from 'react-redux'
import {appState} from './reducks/store/initialState'

import {mytest} from './myexercise/myexercise'



const App: React.FC = () => {

  const dispatch = useDispatch()
  const blogSelector = useSelector<appState,appState["blog"]>((state) => state.blog)

  const chatPost = { name : "testClientuser", chat: "from client ,hello" }  
  API.graphql(graphqlOperation(createChat, { input: chatPost }));

  return (
    <React.Fragment>
      <ul>
        <li>{mytest<string>("test")}</li>
        <li>{mytest<number>(1)}</li>
      </ul>
      <Blog/>
      <button onClick = {() => dispatch(postArticleAction())}>
        投稿
      </button>
    </React.Fragment>
  );
}

export default App;