import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../core/Todo";
import { TodoDAO } from "../core/TodoDAO";

interface TodoListState {
  todos: Todo[];
}

const initialState: TodoListState = {
  todos: [],
  errors:"",
  loading:false
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
  reducers: {


    
  },
  extraReducers: {
    [fetchTodoList.fulfilled.type]:(state,action)=>{
      state.todos = action.payload
    },
    [deleteTodo.fulfilled.type]:(state,action)=>{
      state.todos = state.todos.filter(t => t.id !== action.payload.id) 
    },
    [saveTodo.fulfilled.type]:(state,action)=>{
      state.loading=false
      state.todos.push(action.payload)
    },
    [saveTodo.rejected.type]:(state,action)=>{
      state.errors = "Erreur"
    },
    [saveTodo.pending.type]:(state,action)=>{
      state.loading=true
    },
  },
});

export default todoSlice.reducer;
