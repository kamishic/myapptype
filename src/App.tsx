import * as React from 'react';
import './App.css';
import Blog from './reducks/blog/Blog'
import {useDispatch,useSelector} from 'react-redux'

import {mytest} from './myexercise/myexercise'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  console.log(selector)
    
  return (
    <React.Fragment>
      <ul>
        <li>{mytest<string>("test")}</li>
        <li>{mytest<number>(1)}</li>
      </ul>
      <Blog/>
    </React.Fragment>
  );
}

export default App;