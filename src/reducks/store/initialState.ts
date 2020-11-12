export interface appState {
  blog:{
    title: string,
    content: string
  },
  users:{

  }
}

const initialState: appState = {
  blog:{
    title: "initialTitle",
    content: "initialContent"
  },
  users:{

  }
}

export default initialState