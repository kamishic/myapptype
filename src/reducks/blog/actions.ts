export const POST_ARTICLE: string = "POST_ARTICLE"
export const postArticleAction = () => {
  return {
    type: "POST_ARTICLE",
    payload:{
      title: "testTitle",
      content: "testContent"
    }
  }
}