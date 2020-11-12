import React from 'react'
import Article from './Article'

import {DefaultRootState, useDispatch,useSelector} from 'react-redux'
import {appState} from '../store/initialState'
import { isConstructorDeclaration } from 'typescript'
import { getBlogTitle } from './selectors'

interface blogSelectoreState {
  blog:{
    blog:{
      title: string
      content: string
    }
    user:{}
  }
}

const Blog = () => {
  const blogSelector = useSelector<blogSelectoreState,blogSelectoreState>(state => state)
  console.log("Blog log start")
  console.log(blogSelector.blog.blog.title)
  console.log("Blog log end")
  
  return(
    <>
      <Article content = {"test"} title = {"ttest"} />
    </>
    )
}

export default Blog