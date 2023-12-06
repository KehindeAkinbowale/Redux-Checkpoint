const initialState = {
    todos: [
      { id: 1, 
        description: 'Learn React', 
        isDone: false 
      },
      { 
        id: 2, 
        description: 'Learn Redux', 
        isDone: false, 
      },
      { id: 3, 
        description: 'Build something fun!', 
        isDone: false, 
      },
      {
        id: 4,
        description: 'Master Frontend Web development with MERN stack',
        isDone: false
      }
    ],
    filter: []
}

export default initialState;