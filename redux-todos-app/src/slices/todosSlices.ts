import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../core/Todo";
import { TodoDAO } from "../core/TodoDAO";

interface TodoListState {
  todos: Todo[];
}

const initialState: TodoListState = {
  todos: [],
};

export const fetchTodoList = createAsyncThunk(
  "todos/fetchTodoList",
  async () => {
    const dao = new TodoDAO()
    const todos = await dao.findAll()
    return todos;
  }
);


export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todo:Todo)=>{
    const dao = new TodoDAO()
    await dao.delete(todo)
    return todo;    
  }
)

export const saveTodo = createAsyncThunk(
  "todos/saveTodo",
  async (todo:Todo)=>{
    const dao = new TodoDAO()
    const savedTodo = await dao.save(todo)
    return savedTodo;    
  }
)

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTodoList.fulfilled.type]:(state,action)=>{
      state.todos = action.payload
    },
    [deleteTodo.fulfilled.type]:(state,action)=>{
      state.todos = state.todos.filter(t => t.id !== action.payload.id) 
    },
    [saveTodo.fulfilled.type]:(state,action)=>{
      state.todos.push(action.payload)
    },
  },
});

export default todoSlice.reducer;
