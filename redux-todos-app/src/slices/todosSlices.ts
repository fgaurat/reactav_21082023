import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../core/Todo";

interface TodoListState{
    todos:Todo[]
}

const initialState: TodoListState = {
    todos: [
        {
            "userId": 1,
            "id": 12,
            "title": "ipsa repellendus fugit nisi",
            "completed": true
          },
          {
            "userId": 1,
            "id": 13,
            "title": "et doloremque nulla",
            "completed": false
          },
          {
            "userId": 1,
            "id": 14,
            "title": "repellendus sunt dolores architecto voluptatum",
            "completed": true
          },        
    ],
  }

  export const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {},
  })
  
  export default todoSlice.reducer
  
  