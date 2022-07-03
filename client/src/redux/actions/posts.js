import axios from "axios";
import {
  CREATE_POST,
  DELETE_POST,
  FETCH_POST,
  LIKE_POST,
  NULL_POST,
  UPDATE_POST,
} from "../constants";

export const fetchAll = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/post");
    console.log(data);
    if (data?.length === 0) {
      dispatch({ type: NULL_POST, payload: null });
    } else {
      dispatch({ type: FETCH_POST, payload: data });
    }
  } catch (e) {
    console.log("");
  }
};

export const createPost = (bodyData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ ...bodyData });
  try {
    const { data } = await axios.post("/post/create", body, config);
    dispatch({ type: CREATE_POST, payload: data });
    dispatch(fetchAll());
  } catch (e) {
    console.log("");
  }
};

export const udpatePost = (id, bodyData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ ...bodyData });

  try {
    const { data } = await axios.post(`/post/create/${id}`, body, config);

    dispatch({ type: UPDATE_POST, payload: data });
    dispatch(fetchAll());
  } catch (e) {
    console.log(e);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    console.log(id);
    await axios.delete(`/post/delete/${id}`);
    dispatch({ type: DELETE_POST, payload: id });
    dispatch(fetchAll());
  } catch (e) {
    console.log(e);
  }
};

export const like = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const { data } = await axios.post(`/post/like/${id}`, config);
    dispatch({ type: LIKE_POST, payload: data });
    // dispatch(fetchAll());
  } catch (e) {
    console.log(e);
  }
};
