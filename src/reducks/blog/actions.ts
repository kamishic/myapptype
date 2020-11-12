export const POST_ARTICLE: string = "POST_ARTICLE"
export const postArticleAction = () => {
  return {
    type: "POST_ARTICLE",
    payload:{
      blog:{
        title: "tilte changed by button",
        content: "content changed by button"
      }
    }
  }
}