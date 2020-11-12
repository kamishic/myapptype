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

import Amplify, * as AmplifyModules from 'aws-amplify'
import awsconfig from './aws-exports'
Amplify.configure({
  ...awsconfig,                               
  aws_appsync_authenticationType: "API_KEY"
})

const postTest = async () => {
  const chatPost = { name : "testClientuser1", chat: "2from client ,hello" }  
  try {
    console.log("api start")
    await  API.graphql(graphqlOperation(createChat, { input: chatPost }))
    console.log("api complete")
  } catch {
    console.log("api error")
    console.log()
  }

}


const App: React.FC = () => {

  const dispatch = useDispatch()
  const blogSelector = useSelector<appState,appState["blog"]>((state) => state.blog)

  postTest()

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