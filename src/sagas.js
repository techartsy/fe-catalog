import { call, put, takeLatest } from "redux-saga/effects";
import _, { isEmpty } from "lodash";
import { GET_TESTIMONY, POST_TESTIMONY } from "./store/constants/index";
import { getAllTestimony, postTestimony } from "./domain/API";
import { setTestimonies, setNewTestimony } from "./store/actions";
import { decryptData } from "./utils/crypto";

function* doGetTestimony() {
  try {
    const response = yield call(getAllTestimony);
    if (!isEmpty(response)) {
      yield put(setTestimonies(decryptData(response.response).reverse()));
    }
  } catch (error) {
    console.log(error, "<< error");
  }
}

function* doPostTestimony({ payload, cbError, cbSuccess }) {
  try {
    const response = yield call(postTestimony, payload);
    cbSuccess && cbSuccess();
    yield put(setNewTestimony(response));
  } catch (error) {
    cbError && cbError();
  }
}

export default function* mySaga() {
  yield takeLatest(GET_TESTIMONY, doGetTestimony);
  yield takeLatest(POST_TESTIMONY, doPostTestimony);
}
