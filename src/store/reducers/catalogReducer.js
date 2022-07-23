import produce from "immer";
import { SET_TESTIMONY } from "../constants/index";

export const initialState = {
  responseTestimony: null,
};

const catalogState = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_TESTIMONY:
        draft.responseTestimony = action.data;
        break;
      default:
        return state;
    }
  });

export default catalogState;
