import * as React from 'react';
import './App.css';

import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import {createChat} from './graphql/mutations'

import Blog from './reducks/blog/Blog'



import {mytest} from './myexercise/myexercise'
//material-ui

import {createStyles,makeStyles} from '@material-ui/styles'

//templates
import Header from './templates/Header'
import Contents from './templates/Contents'
import Footer from './templates/Footer'
//aws認証？
import Amplify, * as AmplifyModules from 'aws-amplify'
import awsconfig from './aws-exports'
Amplify.configure({
  ...awsconfig,                               
  aws_appsync_authenticationType: "API_KEY"
})

const useStyles = makeStyles(() =>
  createStyles({
    "button": {
      borderColor: "#FFB549",
      color: "#FFB549",
      fontWeight:600,
      margin:"8px",
      "&:hover": {
        backgroundColor: "#FFB549",
        color:"#fff"
      }
    },
    "text":{

    }

  })
)


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



  //postTest()

  return (
    <React.Fragment>
      <Header />
      <Contents />
      <Footer />
    </React.Fragment>
  );
}

export default App;