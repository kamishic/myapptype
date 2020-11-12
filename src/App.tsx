import * as React from 'react';
import './App.css';

import Blog from './reducks/blog/Blog'
import {postArticleAction} from './reducks/blog/actions'

import {useDispatch,useSelector} from 'react-redux'
import {appState} from './reducks/store/initialState'

import {mytest} from './myexercise/myexercise'



const App: React.FC = () => {

  const dispatch = useDispatch()
  const blogSelector = useSelector<appState,appState["blog"]>((state) => state.blog)


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