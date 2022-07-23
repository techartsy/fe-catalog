import { call, put, takeLatest } from "redux-saga/effects";
import _, { isEmpty } from "lodash";
import { GET_TESTIMONY, POST_TESTIMONY } from "./store/constants/index";
import { getAllTestimony, postTestimony } from "./domain/API";
import { setTestimonies } from "./store/actions";
import { decryptData } from "./utils/crypto";

function* doGetTestimony() {
  try {
    const response = yield call(getAllTestimony);
    if (!isEmpty(response)) {
      yield put(setTestimonies(decryptData(response.response)));
      console.log(decryptData(response.response), "<<<<<<<");
    }
  } catch (error) {
    console.log(error, "<< error");
  }
}

function* doPostTestimony({ payload }) {
  try {
    const response = yield call(postTestimony, payload);
    console.log(response);
  } catch (error) {
    console.log(error, "<< error");
  }
}

export default function* mySaga() {
  yield takeLatest(GET_TESTIMONY, doGetTestimony);
  yield takeLatest(POST_TESTIMONY, doPostTestimony);
}
