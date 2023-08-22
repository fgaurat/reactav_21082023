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

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTodoList.fulfilled.type]:(state,action)=>{
      state.todos = action.payload
    }
  },
});

export default todoSlice.reducer;
