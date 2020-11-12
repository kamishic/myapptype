import React from 'react'




interface ArticleProps{
  title: string,
  content: string
}

const Article = (props: ArticleProps) => {
  return(
    <article>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </article>
  )
}

export default Article