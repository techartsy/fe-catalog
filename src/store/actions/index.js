import {
  GET_TESTIMONY,
  SET_TESTIMONY,
  POST_TESTIMONY,
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

export const postTestimony = (payload) => {
  return {
    type: POST_TESTIMONY,
    payload,
  };
};
