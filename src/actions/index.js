import {
  ADD_TODO,
  FETCH_TODOS,
  MARK_COMPLETED,
  EDIT_TODO,
  DELETE_TODO,
  FETCH_TODO
} from "./types";
import todoApi from "../apis/todo-api";

import history from "../history";

export const addTodo = formData => {
  return async dispatch => {
    console.log(formData);
    const response = await todoApi.post("/", formData);
    dispatch({
      type: ADD_TODO,
      payload: response.data
    });
    history.push("/pending");
  };
};

export const fetchTodos = () => {
  return async dispatch => {
    const response = await todoApi.get("/");
    console.log(response.data);
    dispatch({
      type: FETCH_TODOS,
      payload: response.data.card_list
    });
  };
};

export const fetchTodo = id => {
  return async dispatch => {
    const response = await todoApi.get(`/todos/${id}`);
    dispatch({
      type: FETCH_TODO,
      payload: response.data
    });
  };
};

export const markCompleted = id => {
  return async dispatch => {
    const response = await todoApi.patch(`/mark-complete/${id}`);
    dispatch({
      type: MARK_COMPLETED,
      payload: id
    });
  };
};

export const editTodo = (id, formData) => {
  return async dispatch => {
    const response = await todoApi.patch(`/${id}`, formData);
    console.log(response.data);
    dispatch({
      type: EDIT_TODO,
      payload: response.data
    });
    history.push("/pending");
  };
};

export const deleteTodo = id => {
  return async dispatch => {
    await todoApi.delete(`/${id}`);
    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  };
};
