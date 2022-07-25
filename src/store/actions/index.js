import {
  GET_TESTIMONY,
  SET_TESTIMONY,
  POST_TESTIMONY,
  SET_NEW_TESTIMONY,
} from "../constants/index";

export const getTestimony = () => {
  return {
    type: GET_TESTIMONY,
  };
};

export const setTestimonies = (data) => {
  return {
    type: SET_TESTIMONY,
    data,
  };
};

export const postTestimony = (payload, cbError, cbSuccess) => {
  return {
    type: POST_TESTIMONY,
    payload,
    cbError,
    cbSuccess,
  };
};

export const setNewTestimony = (testimony) => {
  return {
    type: SET_NEW_TESTIMONY,
    testimony,
  };
};
