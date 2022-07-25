import produce from "immer";
import { SET_TESTIMONY, SET_NEW_TESTIMONY } from "../constants/index";

export const initialState = {
  responseTestimony: null,
};

const catalogState = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_TESTIMONY:
        draft.responseTestimony = action.data;
        break;
      case SET_NEW_TESTIMONY:
        draft.responseTestimony = [
          action.testimony,
          ...state.responseTestimony,
        ];
        break;
      default:
        return state;
    }
  });

export default catalogState;
